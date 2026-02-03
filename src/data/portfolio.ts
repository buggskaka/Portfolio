export interface CaseStudy {
  challenge: string;
  architecture: string;
  operations: string;
  outcome: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  impact: string[];
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  caseStudy?: {
    context: string;
    strategy: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  systemDeepDive?: {
    title: string;
    content: string[];
  };
}

export const portfolioData = {
  hero: {
    name: "Onyedikachi Nwabugwu",
    title: "Product Management. System Architecture. Operationalization.",
    subtitle: "Product Management Beyond the Build.",
    description: "I don't just ship products; I operationalize value exchange systems. From $1B+ processed volumes to building resilient financial infrastructure, I design the 'No-Wallet Architectures', Liquidity Engines, and Risk Systems that make fintechs viable.",
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
      systemDeepDive: {
        title: "The FX Settlement Engine: Managing Liquidity without Friction",
        content: [
          "**The Challenge**: Institutional FX ties up capital. Trades don't settle instantly, creating counterparty risk.",
          "**Liquidity Logic**: I designed a 'waterfall' sourcing logic that checks Treasury Funds First -> Partner Credit Lines -> External Liquidity Providers. This minimizes cost while guaranteeing fulfillment.",
          "**Risk & TMI**: Built a custom Transaction Monitoring Interface (TMI) integrated directly into the transaction lifecycle. It flags volatility risks in real-time, pausing settlement for high-risk flags automatically.",
          "**Automated Reconciliation**: Built a netting engine that calculates obligations and settles only the difference, reducing transaction fees by 40%."
        ]
      },
      achievements: [
        "Designed trade posting flows for institutional FX dealing.",
        "Implemented multilateral hedging logic to offset opposing trades internally.",
      ]
    },
    {
      company: "Klasha",
      role: "Head of Product",
      period: "May 2023 - Dec 2024",
      description: "Led cross-border payment solutions for African businesses.",
      systemDeepDive: {
        title: "Cross-Border Rails: 98% Success Rate in Fragmented Markets",
        content: [
          "**Context**: International payments into Africa often fail due to fragmented local switching.",
          "**The Fix**: I moved us from a single-provider reliance to a multi-rail operational strategy.",
          "**Operations**: Orchestrated a smart-routing system that selects the best payout partner based on real-time success rates per region.",
          "**Outcome**: Stabilized USD virtual card success rates at 98%, becoming the core revenue driver."
        ]
      },
      achievements: [
        "Built payment gateways enabling global businesses to accept payments across Africa.",
        "Launched multi-currency accounts (USD, GBP, EUR) for business settlement.",
      ]
    },
    {
      company: "Bujeti",
      role: "Senior Product Manager",
      period: "Aug 2022 - Apr 2023",
      description: "Centralized spend management and financial reporting.",
      achievements: [
        "Built corporate/virtual cards to capture spend at source.",
        "Integrated with QuickBooks for direct accounting flow."
      ]
    },
    {
      company: "Glover",
      role: "Head of Product",
      period: "Dec 2020 - July 2022",
      description: "Scaled a secondary gift card marketplace to $1M TPV.",
      achievements: [
        "Reduced settlement time from days to under 30 minutes.",
        "Designed transparent trade flows showing pricing, fees, and settlement."
      ]
    },
  ],
  projects: [
    {
      title: "The Krow App",
      role: "Founder & Builder",
      description: "A P2P Gift Card Marketplace focusing on trust and liquidity.",
      impact: ["Lovable-generated UI", "Focus on Trust & Liquidity"],
      tech: ["Marketplace Logic", "Escrow"],
      link: "https://thekrowapp.com/",
      github: "https://github.com/buggskaka/my-brain-finder",
      caseStudy: {
        context: "The secondary gift card market is rife with fraud and opaque pricing. Users never knew if they were getting a fair deal.",
        strategy: "I built Krow not just as a marketplace, but as a Trust Engine. I implemented a 'Fairness Algorithm' that benchmarks rates against global averages, ensuring users get value. The 'Escrow-First' design forces mutual commitment before assets are revealed, eliminating the 'hit-and-run' scams common on other platforms."
      }
    },
    {
      title: "Peeramp",
      role: "Founder & Builder",
      description: "Secure P2P Escrow Marketplace for crypto assets.",
      impact: ["No-Wallet Architecture", "Secure Settlement"],
      tech: ["Crypto", "Escrow"],
      caseStudy: {
        context: "Crypto P2P is notoriously risky. Traditional wallet architectures create 'honeypots' for hackers and regulatory liabilities for operators.",
        strategy: "I architected a 'No-Wallet' system. We don't hold user funds in stagnant custodial wallets. Instead, funds are locked on-chain in smart contracts and released only via off-chain operational triggers (signatures). This handles fraud and risk by ensuring assets are never in 'limbo'—they are either in the user's control or locked in the deal flow."
      },
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
    strategy: ["System Architecture", "Liquidity Management", "No-Wallet Architecture", "Risk Engines (TMI)"],
    operations: ["Automated Reconciliation", "Fraud Detection", "Vendor Routing"],
    tools: ["Looker", "Mixpanel", "Amplitude", "Jira", "Notion", "Figma"]
  }
};
