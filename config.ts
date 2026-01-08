
export const CONFIG = {
  // --- Infos Contact ---
  contact: {
    whatsapp: "33600000000",
    phone: "+33 6 00 00 00 00",
    email: "contact@elite-training.fr",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },

  // --- Design & Thème ---
  theme: {
    modes: {
      dark: {
        bg: "#0B0B0F",
        surface: "#12121A",
        surface2: "#07070D",
        border: "rgba(255, 255, 255, 0.05)",
        text: "#F5F5F7",
        muted: "#B7B7C2",
        gridOpacity: 0.1,
      },
      light: {
        bg: "#FFFFFF",
        surface: "#F8FAFC",
        surface2: "#0F172A",
        border: "rgba(15, 23, 42, 0.1)",
        text: "#0F172A",
        muted: "#475569",
        gridOpacity: 0.08,
      }
    },
    colors: {
      primary: "#EF4444", // Tailwind Red-500
      hover: "#DC2626",   // Tailwind Red-600
      glow: "rgba(239, 68, 68, 0.2)"
    },
    spacing: {
      sectionPadding: "py-24 md:py-40",
      containerMax: "1120px",
    },
    animations: {
      duration: 0.6,
      stagger: 0.1,
    }
  },

  // --- Presets based on analysis ---
  presets: {
    people: {
      id: "people",
      brandName: "Prompting Essentials",
      provider: "Google Experts",
      badge: "Individuels • 100k+ Inscrits",
      heroTitle: "DÉBLOQUEZ VOTRE",
      rotatingWords: ["PRODUCTIVITÉ", "CRÉATIVITÉ", "PRÉCISION", "FUTUR"],
      description: "Apprenez à rédiger des prompts clairs et spécifiques pour décupler votre efficacité quotidienne avec l'IA.",
      ctaPrimary: "COMMENCER MAINTENANT",
      ctaSecondary: "VOIR LE PROGRAMME",
      learn: [
        "Méthode en 5 étapes pour des prompts parfaits",
        "Automatisation des emails et rapports",
        "Analyse de données complexes en secondes",
        "Création d'agents IA personnalisés"
      ],
      skills: ["Prompt Patterns", "LLM Apps", "Problem Solving", "Email Automation"],
      marquee: ["ChatGPT", "Claude", "Gemini", "Midjourney", "Llama 3", "DeepSeek", "Mistral", "Copilot"]
    },
    business: {
      id: "business",
      brandName: "AI Business Deployment",
      provider: "Elite Corporate",
      badge: "Entreprises • ROI Garanti",
      heroTitle: "STANDARDISEZ VOTRE",
      rotatingWords: ["ROI", "PERFORMANCE", "QUALITÉ", "SÉCURITÉ"],
      description: "Réduisez les allers-retours et boostez la qualité des livrables de vos équipes grâce à une gouvernance IA solide.",
      ctaPrimary: "DEMANDER UNE DÉMO",
      ctaSecondary: "OFFRE ÉQUIPE",
      learn: [
        "Playbook de prompts par métier (Sales, Support, Ops)",
        "Audit de sécurité et confidentialité des données",
        "Mesure concrète du gain de temps par collaborateur",
        "Process QA pour les outputs générés par IA"
      ],
      skills: ["Gouvernance IA", "Change Management", "QA Ops", "Business Strategy"],
      marquee: ["Productivité", "Confidentialité", "Scalabilité", "ROI", "Gouvernance", "Performance"]
    },
    university: {
      id: "university",
      brandName: "Academic AI Integration",
      provider: "Excellence Campus",
      badge: "Universités • Crédits ECTS",
      heroTitle: "ENSEIGNEZ AVEC",
      rotatingWords: ["RIGUEUR", "ÉTHIQUE", "CLARTÉ", "INNOVATION"],
      description: "Intégrez l'IA générative dans vos cursus sans sacrifier l'intégrité académique ni la pensée critique.",
      ctaPrimary: "DEVENIR PARTENAIRE",
      ctaSecondary: "PLAN DE COURS",
      learn: [
        "Cadre d'usage responsable pour les étudiants",
        "Grilles de notation (Rubrics) adaptées à l'IA",
        "Ateliers de pensée critique et fact-checking",
        "Procédures d'accessibilité numérique"
      ],
      skills: ["Intégrité Académique", "Pédagogie", "Pensée Critique", "Ethics"],
      marquee: ["Recherche", "Enseignement", "Éthique", "Rigueur", "Innovation", "Campus"]
    },
    government: {
      id: "government",
      brandName: "Public Sector AI Mastery",
      provider: "Souveraineté Digitale",
      badge: "Gouvernements • Souveraineté",
      heroTitle: "GOUVERNEZ AVEC",
      rotatingWords: ["SÉCURITÉ", "TRANS-PARENCE", "AUDACE", "MAÎTRISE"],
      description: "Formez vos agents, standardisez les procédures administratives et maîtrisez les risques liés à la donnée publique.",
      ctaPrimary: "LANCER UN PILOTE",
      ctaSecondary: "CADRE D'USAGE",
      learn: [
        "Rédaction administrative assistée par IA",
        "Sécurité et classification des données publiques",
        "Transparence algorithmique pour les usagers",
        "Gestion des biais dans les services publics"
      ],
      skills: ["Droit Public", "RGPD", "Souveraineté", "Audit Algorithmique"],
      marquee: ["Souveraineté", "Service Public", "Sécurité", "Conformité", "Audit", "Citoyenneté"]
    }
  },

  // --- Common Elements ---
  support: {
    headerTitle: "Support Formation",
    headerSub: "Expert à votre écoute",
    mainQuestion: "Comment pouvons-nous vous aider ?",
    availability: "Réponse en moins de 5 min • 7j/7"
  },

  syllabus: [
    { module: "Module 1", title: "Fondamentaux & Cadre", desc: "Méthodes essentielles et limites de l'IA.", duration: "2h" },
    { module: "Module 2", title: "Pratique & Production", desc: "Cas réels et exercices guidés par métier.", duration: "3h" },
    { module: "Module 3", title: "Optimisation & Risques", desc: "Biais, erreurs et itération avancée.", duration: "2h" },
    { module: "Module 4", title: "Restitution & Feedback", desc: "Critique constructive et agents experts.", duration: "3h" }
  ],

  faq: [
    { q: "Faut-il des connaissances techniques ?", a: "Non, cette formation est accessible à tous les niveaux, du débutant à l'expert." },
    { q: "Obtient-on un certificat ?", a: "Oui, un certificat d'excellence partageable sur LinkedIn est délivré à la fin." },
    { q: "Quelles IA sont utilisées ?", a: "Le programme couvre ChatGPT, Claude, Gemini et les modèles open-source." }
  ]
};
