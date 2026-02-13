
export interface ServiceInfo {
  id: string;
  title: string;
  desc: string;
  features: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProjectBrief {
  projectName: string;
  techStack: string[];
  keyFeatures: string[];
  architecture: {
    overview: string;
    rationale?: string;
    dataFlow: string;
    microservices: {
      name: string;
      description: string;
    }[];
    protocols: string[];
  };
}
