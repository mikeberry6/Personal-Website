type PlainBullet = {
  body: string;
};

type TitledBullet = {
  title: string;
  body: string;
};

type Subsection = {
  heading: "Business Description" | "BNZ Mandate Alignment Rationale";
  bullets: PlainBullet[] | TitledBullet[];
};

type Company = {
  name: string;
  subsections: Subsection[];
};

const intro =
  "Here are the requested profiles, formatted in succinct, growth equity business shorthand to highlight their exact alignment with the GA BNZ mandate.";

const companies: Company[] = [
  {
    name: "H2O Innovation",
    subsections: [
      {
        heading: "Business Description",
        bullets: [
          {
            body: "Tech-enabled provider of custom water/wastewater treatment systems, specialized O&M services, and proprietary chemical consumables.",
          },
          {
            body: 'Operates a highly recurring, "razor/razorblade" ecosystem servicing municipal and industrial clients primarily across North America.',
          },
        ],
      },
      {
        heading: "BNZ Mandate Alignment Rationale",
        bullets: [
          {
            title: "Capex-Light & Recurring Cash Flow",
            body: "Revenue mix heavily indexes toward high-margin, sticky OPEX streams (multi-year O&M contracts, membrane specialty chemicals), perfectly fitting the mandate's asset-light and recurring-manufacturing criteria.",
          },
          {
            title: "Check Size & Platform Scale",
            body: "Mature, middle-market PE platform (Ember Infrastructure) with sufficient scale and Enterprise Value (EV) to seamlessly absorb a $100M+ growth equity injection or secondary buyout check to fund ongoing consolidation.",
          },
          {
            title: "Zero FOAK Risk",
            body: "Established unit economics and proven profitability insulated by non-discretionary municipal/industrial regulatory compliance; zero unproven deep-tech or venture cash-burn risk.",
          },
        ],
      },
    ],
  },
  {
    name: "United Flow Technologies (UFT)",
    subsections: [
      {
        heading: "Business Description",
        bullets: [
          {
            body: "Buy-and-build platform providing highly engineered fluid handling solutions, aftermarket parts, and localized M&R (maintenance & repair) services.",
          },
          {
            body: "Acts as a critical, asset-light distribution and service partner bridging specialized OEMs and end-user municipalities/industrials.",
          },
        ],
      },
      {
        heading: "BNZ Mandate Alignment Rationale",
        bullets: [
          {
            title: 'Asset-Light "Pick & Shovel" Model',
            body: "Operations are purely focused on value-added distribution, systems integration, and lifecycle services rather than heavy balance-sheet manufacturing, heavy asset ownership, or project financing.",
          },
          {
            title: "Sticky OPEX Profile",
            body: "Revenue is anchored by highly recurring, non-discretionary replacement parts and M&R services tied to the aging North American water infrastructure base.",
          },
          {
            title: "Scale & Capital Deployment",
            body: "Backed by Berkshire Partners, representing a mature platform with the existing footprint, profitability, and inorganic M&A pipeline to deploy $100M–$300M+ via a minority recap or growth funding.",
          },
        ],
      },
    ],
  },
  {
    name: "Gradiant",
    subsections: [
      {
        heading: "Business Description",
        bullets: [
          {
            body: "End-to-end industrial water technology platform specializing in complex wastewater treatment, resource recovery, and zero liquid discharge (ZLD).",
          },
          {
            body: "Leverages proprietary AI-driven software (SmartOps) and a Water-as-a-Service (WaaS) model to optimize plant performance and unit economics.",
          },
        ],
      },
      {
        heading: "BNZ Mandate Alignment Rationale",
        bullets: [
          {
            title: "Scale / Check Size Fit",
            body: "Current unicorn status (>$1B valuation following its $225M Series D) aligns perfectly with BNZ's target for large-cap, $100M+ minority crossover / late-stage growth checks prior to a liquidity event.",
          },
          {
            title: "Capex-Light WaaS Delivery",
            body: "Avoids heavy infrastructure ownership by employing an asset-light Water-as-a-Service model, securing long-term recurring revenue streams alongside high-margin software ARR.",
          },
          {
            title: "Proven Tech / No FOAK Risk",
            body: "Technology is fully commercialized and validated across top-tier global industrial clients (semiconductor, pharma, F&B), demonstrating highly visible profitability and maturity well beyond venture-stage commercialization risk.",
          },
        ],
      },
    ],
  },
  {
    name: "Vessco Water",
    subsections: [
      {
        heading: "Business Description",
        bullets: [
          {
            body: "Market-leading value-added distributor and systems integrator of water/wastewater treatment equipment across North America.",
          },
          {
            body: "Provides full-lifecycle support including engineering consultation, equipment procurement, and highly recurring aftermarket parts and field services.",
          },
        ],
      },
      {
        heading: "BNZ Mandate Alignment Rationale",
        bullets: [
          {
            title: "Capex-Light Value Chain Tollbooth",
            body: "Pure-play services and distribution model that captures municipal water spend without the CAPEX burden of heavy manufacturing or proprietary technology R&D.",
          },
          {
            title: "Scale & Consolidation Check",
            body: "Mature PE-backed platform (Gryphon Investors) with a proven M&A roll-up framework, easily capable of absorbing a $100M+ check to aggressively fund regional consolidation in a highly fragmented TAM.",
          },
          {
            title: "Profitable & De-risked",
            body: "Generates highly predictable, profitable cash flows driven by a massive installed base, sticky aftermarket parts demand, and strict municipal regulatory tailwinds.",
          },
        ],
      },
    ],
  },
  {
    name: "120Water",
    subsections: [
      {
        heading: "Business Description",
        bullets: [
          {
            body: "Pure-play cloud software (SaaS) and digital logistics platform automating environmental water compliance for utilities and state agencies.",
          },
          {
            body: "Core modules manage sampling, public communications, and regulatory data tracking driven by the EPA's LCRR (Lead & Copper Rule) and PFAS mandates.",
          },
        ],
      },
      {
        heading: "BNZ Mandate Alignment Rationale",
        bullets: [
          {
            title: "Pure Software DNA",
            body: "100% asset-light software model characterized by highly predictable, recurring SaaS ARR and strong gross margins, completely avoiding heavy infrastructure, hardware, or FOAK risk.",
          },
          {
            title: "Inflection Point for $100M+ Scale",
            body: "Having recently raised a $43M growth round, the platform is rapidly scaling past early-stage venture bounds and is primed for a $100M+ equity check to fund aggressive platform M&A or a majority growth recap.",
          },
          {
            title: "Regulatory Catalyst & Clear Profitability",
            body: "Rapid growth is entirely underwritten by urgent, non-discretionary federal EPA compliance deadlines generating guaranteed utility OPEX spend, providing a highly visible path to durable profitability.",
          },
        ],
      },
    ],
  },
];

function isTitledBullet(
  bullet: PlainBullet | TitledBullet
): bullet is TitledBullet {
  return "title" in bullet;
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-12 leading-relaxed text-foreground">{intro}</p>
      <div className="space-y-14">
        {companies.map((company) => (
          <section key={company.name}>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              {company.name}
            </h2>
            <div className="space-y-6">
              {company.subsections.map((subsection) => (
                <div key={subsection.heading}>
                  <h3 className="mb-3 text-lg font-semibold text-foreground">
                    {subsection.heading}
                  </h3>
                  <ul className="space-y-3">
                    {subsection.bullets.map((bullet, index) => (
                      <li
                        key={
                          isTitledBullet(bullet)
                            ? bullet.title
                            : `${subsection.heading}-${index}`
                        }
                        className="flex gap-3 leading-relaxed"
                      >
                        <span aria-hidden="true" className="text-muted">
                          •
                        </span>
                        {isTitledBullet(bullet) ? (
                          <p className="text-foreground">
                            <span className="font-semibold">
                              {bullet.title}:
                            </span>{" "}
                            <span className="text-muted">{bullet.body}</span>
                          </p>
                        ) : (
                          <p className="text-muted">{bullet.body}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
