import { images } from "@/lib/images";

export const projects = [
  {
    id: "bot-defender",
    title: "Bot Defender: Real-Time ML Traffic Classifier",
    thumbnail: images.botDefenderThumb,
    tech: [
      "Python",
      "FastAPI",
      "Scikit-Learn",
      "React",
      "PostgreSQL",
      "Supabase",
    ],
    description: [
      "Real-time anomaly detection pipeline",
      "Random Forest-based bot traffic classification",
      "Sub-50ms inference latency",
      "Interactive monitoring dashboard",
      "Real-time confidence visualization",
    ],
    liveUrl: "https://botdefenderproject.vercel.app/",
    githubUrl: "https://github.com/kavyapatel08",
  },
  {
    id: "insurance-premium",
    title: "Insurance Premium Prediction System",
    thumbnail: images.insurancePremiumThumb,
    tech: ["Python", "FastAPI", "Docker", "Streamlit", "XGBoost"],
    description: [
      "Compared multiple regression models",
      "Achieved strong prediction accuracy using Gradient Boosting",
      "Built end-to-end prediction API",
      "Dockerized deployment pipeline",
    ],
    liveUrl: "https://insurance-premium-prediction-system.onrender.com/",
    githubUrl: "https://github.com/kavyapatel08",
  },
] as const;
