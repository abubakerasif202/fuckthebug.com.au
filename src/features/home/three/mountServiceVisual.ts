import {
  BoxGeometry,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  OctahedronGeometry,
  PerspectiveCamera,
  Scene,
  TorusKnotGeometry,
  WebGLRenderer,
} from 'three';

export function mountServiceVisual(container: HTMLDivElement, serviceId: string) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, width / height, 0.1, 100);
  camera.position.z = 5;

  const renderer = new WebGLRenderer({ alpha: true, antialias: false });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const group = new Group();
  scene.add(group);

  let geometry;
  let color = 0x00f0ff;

  if (serviceId === 'web') geometry = new IcosahedronGeometry(1.5, 1);
  else if (serviceId === 'mobile') { geometry = new BoxGeometry(1.2, 2.2, 0.2); color = 0xff00ff; }
  else if (serviceId === 'cloud') { geometry = new TorusKnotGeometry(1, 0.3, 100, 16); color = 0xa855ff; }
  else { geometry = new OctahedronGeometry(1.5, 0); color = 0xff00ff; }

  const material = new MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.4 });
  const mesh = new Mesh(geometry, material);
  group.add(mesh);

  let animationId: number | null = null;
  const animate = () => {
    group.rotation.y += 0.01;
    group.rotation.x += 0.005;
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };

  window.addEventListener('resize', handleResize);
  animationId = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener('resize', handleResize);
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
