export interface Project {
  title: string;
  role: string;
  description: string;
  impact: string[];
  tech: string[];
  link?: string;
  github?: string;
  image?: string; // Placeholder for now
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export const portfolioData = {
  hero: {
    name: "Onyedikachi Nwabugwu",
    title: "Product Management. System Architecture. Operationalization.",
    subtitle: "Product Management Beyond the Build.",
    description: "I don't just ship products; I operationalize value exchange systems. From $1B+ processed volumes to building resilient financial infrastructure across the Global South, I bridge the gap between abstract strategy and rigorous execution.",
    stats: [
      { label: "Processed Volume", value: "$1B+" },
      { label: "Success Rate", value: "98%" },
      { label: "User Retention", value: "67%" },
    ]
  },
  experience: [
    {
      company: "Sika Financial Group",
      role: "Head of Product Development",
      period: "Jan 2025 - Present",
      description: "Building FX settlement and netting systems for institutional clients.",
      achievements: [
        "Designed trade posting flows for institutional FX dealing.",
        "Implemented multilateral hedging logic to offset opposing trades internally.",
        "Built liquidity sourcing logic prioritizing treasury funds -> partner lines -> external providers.",
        "Developed transaction-level pricing engines based on risk and volatility."
      ]
    },
    {
      company: "Klasha",
      role: "Head of Product",
      period: "May 2023 - Dec 2024",
      description: "Led cross-border payment solutions for African businesses.",
      achievements: [
        "Built payment gateways enabling global businesses to accept payments across Africa.",
        "Launched multi-currency accounts (USD, GBP, EUR) for business settlement.",
        "Achieved 98% international payment success rate with USD virtual cards.",
        "Scaled consumer app to become core product infrastructure."
      ]
    },
    {
      company: "Bujeti",
      role: "Senior Product Manager",
      period: "Aug 2022 - Apr 2023",
      description: "Centralized spend management and financial reporting.",
      achievements: [
        "Built corporate/virtual cards to capture spend at source.",
        "Integrated with QuickBooks for direct accounting flow.",
        "Reduced manual reconciliation by enforcing structured financial data."
      ]
    },
    {
      company: "Glover",
      role: "Head of Product",
      period: "Dec 2020 - July 2022",
      description: "Scaled a secondary gift card marketplace to $1M TPV.",
      achievements: [
        "Reduced settlement time from days to under 30 minutes.",
        "Designed transparent trade flows showing pricing, fees, and settlement.",
        "Led expansion into Ghana and built merchant APIs."
      ]
    },
     {
      company: "Patricia",
      role: "Product Manager",
      period: "Sep 2018 - Nov 2020",
      description: "Early crypto trading and payment products.",
      achievements: [
        "Shipped OTC trading experience increasing revenue by 3x.",
        "Led development of Nigeria's first physical Bitcoin card.",
        "Processed over $1B in transaction volume by year three."
      ]
    }
  ],
  projects: [
    {
      title: "The Krow App",
      role: "Founder & Builder",
      description: "A P2P Gift Card Marketplace focusing on trust and liquidity.",
      impact: ["Lovable-generated UI", "Focus on Trust & Liquidity"],
      tech: ["Marketplace Logic", "Escrow"],
      link: "https://thekrowapp.com/",
      github: "https://github.com/buggskaka/my-brain-finder" 
    },
    {
      title: "Peeramp",
      role: "Founder & Builder",
      description: "Secure P2P Escrow Marketplace for crypto assets.",
      impact: ["Secure Settlement", "Escrow Mechanism"],
      tech: ["Crypto", "Escrow"],
      link: "https://www.getpeeramp.com/",
      github: "https://github.com/DeCompany-x/peeramp"
    },
    {
      title: "Zensta",
      role: "Founder & Builder",
      description: "Social Fashion Resale Platform connecting closets, culture, and commerce.",
      impact: ["Community-led growth", "Social Commerce"],
      tech: ["Social Graph", "Commerce"],
      link: "https://zenstaapp.com/"
    },
     {
      title: "FlexFlight",
      role: "Builder",
      description: "Flexible flight deal finder with customizable date ranges.",
      impact: ["Optimization logic", "Search Algorithm"],
      tech: ["Travel Tech", "Search"],
      link: "https://flexflight.zenstaapp.com/"
    }
  ],
  skills: {
    strategy: ["Product Strategy", "Market Fit Analysis", "Pricing Engines", "Regulatory Compliance"],
    operations: ["Liquidity Sourcing", "Settlement Logic", "Risk Management", "Process Structuring"],
    tools: ["Looker", "Mixpanel", "Amplitude", "Jira", "Notion", "Figma"]
  }
};
