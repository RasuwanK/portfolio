export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category:
    | "AI & Machine Learning"
    | "Web & Full-Stack"
    | "Creative Tech"
    | "Open Source";
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface SkillItem {
  name: string;
  category: "AI & ML" | "Engineering" | "Design & Creative" | "Tools & Cloud";
  highlight?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: "github" | "linkedin" | "twitter" | "discord" | "youtube" | "mail";
}

export interface PersonalInfo {
  name: string;
  domain: string;
  tagline: string;
  headline: {
    line1: string;
    line2: string;
  };
  roles: string[];
  bio: string;
  email: string;
  phone?: string;
  location: string;
  availability: string;
  cvUrl: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  projects: Project[];
  skills: SkillItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rasuwan Kalhara",
    domain: "rasuwan.com",
    tagline: "AI SOFTWARE ENGINEER . CREATIVE DIRECTOR . TEACHER",
    headline: {
      line1: "CREATIVE",
      line2: "AI ENGINEER.",
    },
    roles: ["AI SOFTWARE ENGINEER", "CREATIVE DIRECTOR", "TEACHER"],
    bio: "Building cutting-edge autonomous agents, multi-modal generative AI pipelines, and high-performance interactive web experiences.",
    email: "kalhara@rasuwan.com",
    phone: "+94 (77) 123-4567",
    location: "Colombo, Sri Lanka (Available Globally)",
    availability: "Open for AI consulting & senior engineering roles",
    cvUrl: "#", // Replace with your resume link (e.g., /resume.pdf or Google Drive link)
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      handle: "@rasuwan",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      handle: "in/rasuwan-kalhara",
      icon: "linkedin",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com",
      handle: "@rasuwan_ai",
      icon: "twitter",
    },
    {
      name: "Discord",
      url: "https://discord.com",
      handle: "rasuwan#0001",
      icon: "discord",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      handle: "@RasuwanAI",
      icon: "youtube",
    },
    {
      name: "Email",
      url: "mailto:kalhara@rasuwan.com",
      handle: "kalhara@rasuwan.com",
      icon: "mail",
    },
  ],

  projects: [
    {
      id: "ai-voice-recognition",
      title: "AI Voice Recognition",
      subtitle: "Real-time multilingual neural speech processor",
      description:
        "A low-latency speech pipeline that helps analyze audio in real-time, detect intent, and stream transcriptions to client agents with sub-80ms latency.",
      longDescription:
        "Built using custom fine-tuned Whisper architectures and streaming WebSockets. Supports 18 languages, acoustic noise suppression, speaker diarization, and emotion classification directly on edge GPUs.",
      category: "AI & Machine Learning",
      image: "/projects/project-voice.svg",
      tags: ["PyTorch", "Whisper", "WebSockets", "FastAPI", "Docker"],
      liveUrl: "https://example.com/voice-demo",
      githubUrl: "https://github.com/example/ai-voice-recognition",
      featured: true,
      metrics: "<80ms Latency • 99.2% Accuracy",
    },
    {
      id: "neural-video-synthesis",
      title: "Neural Video Synthesis",
      subtitle: "Diffusion-based procedural motion generation",
      description:
        "An automated framework for continuous video keyframing, motion extrapolation, and generative video compositing for virtual production.",
      longDescription:
        "Combines latent diffusion models with temporal attention layers. Generates high-fidelity 4K cinematic sequences from natural language and camera trajectory prompts.",
      category: "AI & Machine Learning",
      image: "/projects/project-code.svg",
      tags: ["Diffusion Models", "CUDA", "Python", "React", "ComfyUI"],
      liveUrl: "https://example.com/video-demo",
      githubUrl: "https://github.com/example/neural-video",
      featured: true,
      metrics: "4K 60FPS • 4x Faster Inference",
    },
    {
      id: "autonomous-code-agents",
      title: "Autonomous Code Agents",
      subtitle: "Multi-agent collaborative software engineering system",
      description:
        "A multi-agent swarm that inspects repositories, plans refactoring sequences, runs automated test suites, and drafts verified pull requests.",
      longDescription:
        "Orchestrates specialized LLM agents (Architect, Coder, Reviewer, Tester) using tree-of-thought planning and sandboxed container execution environments.",
      category: "AI & Machine Learning",
      image: "/projects/project-agent.svg",
      tags: ["LLM Agents", "TypeScript", "LangChain", "Next.js", "Docker"],
      liveUrl: "https://example.com/agents-demo",
      githubUrl: "https://github.com/example/code-agents",
      featured: true,
      metrics: "94% Benchmark Pass Rate",
    },
    {
      id: "creative-generative-canvas",
      title: "Creative Canvas AI",
      subtitle: "Interactive node-based canvas for AI creators",
      description:
        "A node-graph web workspace connecting text, vision, and audio models with infinite spatial layout and real-time canvas collaboration.",
      longDescription:
        "High-performance GPU-accelerated canvas built on WebGL and Next.js. Artists can drag-and-drop model nodes, blend latent spaces, and export production assets in real-time.",
      category: "Creative Tech",
      image: "/projects/project-canvas.svg",
      tags: ["WebGL", "Next.js 16", "Tailwind CSS", "Zustand", "Canvas API"],
      liveUrl: "https://example.com/canvas-demo",
      githubUrl: "https://github.com/example/creative-canvas",
      featured: false,
      metrics: "60FPS WebGL • 10K+ Nodes",
    },
    {
      id: "edge-intelligence-copilot",
      title: "Edge AI Copilot",
      subtitle: "Privacy-first local intelligence for developers",
      description:
        "Local LLM copilot running entirely in WebGPU on client browsers, providing context-aware completions without transmitting private data.",
      longDescription:
        "Leverages quantized WebLLM and ONNX Runtime Web to deliver zero-cloud token streaming, vector search over local workspaces, and complete offline capability.",
      category: "Web & Full-Stack",
      image: "/projects/project-voice.svg",
      tags: ["WebGPU", "ONNX", "TypeScript", "IndexedDB", "Wasm"],
      liveUrl: "https://example.com/edge-demo",
      githubUrl: "https://github.com/example/edge-copilot",
      featured: false,
      metrics: "100% Offline • 0 Cloud Costs",
    },
    {
      id: "algorithmic-sound-studio",
      title: "Algorithmic Sound Studio",
      subtitle: "Generative audio synthesis & interactive sequencer",
      description:
        "A browser-based synthesizer driving generative ambient textures through procedural audio DSP, neural timbre transfer, and MIDI control.",
      longDescription:
        "Explores procedural soundscapes using Web Audio API AudioWorklets combined with lightweight neural autoencoders for real-time acoustic morphology.",
      category: "Creative Tech",
      image: "/projects/project-code.svg",
      tags: ["Web Audio API", "DSP", "React 19", "AudioWorklet", "Tailwind"],
      liveUrl: "https://example.com/sound-demo",
      githubUrl: "https://github.com/example/sound-studio",
      featured: false,
      metrics: "<5ms Audio Jitter",
    },
  ],

  skills: [
    {
      name: "Deep Learning & Neural Nets",
      category: "AI & ML",
      highlight: true,
    },
    {
      name: "Large Language Models (LLMs)",
      category: "AI & ML",
      highlight: true,
    },
    { name: "PyTorch & TensorRT", category: "AI & ML", highlight: true },
    {
      name: "Computer Vision & Diffusion",
      category: "AI & ML",
      highlight: false,
    },
    {
      name: "Autonomous Multi-Agent Systems",
      category: "AI & ML",
      highlight: true,
    },
    {
      name: "Natural Language Processing",
      category: "AI & ML",
      highlight: false,
    },

    { name: "Next.js 16 & React 19", category: "Engineering", highlight: true },
    {
      name: "TypeScript & Modern JavaScript",
      category: "Engineering",
      highlight: true,
    },
    {
      name: "Python / FastAPI / AsyncIO",
      category: "Engineering",
      highlight: true,
    },
    { name: "Tailwind CSS & WebGL", category: "Engineering", highlight: false },
    {
      name: "Distributed Systems & REST/gRPC",
      category: "Engineering",
      highlight: false,
    },
    {
      name: "Docker, Kubernetes & GPU Clusters",
      category: "Tools & Cloud",
      highlight: true,
    },

    {
      name: "Creative Direction & UX",
      category: "Design & Creative",
      highlight: true,
    },
    {
      name: "Interactive Motion & 3D Shaders",
      category: "Design & Creative",
      highlight: false,
    },
    {
      name: "Technical Mentorship & Teaching",
      category: "Design & Creative",
      highlight: true,
    },
  ],
};
