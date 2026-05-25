export const personalInfo = {
  name: "Yalun Wu",
  nameCN: "吴亚伦",
  nickname: "Aaron",
  tagline: "I build systems that make LLMs measurable, governable, and deployable.",
  bio: "Master's student at NUS NExT++ Lab, working on trustworthy evaluation frameworks, LLM agent governance, and business-driven AI deployment. My research spans three layers: defining what reliable means, designing mechanisms to make systems reliable, and turning reliability into real business value.",
  email: "aaaronwww@outlook.com",
  github: "https://github.com/WuYalun",
  location: "National University of Singapore, Singapore",
  avatar: "/avatar.jpg",
};

export const education = [
  {
    school: "National University of Singapore (NUS)",
    schoolCN: "新加坡国立大学",
    degree: "Master of Computing",
    lab: "NExT++ Lab",
    period: "Aug 2025 – Dec 2026 (Expected)",
    courses: "Data Structures, Machine Learning, Deep Learning, Reinforcement Learning",
  },
  {
    school: "Beihang University (BUAA)",
    schoolCN: "北京航空航天大学",
    degree: "B.Eng. in Cyberspace Security",
    period: "Sep 2021 – Jul 2025",
    gpa: "GPA: 89/100",
  },
];

export const researchFramework = {
  tagline: "From Evaluation to Governance to Business Impact",
  layers: [
    {
      id: "evaluation",
      title: "Trustworthy Evaluation",
      subtitle: "How do we know if a model is truly reliable?",
      icon: "🔬",
      color: "blue",
      projects: ["FLY-BENCH", "FLY-EVAL++", "U2-BENCH", "H2HTalk", "Brain Disease Benchmark"],
    },
    {
      id: "governance",
      title: "Agent Governance & Refinement",
      subtitle: "Once we know a system is unstable, how do we fix it?",
      icon: "⚙️",
      color: "purple",
      projects: ["Self-Evolving MAS", "LHMG", "DOLPHIN"],
    },
    {
      id: "deployment",
      title: "Business Value Deployment",
      subtitle: "How do we turn reliability into executable business outcomes?",
      icon: "🚀",
      color: "green",
      projects: ["Huazhu Multi-Agent System"],
    },
  ],
};

export const projects = [
  {
    id: "self-evolving-mas",
    title: "Self-Evolving Multi-Agent Systems with Execute–Evaluate–Evolve Paradigm",
    titleShort: "Self-Evolving MAS",
    category: "governance",
    status: "Master's Thesis · In Progress",
    statusType: "ongoing",
    highlights: [
      "Proposed Execute–Evaluate–Evolve framework decoupling MainAgent and MemoryAgent for gradient-free collaborative strategy optimization",
      "Built structured memory system (Episodic / Semantic / Working) with traceable mechanisms for multi-timescale knowledge accumulation",
      "Validated on LoCoMo and LongMemEval benchmarks, approaching RL-based memory management with stable performance gains",
    ],
  },
  {
    id: "fly-bench",
    title: "FLY-BENCH: Evaluating LLMs for Safety-Constrained Flight Modeling",
    titleShort: "FLY-BENCH",
    category: "evaluation",
    status: "IJCNN 2026 (Accepted) · COLM 2026 (Submitted)",
    statusType: "published",
    paperLink: "https://github.com/gurenolun/FLY-Eval-",
    highlights: [
      "Proposed trajectory–attitude joint prediction task to evaluate LLMs on dynamic flight modeling and temporal reasoning",
      "Processed 708 real flight records; built end-to-end evaluation pipeline covering preprocessing, task definition, and result analysis",
      "Systematically evaluated 41 open- and closed-source models; introduced unified FLY-Score combining accuracy, format compliance, and safety",
    ],
  },
  {
    id: "fly-eval",
    title: "Safety-Constrained Temporal Flight Modeling with Foundation Models",
    titleShort: "FLY-EVAL++",
    category: "evaluation",
    status: "In Progress · Target: Nature Machine Intelligence",
    statusType: "ongoing",
    highlights: [
      "Built trustworthy evaluation protocol explicitly separating physically feasible predictions from linguistically plausible but safety-risky outputs",
      "Reconstructed high-fidelity FTAP temporal dataset integrating multiple public aviation data sources",
      "Explored safety-constrained training objectives for flight-domain foundation models",
    ],
  },
  {
    id: "lhmg",
    title: "Long-Horizon Memory Governance for LLM Agents",
    titleShort: "LHMG",
    category: "governance",
    status: "COLM 2026 (Submitted)",
    statusType: "submitted",
    highlights: [
      "Proposed LHMG framework modeling LLM agent memory as a governable, auditable system state to solve long-horizon drift and behavioral inconsistency",
      "Designed conflict-aware Revision Graph with No-Silent-Overwrite principle for traceable versioned memory updates",
      "Proposed Risk-Gated Memory Conditioning and Consistency-Constrained Decoding; validated on long-horizon dialogue benchmarks",
    ],
  },
  {
    id: "u2-bench",
    title: "U2-BENCH: Benchmarking Large Vision-Language Models on Ultrasound Understanding",
    titleShort: "U2-BENCH",
    category: "evaluation",
    status: "ICLR 2026",
    statusType: "published",
    highlights: [
      "Co-developed U2-BENCH, a comprehensive benchmark for ultrasound image understanding across 8 tasks and 15 anatomical regions",
      "Curated and structured 7,241 ultrasound images with diagnostic text, supporting classification, detection, regression, and text generation",
      "Deployed and evaluated 20 general and medical VLMs; responsible for performance analysis and visualization",
    ],
  },
  {
    id: "dolphin",
    title: "DOLPHIN: A Multimodal Large Language Model for Ultrasound Understanding",
    titleShort: "DOLPHIN",
    category: "governance",
    status: "ACL Rolling Review (Submitted)",
    statusType: "submitted",
    highlights: [
      "Built training and evaluation pipeline for ultrasound VLM including data formatting, inference scheduling, and experiment reproduction",
      "Participated in ablation studies on model reasoning and generalization; analyzed typical failure modes",
    ],
  },
  {
    id: "brain-bench",
    title: "Large-Scale Multimodal Benchmark for Brain Disease Foundation Models",
    titleShort: "Brain Disease Benchmark",
    category: "evaluation",
    status: "In Progress · Target: Nature Medicine",
    statusType: "ongoing",
    highlights: [
      "Integrated 27 public brain disease datasets with unified task definitions, data splits, and modality-specific preprocessing",
      "Designed robustness and cross-modal generalization evaluation protocol; ongoing baseline training and error analysis",
    ],
  },
  {
    id: "h2htalk",
    title: "H2HTalk: Evaluating Large Language Models as Emotional Companion",
    titleShort: "H2HTalk",
    category: "evaluation",
    status: "NLPCC 2025 Oral",
    statusType: "published",
    highlights: [
      "Built evaluation framework for emotional support and persona consistency in multi-turn dialogue covering 4,650 scenarios",
      "Analyzed typical failure modes including over-consolation, role inconsistency, and feedback instability",
    ],
  },
];

export const experiences = [
  {
    company: "Huazhu Group",
    companyCN: "华住集团",
    icon: "🏨",
    role: "Research Intern – Intelligent Food Supply Chain",
    period: "Oct 2025 – Jan 2026",
    highlights: [
      "Led end-to-end design and deployment of a multi-agent decision system for procurement, replenishment, and menu planning",
      "Designed agents for bulk purchasing, restocking decisions, and menu optimization, building an end-to-end decision loop from data ingestion to strategy recommendation",
      "Integrated demand forecasting, price signal analysis, and supplier strategy recommendation to improve decision executability",
      "Abstracted the methodology into a systematic framework; submitted to SIGMOD 2026",
    ],
  },
  {
    company: "Dolphin AI Medical Technology",
    companyCN: "海豚之声医疗科技",
    icon: "🩺",
    role: "Research Intern – Vision-Language Model Evaluation",
    period: "Apr 2025 – Sep 2025",
    highlights: [
      "Led deployment, inference, and evaluation of VLMs in medical ultrasound scenarios for large-scale benchmark experiments",
      "Designed and implemented U2-BENCH and DOLPHIN projects submitted to ICLR 2026 and ICML 2026",
      "Designed prompt strategies, structured data pipelines, and model output analysis supporting paper writing",
    ],
  },
  {
    company: "Beijing Flying Bear Technology",
    companyCN: "北京飞熊科技",
    icon: "🚁",
    role: "Intern – UAV R&D Department",
    period: "Jul 2024 – Sep 2024",
    highlights: [
      "Participated in security testing and fault diagnosis for UAV communication links; assisted in defect localization and functional verification",
    ],
  },
];

export const publications = [
  {
    title: "FLY-BENCH: Evaluating Large Language Models for Safety-Constrained Flight Modeling in Embodied Contexts",
    authors: "Yalun Wu et al.",
    venue: "IJCNN 2026",
    year: "2026",
    type: "Conference",
    status: "Accepted",
    link: "https://github.com/WuYalun/FLY-Eval-",
  },
  {
    title: "U2-BENCH: Benchmarking Large Vision-Language Models on Ultrasound Understanding",
    authors: "... Yalun Wu et al.",
    venue: "ICLR 2026",
    year: "2026",
    type: "Conference",
    status: "Published",
  },
  {
    title: "H2HTalk: Evaluating Large Language Models as Emotional Companion",
    authors: "... Yalun Wu et al.",
    venue: "NLPCC 2025",
    year: "2025",
    type: "Conference (Oral)",
    status: "Published",
  },
  {
    title: "Long-Horizon Memory Governance for LLM Agents",
    authors: "... Yalun Wu et al.",
    venue: "COLM 2026",
    year: "2026",
    type: "Conference",
    status: "Under Review",
  },
  {
    title: "DOLPHIN: A Multimodal Large Language Model for Ultrasound Understanding",
    authors: "... Yalun Wu et al.",
    venue: "ACL Rolling Review",
    year: "2026",
    type: "Journal Track",
    status: "Under Review",
  },
  {
    title: "Safety-Constrained Temporal Flight Modeling with Foundation Models",
    authors: "Yalun Wu* et al.",
    venue: "Nature Machine Intelligence",
    year: "2026",
    type: "Journal",
    status: "In Preparation",
  },
];
