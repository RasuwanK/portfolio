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
    domain: "rasuwan.dev",
    tagline: "AI SOFTWARE ENGINEER . CREATIVE DIRECTOR . TEACHER",
    headline: {
      line1: "CREATIVE",
      line2: "AI ENGINEER.",
    },
    roles: ["AI SOFTWARE ENGINEER", "CREATIVE DIRECTOR", "TEACHER"],
    bio: "Building cutting-edge autonomous agents, multi-modal generative AI pipelines, and high-performance interactive web experiences.",
    email: "kalharaweagala@gmail.com",
    phone: "+94 705 085 269",
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
      id: "voice-authentication-api",
      title: "Voice Authentication API",
      subtitle: "Speaker verification using deep learning and audio processing",
      description:
        "A speaker verification system that determines whether an uploaded audio sample belongs to a target speaker using a PyTorch-based machine learning pipeline.",
      longDescription:
        "Built an end-to-end speaker verification application covering audio data preparation, model training, checkpoint-based inference, configurable preprocessing and decision thresholds, and API deployment. The data pipeline includes audio canonicalization, duplicate rejection, manifest generation, and leakage-safe dataset splitting. The trained model is exposed through a FastAPI service that returns target-speaker probability and classification results.",
      category: "AI & Machine Learning",
      image: "/projects/project-voice.svg",
      tags: [
        "PyTorch",
        "FastAPI",
        "Python",
        "Audio Processing",
        "Machine Learning",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/RasuwanK/self-voice-recognition",
      featured: true,
      metrics: "Speaker Verification • FastAPI • PyTorch",
    },
    {
      id: "handwritten-digit-recognition",
      title: "Handwritten Digit Recognition & Generation",
      subtitle: "CNN classification and GAN-based handwritten digit generation",
      description:
        "A full-stack computer vision application combining a CNN for handwritten digit recognition with a GAN for generating synthetic handwritten digits.",
      longDescription:
        "Developed an end-to-end machine learning application using PyTorch for both handwritten digit classification and image generation. The project includes model training, preprocessing, inference, visualization, and a FastAPI backend. Users can draw digits through a browser-based canvas for CNN prediction and generate synthetic handwritten digits through the GAN pipeline. The system is organized into modular model, inference, API, frontend, and experimentation components.",
      category: "AI & Machine Learning",
      image: "/projects/project-digit.svg",
      tags: ["PyTorch", "CNN", "GAN", "Computer Vision", "FastAPI", "OpenCV"],
      liveUrl: "",
      githubUrl: "https://github.com/RasuwanK/handwritten-digit-recognition",
      featured: true,
      metrics: "CNN Classification • GAN Generation • FastAPI",
    },
    {
      id: "mobile-price-predictor",
      title: "Mobile Price Predictor",
      subtitle:
        "End-to-end machine learning system for smartphone price estimation",
      description:
        "A machine learning application that predicts smartphone market prices from hardware specifications and brand metadata.",
      longDescription:
        "Built a complete machine learning pipeline covering preprocessing, feature engineering, model comparison, inference, API deployment, testing, and a web interface. The system uses categorical encoding, feature scaling, imputation, and domain-specific ratio features before evaluating Decision Tree, Random Forest, and Linear Regression models. The Decision Tree model achieved an approximately 0.88 R² score. Model inference is exposed through FastAPI with both single-device and batch prediction endpoints, Swagger documentation, and automated tests.",
      category: "AI & Machine Learning",
      image: "/projects/project-mobile-price.svg",
      tags: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "FastAPI",
        "Machine Learning",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/RasuwanK/mobile-price-predictor",
      featured: true,
      metrics: "R² ≈ 0.88 • Single & Batch Prediction",
    },
    {
      id: "spamguard",
      title: "SpamGuard",
      subtitle: "Machine learning powered email spam classification",
      description:
        "An email application that integrates a Scikit-learn classification pipeline to identify messages as spam or safe.",
      longDescription:
        "Developed an end-to-end email classification application combining machine learning with a FastAPI backend and browser-based mail interface. The application integrates model-based spam classification into common mail operations such as composing, searching, reading, starring, moving, deleting, and spam testing. Automated tests were added with Pytest, while the trained Scikit-learn pipeline is persisted for inference.",
      category: "AI & Machine Learning",
      image: "/projects/project-spam.svg",
      tags: ["Python", "Scikit-learn", "FastAPI", "NLP", "Pytest"],
      liveUrl: "",
      githubUrl: "https://github.com/RasuwanK/mail-spam-detector",
      featured: false,
      metrics: "Spam Classification • FastAPI • Automated Testing",
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
