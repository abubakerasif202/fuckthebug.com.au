import {
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';

type MousePosition = { x: number; y: number };

export function mountHeroVisual(container: HTMLDivElement) {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 4;

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ alpha: true, antialias: false });
  } catch {
    return () => { /* WebGL unavailable — nothing to clean up */ };
  }
  renderer.setSize(width, height);
  renderer.setPixelRatio(1);
  container.appendChild(renderer.domElement);

  const group = new Group();
  scene.add(group);

  const shellGeo = new IcosahedronGeometry(1.8, 2);
  const shellMat = new MeshBasicMaterial({
    color: 0xbd00ff,
    wireframe: true,
    transparent: true,
    opacity: 0.2
  });
  const shell = new Mesh(shellGeo, shellMat);
  group.add(shell);

  const coreGeo = new IcosahedronGeometry(1.7, 1);
  const coreMat = new MeshBasicMaterial({
    color: 0x00f2ea,
    wireframe: true,
    transparent: true,
    opacity: 0.1
  });
  const core = new Mesh(coreGeo, coreMat);
  group.add(core);

  let mousePosition: MousePosition = { x: 0, y: 0 };
  let animationFrameId: number | null = null;
  const animate = () => {
    group.rotation.y += 0.0015;
    group.rotation.x += 0.0008;

    const { x, y } = mousePosition;
    group.rotation.x += (y * 0.1 - group.rotation.x) * 0.02;
    group.rotation.y += (x * 0.1 - group.rotation.y) * 0.02;

    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    mousePosition = { x, y };
  };

  const handleResize = () => {
    const nextWidth = container.clientWidth;
    const nextHeight = container.clientHeight;
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(nextWidth, nextHeight);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
  animationFrameId = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize);
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
    shellGeo.dispose();
    shellMat.dispose();
    coreGeo.dispose();
    coreMat.dispose();
    renderer.dispose();
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
  };
}
