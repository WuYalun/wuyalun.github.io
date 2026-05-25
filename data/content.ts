export const personalInfo = {
  name: "Yalun Wu",
  nameCN: "吴亚伦",
  nickname: "Aaron",
  tagline: "I build systems that make LLMs measurable, governable, and deployable.",
  bio: "I am a Master's student at the National University of Singapore (NUS), advised by Prof. Tat-Seng Chua at NExT++ Lab. My research focuses on trustworthy evaluation of large language models, long-horizon agent governance, and deploying AI systems into real-world business settings.",
  researchInterests: [
    "LLM Evaluation & Benchmarking",
    "Agent Memory Governance",
    "Multimodal Medical AI",
    "Trustworthy AI Systems",
    "Business-Driven AI Deployment",
  ],
  email: "aaaronwww@outlook.com",
  github: "https://github.com/WuYalun",
  location: "National University of Singapore, Singapore",
  avatar: "/avatar.jpg",
};

export const news = [
  { date: "May 2026", content: "Paper on Long-Horizon Memory Governance submitted to COLM 2026." },
  { date: "Apr 2026", content: "PilotBench (FLY-BENCH) paper released on arXiv [2604.08987]." },
  { date: "Apr 2026", content: "U2-BENCH accepted at ICLR 2026 (poster, April 25)." },
  { date: "Jan 2026", content: "Completed internship at Huazhu Group; submitted multi-agent supply chain paper to SIGMOD 2026." },
  { date: "Jul 2025", content: "H2HTalk accepted at NLPCC 2025 as an Oral paper." },
];

export const education = [
  {
    school: "National University of Singapore (NUS)",
    schoolCN: "新加坡国立大学",
    degree: "Master of Computing",
    lab: "NExT++ Lab",
    period: "Aug 2025 – Dec 2026",
    note: "Expected",
  },
  {
    school: "Beihang University (BUAA)",
    schoolCN: "北京航空航天大学",
    degree: "B.Eng. in Cyberspace Security",
    period: "Sep 2021 – Jul 2025",
    gpa: "GPA: 89/100",
    courses: "Data Structures · Machine Learning · Deep Learning · Reinforcement Learning",
    lang: "IELTS 6.5 · GRE 322 (V152/Q170)",
  },
];

export const publications = [
  {
    title: "PilotBench: A Benchmark for General Aviation Agents with Safety Constraints",
    authors: "Yalun Wu, et al.",
    venue: "IJCNN 2026",
    year: "2026",
    status: "Accepted",
    statusType: "published",
    arxiv: "https://arxiv.org/abs/2604.08987",
    note: "First Author · Evaluation method part submitted to COLM 2026",
  },
  {
    title: "U2-BENCH: Benchmarking Large Vision-Language Models on Ultrasound Understanding",
    authors: "Anjie Le, Henan Liu, ..., Yalun Wu, ..., Hongcheng Guo",
    venue: "ICLR 2026",
    year: "2026",
    status: "Published",
    statusType: "published",
    arxiv: "https://arxiv.org/abs/2505.17779",
    paperPage: "https://iclr.cc/virtual/2026/poster/10007874",
    note: "Core Contributor",
  },
  {
    title: "H2HTalk: Evaluating Large Language Models as Emotional Companion",
    authors: "Boyang Wang, Yalun Wu, Hongcheng Guo, Zhoujun Li",
    venue: "NLPCC 2025 (Oral)",
    year: "2025",
    status: "Published",
    statusType: "published",
    arxiv: "https://arxiv.org/abs/2507.03543",
    note: "Core Contributor",
  },
  {
    title: "Governing Evolving Memory in LLM Agents: Risks, Mechanisms, and the SSGM Framework",
    authors: "Yalun Wu, et al.",
    venue: "COLM 2026",
    year: "2026",
    status: "Under Review",
    statusType: "submitted",
    arxiv: "https://arxiv.org/abs/2603.11768",
    note: "Core Contributor",
  },
  {
    title: "DOLPHIN: A Multimodal Large Language Model for Ultrasound Understanding",
    authors: "... Yalun Wu, et al.",
    venue: "ACL Rolling Review / ICML 2026",
    year: "2026",
    status: "Under Review",
    statusType: "submitted",
    arxiv: "https://arxiv.org/abs/2509.25748",
    paperPage: "https://openreview.net/forum?id=EkC2ImlhgF",
    note: "Core Contributor",
  },
  {
    title: "Safety-Constrained Temporal Flight Modeling with Foundation Models",
    authors: "Yalun Wu*, et al.",
    venue: "Nature Machine Intelligence",
    year: "2026",
    status: "In Preparation",
    statusType: "ongoing",
    note: "Co-First Author",
  },
  {
    title: "Large-Scale Multimodal Benchmark for Brain Disease Foundation Models",
    authors: "..., Yalun Wu, et al.",
    venue: "Nature Medicine",
    year: "2026",
    status: "In Preparation",
    statusType: "ongoing",
    note: "Core Contributor",
  },
];

export const experiences = [
  {
    company: "Huazhu Group",
    companyCN: "华住集团",
    role: "Research Intern – Intelligent Food Supply Chain",
    period: "Oct 2025 – Jan 2026",
    highlights: [
      "Led end-to-end design and deployment of a multi-agent decision system for procurement, replenishment, and menu planning",
      "Built decision loop from data ingestion to strategy recommendation; integrated demand forecasting and supplier strategy recommendation",
      "Abstracted methodology into a systematic framework; submitted to SIGMOD 2026",
    ],
  },
  {
    company: "Dolphin AI Medical Technology",
    companyCN: "海豚之声医疗科技",
    role: "Research Intern – VLM Evaluation",
    period: "Apr 2025 – Sep 2025",
    highlights: [
      "Led VLM deployment and evaluation in medical ultrasound scenarios for large-scale benchmark experiments",
      "Designed and implemented U2-BENCH (ICLR 2026) and DOLPHIN (ICML 2026 submission)",
    ],
  },
  {
    company: "Beijing Flying Bear Technology",
    companyCN: "北京飞熊科技",
    role: "Intern – UAV R&D",
    period: "Jul 2024 – Sep 2024",
    highlights: [
      "Security testing and fault diagnosis for UAV communication links; assisted in defect localization and functional verification",
    ],
  },
];

export const projects = [
  {
    id: "self-evolving-mas",
    title: "Self-Evolving Multi-Agent Systems with Execute–Evaluate–Evolve Paradigm",
    category: "governance",
    status: "Master's Thesis · In Progress",
    statusType: "ongoing",
    highlights: [
      "Proposed Execute–Evaluate–Evolve framework decoupling MainAgent and MemoryAgent for gradient-free collaborative strategy optimization",
      "Validated on LoCoMo and LongMemEval; approaches RL-based memory management without gradient updates",
    ],
  },
  {
    id: "lhmg",
    title: "Long-Horizon Memory Governance (LHMG / SSGM)",
    category: "governance",
    status: "COLM 2026 · Under Review",
    statusType: "submitted",
    arxiv: "https://arxiv.org/abs/2603.11768",
    highlights: [
      "Models LLM agent memory as a governable, auditable system state to solve long-horizon drift and behavioral inconsistency",
      "Conflict-aware Revision Graph with No-Silent-Overwrite principle; Risk-Gated Memory Conditioning and Consistency-Constrained Decoding",
    ],
  },
];
