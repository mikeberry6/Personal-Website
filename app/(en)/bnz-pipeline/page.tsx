import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BNZ Water Tech Pipeline',
  description:
    'A curated pipeline of Series B to Pre-IPO water technology companies aligned with General Atlantic BeyondNetZero.'
};

type Company = {
  name: string;
  meta: string;
  description: string;
};

type Section = {
  number: string;
  title: string;
  intro: string;
  companies: Company[];
};

const sections: Section[] = [
  {
    number: '1',
    title: 'Enterprise Utility SaaS, AI, & Digital Twins (The "Software Economics" Play)',
    intro:
      'Aging infrastructure loses trillions of gallons of treated water globally—representing massive amounts of wasted energy. These companies apply AI, edge computing, and IoT to recover revenue and prevent infrastructure failure, exhibiting classic SaaS/DaaS margins that GA historically dominates.',
    companies: [
      {
        name: 'Olea Edge Analytics',
        meta: 'Series C, $50M+ Raised, backed by Insight Partners',
        description:
          'AI and edge computing for municipal water metering. Identifies underperforming high-volume commercial meters, recovering millions in lost revenue for cities. Fast B2G sales cycles due to immediate, guaranteed ROI.'
      },
      {
        name: 'Klir',
        meta: 'Series B, $17.5M Raised in early 2026, backed by Insight Partners',
        description:
          'The "operating system" for water utilities. A GovTech SaaS platform centralizing regulatory compliance, lab testing, and daily operations. Incredibly sticky public-sector contracts.'
      },
      {
        name: 'Ketos',
        meta: 'Series C, $45M+ Raised',
        description:
          'A fully vertically integrated IoT and robotics platform for real-time water quality monitoring. Operates on a $0 CapEx, Hardware-as-a-Service (HaaS) model, securing highly recurring data revenue from industrial and municipal clients.'
      },
      {
        name: 'WINT (Water Intelligence)',
        meta: 'Series C, $50M+ Raised, backed by Insight Partners',
        description:
          'AI/IoT leak prevention for commercial real estate and data centers. Direct PropTech synergy with immediate ROI on insurance premiums and corporate Scope 3 ESG reporting.'
      },
      {
        name: '120Water',
        meta: 'Growth Stage, $43M+ Raised',
        description:
          'B2G compliance SaaS dominating the regulatory testing market for Lead, Copper, and PFAS across state agencies. A pure federal regulatory tailwind play.'
      },
      {
        name: 'FIDO Tech',
        meta: 'Series B, $15M+ Raised, backed by CRH Ventures',
        description:
          'Deep-learning acoustic and volumetric AI software that detects the precise size and location of underground water leaks. Highly scalable and hardware-agnostic.'
      },
      {
        name: 'Kando',
        meta: 'Series C, $34M+ Raised',
        description:
          'GenAI and IoT-driven wastewater intelligence mapping underground sewer networks to trace industrial pollution to the source, preventing biological shock at municipal treatment plants.'
      },
      {
        name: 'SewerAI',
        meta: 'Series B, $15M+ Raised',
        description:
          'Computer-vision SaaS that automatically detects infrastructure defects from existing pipe inspection footage, solving critical labor shortages for municipal contractors.'
      },
      {
        name: 'Transcend Software',
        meta: 'Series B, $30M+ Raised',
        description:
          'B2B SaaS offering generative design for critical water infrastructure. Automates conceptual engineering, reducing design hours by 90% for global EPCs (Engineering, Procurement, Construction firms).'
      },
      {
        name: 'ASTERRA',
        meta: 'Growth Stage',
        description:
          'Leverages L-band synthetic aperture radar (SAR) satellite data to detect underground soil moisture anomalies, identifying massive municipal water pipe leaks from space without laying a single physical sensor.'
      },
      {
        name: 'Waterplan',
        meta: 'Series A/Growth, $21M+ Raised',
        description:
          'The "climate risk dashboard" for Fortune 500s. Cross-references corporate operational data with satellite imagery to dynamically report water risk.'
      },
      {
        name: 'Ayyeka',
        meta: 'Series B/Growth, $15M+ Raised',
        description:
          'Plug-and-play Industrial IoT edge devices that seamlessly connect legacy water infrastructure sensors to cloud/SCADA systems.'
      },
      {
        name: 'APANA',
        meta: 'Growth Stage',
        description:
          "Industrial/commercial IoT water management platform that acts as a central nervous system for a building's water use, heavily adopted by big-box retailers (e.g., Costco)."
      },
      {
        name: 'Aquasight',
        meta: 'Growth Stage',
        description:
          'AI-driven lifecycle SaaS platform for utilities, optimizing pump performance and reducing the massive energy draw of wastewater plants.'
      }
    ]
  },
  {
    number: '2',
    title: 'Heavy Industrial Treatment, ZLD, & Decarbonization',
    intro:
      'The semiconductor, AI data center, and manufacturing supply chains are wildly water-intensive. These companies provide breakthrough filtration that drastically cuts the energy needed to treat and reuse water (Zero Liquid Discharge / ZLD).',
    companies: [
      {
        name: 'Gradiant',
        meta: 'Pre-IPO Unicorn, $400M+ Raised | $1B+ Val',
        description:
          'Immediate Mega-Check Target. The absolute undisputed global leader in end-to-end advanced industrial water, ZLD, and PFAS removal.'
      },
      {
        name: 'Saltworks Technologies',
        meta: 'Late-Stage Private',
        description:
          'Elite engineering firm dominating the hardest-to-treat industrial wastewaters, ZLD, and Direct Lithium Extraction (DLE) refining. Offers both equipment sales and highly lucrative O&M contracts.'
      },
      {
        name: 'Moleaer',
        meta: 'Series C, $67M+ Raised, backed by Apollo Global Management',
        description:
          'Global leader in industrial-scale nanobubble technology. Increases wastewater plant capacity by 25% while lowering energy consumption by 40%. Deployments across 1,500+ global facilities.'
      },
      {
        name: 'Membrion',
        meta: 'Series B1, $32M+ Raised, backed by Ecolab',
        description:
          'Manufactures ceramic desalination membranes from silica that can handle highly acidic, toxic industrial wastewater that would melt standard polymer filters.'
      },
      {
        name: 'ZwitterCo',
        meta: 'Series B/C, $102M+ Raised, backed by DCVC',
        description:
          'Zwitterionic (virtually immune to organic fouling) membranes for extreme agricultural and industrial superfiltration. Unbelievable consumable "razor-and-blade" economics.'
      },
      {
        name: 'Cambrian Innovation',
        meta: 'Growth Equity, $230M+ Raised',
        description:
          'Bio-electro-chemical wastewater systems that clean industrial water while generating renewable biogas. Sells via an infrastructure-as-a-service Water-Energy Purchase Agreement (WEPA).'
      },
      {
        name: 'Aquafortus',
        meta: 'Series A/B, $17M+ Raised, backed by DCVC',
        description:
          'Patented non-thermal, solvent-based ZLD technology. Traditional ZLD requires boiling water; Aquafortus uses chemistry to separate water from high-salinity brines using 90% less energy.'
      },
      {
        name: 'Axine Water Technologies',
        meta: 'Growth Stage',
        description:
          'Electrochemical oxidation technology that destroys toxic organic pollutants on-site. Delivered entirely as a Water-as-a-Service (WaaS) model.'
      },
      {
        name: 'Aqua Membranes',
        meta: 'Series B',
        description:
          'Uses proprietary 3D-printed spacers inside Reverse Osmosis (RO) elements, dramatically increasing flow and reducing the massive energy footprint of RO by up to 20%.'
      },
      {
        name: 'ElectraMet',
        meta: 'Series A/B Growth',
        description:
          'Targeted heavy-metal removal using localized electrochemical cells. Instead of creating toxic sludge, they extract pure metals (copper, nickel, silver) directly from wastewater streams for resale.'
      },
      {
        name: 'Heartland Water Technology',
        meta: 'Growth Stage, $45M+ Raised',
        description:
          'Modular decentralized wastewater systems focused on landfill leachate and heavy industrial ZLD.'
      },
      {
        name: 'Infinite Cooling',
        meta: 'Series A/B, MIT Spinout',
        description:
          'Uses electric fields to recapture and recycle water escaping from industrial cooling tower plumes, solving the massive freshwater consumption crisis facing AI data centers.'
      }
    ]
  },
  {
    number: '3',
    title: 'The PFAS "Forever Chemical" Destruction Super-Cycle',
    intro:
      "Global EPA regulations mandate the removal of PFAS. The high-value growth equity play is in companies that don't just capture the chemicals (which creates toxic landfill waste) but completely destroy them at scale.",
    companies: [
      {
        name: 'Allonnia',
        meta: 'Series B/Growth, $100M+ Raised',
        description:
          'Synthetic biology spinout from Ginkgo Bioworks engineering proteins to separate and destroy PFAS. (Note: GA is already on the cap table; prime opportunity to lead the next scale-up round).'
      },
      {
        name: 'Revive Environmental',
        meta: 'Growth Stage, Battelle Spinoff',
        description:
          'Operates the "PFAS Annihilator" using Supercritical Water Oxidation (SCWO). Has live, full-scale commercial units actively winning massive state infrastructure contracts.'
      },
      {
        name: 'EPOC Enviro',
        meta: 'Growth Stage',
        description:
          'Surface Active Foam Fractionation (SAFF®) technology. Uses the natural power of rising air bubbles to separate and concentrate PFAS without chemical additives. Winning massive US DoD remediation contracts.'
      },
      {
        name: 'Claros Technologies',
        meta: 'Series B, $57M+ Raised',
        description:
          'Advanced materials science firm with scalable, high-throughput UV-photochemical processes achieving 99.99% destruction of PFAS.'
      },
      {
        name: 'Aquagga',
        meta: 'Series A/B Fast-Track',
        description:
          'Hydrothermal Alkaline Treatment (HALT) to destroy PFAS in industrial wastewater. Heavily de-risked by millions in EPA/DoD non-dilutive funding and deploying commercial units for Fortune 500 chemical producers.'
      },
      {
        name: 'Aclarity',
        meta: 'Series A/B, $16M+ Raised',
        description:
          'Modular electrochemical oxidation reactors that run continuous, low-energy electrical currents through water to destroy PFAS. Plugs directly into landfill microgrids.'
      },
      {
        name: 'Cyclopure',
        meta: 'Growth Stage',
        description:
          'Uses a corn-based cyclodextrin adsorbent (DEXSORB) that traps PFAS with incredibly high affinity, offering a "destruction-as-a-service" lifecycle model for utilities.'
      },
      {
        name: 'Puraffinity',
        meta: 'Series B, $25M+ Raised',
        description:
          'Precision-engineered adsorbent materials tailored to capture PFAS much faster and more efficiently than legacy granular activated carbon (GAC).'
      },
      {
        name: 'Enspired Solutions',
        meta: 'Early Growth',
        description:
          'PFAS destruction using reductive defluorination (UV light and proprietary reagents), operating at low energy and room temperature.'
      }
    ]
  },
  {
    number: '4',
    title: 'The Water-Energy Nexus & Critical Minerals (DLE)',
    intro:
      'The energy transition relies on lithium, but traditional lithium mining is essentially a massive, ecologically destructive water-evaporation business. Direct Lithium Extraction (DLE) and next-gen desalination are the ultimate water-energy crossovers.',
    companies: [
      {
        name: 'Lilac Solutions',
        meta: 'Series C, $318M Raised, backed by Breakthrough Energy',
        description:
          'Proprietary ion-exchange technology for DLE. Eliminates the need for massive evaporation ponds, making it a critical water-tech enabler of the EV battery supply chain.'
      },
      {
        name: 'Energy Exploration Technologies (EnergyX)',
        meta: 'Series C, $135M+ Raised, backed by GM',
        description:
          'Advanced DLE and membrane technologies that increase lithium recovery rates by 300% while drastically reducing water usage.'
      },
      {
        name: 'Mangrove Lithium',
        meta: 'Series B, $46M+ Raised',
        description:
          'Modular electrochemical refining technology converting lithium brine directly into battery-grade lithium without the massive water footprint.'
      },
      {
        name: 'Summit Nanotech',
        meta: 'Series B, $95M+ Raised',
        description:
          'Advanced nanomaterial DLE technology focused on rapid scaling in South American salt flats.'
      },
      {
        name: 'Oneka Technologies',
        meta: 'Series A/B, $12M+ Raised',
        description:
          'Buoy-based desalination systems powered entirely by the kinetic energy of ocean waves. Zero electricity required, zero land required.'
      },
      {
        name: 'Waterise',
        meta: 'Growth Stage',
        description:
          'Subsea desalination. Places RO modules deep on the ocean floor to use natural hydrostatic pressure to push water through membranes, slashing energy use by 40-50%.'
      },
      {
        name: 'REDstack',
        meta: 'Growth Stage',
        description:
          'Commercializing Reverse Electrodialysis ("Blue Energy"). Generates electricity from the mixing of fresh and saltwater.'
      }
    ]
  },
  {
    number: '5',
    title: 'PropTech, Decentralized Reuse & The Built Environment',
    intro:
      "Treating water on-site slashes the immense carbon footprint of municipal pumping. This category intersects perfectly with GA's real estate thesis.",
    companies: [
      {
        name: 'Epic Cleantec',
        meta: 'Series B, $24M Raised',
        description:
          "Decentralized onsite water reuse for commercial real estate and high-rises. Converts a building's wastewater into reusable graywater and recovered heat."
      },
      {
        name: 'Bevi',
        meta: 'Series D, $70M Raised via Cowen Sustainable Investments',
        description:
          'Smart water coolers providing filtered, flavored, and sparkling water on demand. A late-stage consumer/PropTech crossover eliminating single-use plastics from corporate real estate.'
      },
      {
        name: 'Sharc Energy',
        meta: 'Growth Stage, Take-Private Candidate',
        description:
          'Wastewater heat recovery systems. Captures the thermal energy from water going down the drain to heat buildings, directly slashing Scope 1 natural gas consumption.'
      },
      {
        name: 'Aquacycl',
        meta: 'Series A/B',
        description:
          'Bio-Electrochemical Treatment Technology (BETT) for high-strength F&B industrial wastewater on-site. Mitigates 90% of GHGs and generates direct DC power.'
      },
      {
        name: 'Hydraloop',
        meta: 'Series B/Growth',
        description:
          'A consumer and commercial hardware appliance that recycles greywater directly inside the home/building. The "Tesla Powerwall" for water.'
      },
      {
        name: 'SOURCE Global',
        meta: 'Late Stage, $360M+ Raised',
        description:
          'Off-grid ambient air hydropanels that create drinking water using solar power. Backed by BlackRock.'
      }
    ]
  },
  {
    number: '6',
    title: 'AgTech, Earth Observation, & Precision Irrigation',
    intro:
      "Agriculture uses ~70% of the world's freshwater. Saving water here yields the highest absolute global impact on climate resilience and resource conservation.",
    companies: [
      {
        name: 'N-Drip',
        meta: 'Series C, $80M+ Raised at $200M Val',
        description:
          'The first and only gravity-powered micro-irrigation system. Delivers the water-saving benefits of drip irrigation without requiring energy-intensive water pumps.'
      },
      {
        name: 'Hydrosat',
        meta: 'Series B, $60M Raised in 2026',
        description:
          'Space data/SaaS leveraging thermal infrared satellite technology for precision irrigation analytics.'
      },
      {
        name: 'CropX',
        meta: 'Series C+ / Growth',
        description:
          'Hardware-enabled agronomic SaaS. Connects IoT soil sensors to a cloud platform. A highly acquisitive roll-up play in the ag-water space.'
      },
      {
        name: 'Arable',
        meta: 'Series C, $40M Raised',
        description:
          'An integrated crop intelligence platform combining weather, soil, and plant water-stress data to sell deeply sticky recurring subscriptions to global farming conglomerates.'
      },
      {
        name: 'Kilimo',
        meta: 'Series A/B Growth',
        description:
          'A SaaS marketplace generating water offsets. Corporate clients (e.g., tech giants wanting to be "water positive") purchase offsets generated by farmers who optimize their irrigation via Kilimo\'s platform.'
      },
      {
        name: 'Lumo',
        meta: 'Series A/Growth',
        description:
          '"Hardware-enabled SaaS" that automates irrigation execution via smart, cloud-connected irrigation valves, giving growers exact accountability of water usage while reducing the energy footprint of pumping.'
      },
      {
        name: 'SupPlant',
        meta: 'Series C, $30M+ Raised',
        description:
          'AI-enabled precision agriculture using agronomic algorithms and direct plant-sensors to guarantee crop yields while drastically reducing water consumption.'
      }
    ]
  }
];

export default function BnzPipelinePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <header className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          BeyondNetZero: Water Tech Pipeline
        </h1>
        <p className="text-base leading-relaxed text-muted">
          To deliver a significantly expanded, comprehensive target universe
          without diluting the rigorous quality threshold required by{' '}
          <strong className="text-foreground">
            General Atlantic&apos;s BeyondNetZero (BNZ)
          </strong>
          , we must look at the convergence of water technology with GA&apos;s
          traditional investment strongholds:{' '}
          <strong className="text-foreground">
            Enterprise SaaS, PropTech, FinTech, and Industrial Decarbonization.
          </strong>
        </p>
        <p className="text-base leading-relaxed text-muted">
          Growth equity demands proven product-market fit, capital-efficient
          unit economics (e.g., SaaS, Data-as-a-Service, Consumables,
          Hardware-as-a-Service), deep technological moats, and multi-billion-dollar
          Total Addressable Markets (TAMs).
        </p>
        <p className="text-base leading-relaxed text-muted">
          Below is an impeccably curated, wide-net pipeline of{' '}
          <strong className="text-foreground">
            over 50 high-caliber, Series B to Pre-IPO companies
          </strong>{' '}
          perfectly aligned with BNZ&apos;s mandate to deploy $50M–$300M+ checks
          into climate tech and resource efficiency.
        </p>
      </header>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.number}>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
              {section.number}. {section.title}
            </h2>
            <p className="mb-6 italic text-muted">{section.intro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {section.companies.map((company) => (
                <article
                  key={company.name}
                  className="card-shadow rounded-lg border border-border bg-[var(--color-card-bg)] p-5"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-primary)]">
                    {company.meta}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {company.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
