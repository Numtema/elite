
/**
 * ELITE TRAINING - DESIGN SYSTEM
 * Centralisation des couleurs, polices et espacements.
 */
export const THEME = {
  colors: {
    primary: "#EF4444", // Rouge Elite
    primaryHover: "#DC2626",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    textMain: "#0F172A",
    textMuted: "#64748B",
    textFaded: "#94A3B8",
    white: "#FFFFFF",
    
    support: {
      direct: { bg: "#FEF2F2", text: "#EF4444", stroke: "rgba(239, 68, 68, 0.1)" },
      whatsapp: { bg: "#F0FDF4", text: "#15803D", stroke: "rgba(22, 163, 74, 0.1)" },
      mail: { bg: "#F8FAFC", text: "#475569", stroke: "rgba(71, 85, 105, 0.1)" },
    }
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: {
      tight: "-0.02em",
      normal: "0em",
      wide: "0.1em",
      logo: "0.2em"
    }
  },

  spacing: {
    borderRadius: {
      small: "0.75rem",
      medium: "1rem",
      large: "1.5rem",
      full: "9999px"
    }
  },

  content: {
    login: {
      title: "Accédez à l'Excellence",
      subtitle: "Connectez-vous pour continuer votre formation.",
      signupPrompt: "Nouveau ici ?",
      signupLink: "Créer un compte expert",
      emailLabel: "Adresse e-mail professionnelle",
      emailPlaceholder: "nom@entreprise.com",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Votre clé d'accès",
      rememberMe: "Mémoriser ma session",
      rememberMeSub: "Accès rapide la prochaine fois",
      forgotPassword: "Accès perdu ?",
      submitBtn: "Se connecter à la plateforme"
    },
    support: {
      headerTitle: "Centre d'Assistance",
      headerSub: "Expertise à votre service",
      mainQuestion: "Comment pouvons-nous optimiser votre expérience ?",
      availability: "Nos conseillers sont disponibles de 9h à 18h (CET).",
      helpLabel: "Besoin d'aide ?"
    }
  }
};
