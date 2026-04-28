type SectorRow = {
  sector: string;
  tagline: string;
  description: string[];
  subsectors: string[];
};

type Company = {
  name: string;
  bracket: string;
};

type SubsectorMap = {
  sector: string;
  subsectors: { name: string; companies: Company[] }[];
  sourcesNote?: string;
};

const detailedSectors: SectorRow[] = [
  {
    sector: "Utility Grid & Digital Water",
    tagline: "Network Intelligence",
    description: [
      "Encompasses the software, sensors, analytics, and workflow tools used to monitor, operate, and optimize municipal water distribution and wastewater collection networks",
      "Driven by aging infrastructure, non-revenue water, lead service line mandates, sewer overflow risk, and the need to prioritize capital spending across constrained utility budgets",
      "Characterized by asset-light software / data models, sticky utility workflows, and strong strategic relevance to water infrastructure operators, meter companies, engineering platforms, and equipment OEMs",
    ],
    subsectors: [
      "Leak Detection & Smart Metering",
      "Pipe / Sewer Inspection & Asset Analytics",
      "Utility Compliance & Digital Twins",
    ],
  },
  {
    sector: "Industrial Water Treatment & Reuse",
    tagline: "Process Water & Circularity",
    description: [
      "Focuses on advanced treatment, reuse, separation, and optimization technologies for industrial water and wastewater streams across sectors such as semiconductors, batteries, data centers, chemicals, food & beverage, mining, and energy",
      "Driven by rising water scarcity, stricter discharge limits, industrial reshoring, customer sustainability targets, and the need to reduce water, energy, chemical, and disposal costs",
      "Often supported by high-value industrial customers, recurring service models, differentiated membranes / materials, and opportunities to convert wastewater liabilities into reusable process water or recoverable resources",
    ],
    subsectors: [
      "Industrial Wastewater & Reuse",
      "Membranes, Separations & ZLD",
      "Brine / Resource Recovery",
    ],
  },
  {
    sector: "Contaminants, PFAS & Water Quality",
    tagline: "Detection & Remediation",
    description: [
      "Centers on the detection, removal, concentration, and destruction of PFAS, heavy metals, pathogens, microplastics, and other regulated or emerging contaminants across drinking water, wastewater, groundwater, and industrial discharge streams",
      "Driven by tightening federal and state regulation, long-tail environmental liability, increased monitoring requirements, and growing public scrutiny of water quality and contaminant exposure",
      "Characterized by a mix of proprietary materials, electrochemical / plasma / oxidation technologies, real-time monitoring platforms, and analytical tools that enable lower-cost compliance and permanent contaminant destruction",
    ],
    subsectors: [
      "PFAS Capture & Destruction",
      "Continuous Water Quality Monitoring",
      "Microbial / Chemical Testing",
    ],
  },
  {
    sector: "Behind-the-Meter Efficiency & Distributed Reuse",
    tagline: "Customer-Sited Water Infrastructure",
    description: [
      "Focuses on decentralized, on-site systems deployed directly at customer facilities, including commercial buildings, multifamily properties, campuses, hotels, hospitals, factories, construction sites, and data centers",
      "Driven by water damage risk, rising insurance costs, local reuse mandates, water-stressed real estate markets, corporate sustainability goals, and the need to reduce facility-level utility spend",
      "Leverages hardware-enabled software, smart fixtures, leak prevention, greywater recycling, and water-as-a-service models to deliver measurable efficiency, resilience, and cost reduction for commercial and industrial end-users",
    ],
    subsectors: [
      "Building Leak Prevention & Smart Fixtures",
      "Onsite Greywater / Water Reuse",
      "Distributed Water-as-a-Service",
    ],
  },
  {
    sector: "Agricultural Water & Irrigation",
    tagline: "Water Productivity",
    description: [
      "Encompasses irrigation controls, soil and plant sensors, field intelligence platforms, remote sensing, and water accounting tools that help farms, orchards, vineyards, and landscapes optimize water use",
      "Driven by drought, groundwater restrictions, water rights complexity, pumping energy costs, crop yield volatility, and pressure from food companies and growers to demonstrate measurable water stewardship",
      "Characterized by a combination of software, sensors, agronomic analytics, and irrigation hardware that improves water productivity while reducing fertilizer, energy, and labor intensity",
    ],
    subsectors: [
      "Precision Irrigation & Controls",
      "Soil / Plant / Remote Sensing",
      "Water Accounting & Stewardship",
    ],
  },
  {
    sector: "Climate Resilience & Alternative Supply",
    tagline: "Supply Security & Adaptation",
    description: [
      "Covers technologies that expand reliable water supply or help communities, utilities, insurers, and asset owners manage water-related climate risk, including drought, flooding, stormwater, and coastal water scarcity",
      "Driven by physical climate risk, growing demand for resilient infrastructure, increased flood losses, constrained freshwater availability, and the need for diversified water supply in water-stressed regions",
      "Includes both asset-light data and analytics platforms as well as more infrastructure-oriented technologies such as desalination, atmospheric water, stormwater control, and distributed emergency water supply",
    ],
    subsectors: [
      "Desalination & Alternative Supply",
      "Flood / Stormwater Intelligence",
      "Climate & Watershed Risk Analytics",
    ],
  },
];

const slideSectors: SectorRow[] = [
  {
    sector: "Utility Grid & Digital Water",
    tagline: "Network Intelligence",
    description: [
      "Provides the digital layer for municipal water and wastewater networks, enabling utilities to monitor assets, detect failures, prioritize capex, and manage compliance",
      "Fueled by aging infrastructure, leakage, lead service line mandates, sewer overflow risk, and constrained public-sector budgets",
    ],
    subsectors: [
      "Leak Detection & Smart Metering",
      "Pipe / Sewer Inspection & Asset Analytics",
      "Utility Compliance & Digital Twins",
    ],
  },
  {
    sector: "Industrial Water Treatment & Reuse",
    tagline: "Process Water & Circularity",
    description: [
      "Addresses high-value industrial water and wastewater streams through advanced treatment, reuse, membranes, separations, and resource recovery",
      "Driven by water scarcity, discharge limits, industrial reshoring, data center / semiconductor growth, and corporate sustainability targets",
    ],
    subsectors: [
      "Industrial Wastewater & Reuse",
      "Membranes, Separations & ZLD",
      "Brine / Resource Recovery",
    ],
  },
  {
    sector: "Contaminants, PFAS & Water Quality",
    tagline: "Detection & Remediation",
    description: [
      "Focuses on identifying, removing, and destroying PFAS and other emerging contaminants across drinking water, wastewater, groundwater, and industrial discharge",
      "Supported by tightening regulation, environmental liability, public health concerns, and the need for lower-cost, verifiable compliance",
    ],
    subsectors: [
      "PFAS Capture & Destruction",
      "Continuous Water Quality Monitoring",
      "Microbial / Chemical Testing",
    ],
  },
  {
    sector: "Behind-the-Meter Efficiency & Distributed Reuse",
    tagline: "Customer-Sited Infrastructure",
    description: [
      "Deploys water efficiency, leak prevention, and reuse systems directly at buildings, campuses, factories, hotels, and data centers",
      "Leverages smart hardware, software, and water-as-a-service models to reduce consumption, prevent losses, and improve resilience at the customer site",
    ],
    subsectors: [
      "Building Leak Prevention & Smart Fixtures",
      "Onsite Greywater / Water Reuse",
      "Distributed Water-as-a-Service",
    ],
  },
  {
    sector: "Agricultural Water & Irrigation",
    tagline: "Water Productivity",
    description: [
      "Enables growers and land managers to optimize irrigation decisions through sensors, controls, remote sensing, and agronomic analytics",
      "Driven by drought, groundwater restrictions, water rights pressure, pumping costs, and the need to improve crop yield per unit of water consumed",
    ],
    subsectors: [
      "Precision Irrigation & Controls",
      "Soil / Plant / Remote Sensing",
      "Water Accounting & Stewardship",
    ],
  },
  {
    sector: "Climate Resilience & Alternative Supply",
    tagline: "Supply Security & Adaptation",
    description: [
      "Provides technologies that expand water supply, predict water-related climate risk, and improve resilience to drought, floods, stormwater, and supply disruption",
      "Includes both software-led risk analytics and infrastructure-oriented solutions for desalination, emergency supply, and distributed water access",
    ],
    subsectors: [
      "Desalination & Alternative Supply",
      "Flood / Stormwater Intelligence",
      "Climate & Watershed Risk Analytics",
    ],
  },
];

const subsectorMap: SubsectorMap[] = [
  {
    sector: "Utility Grid & Digital Water",
    sourcesNote:
      "Utility-grid financing sources include company / investor announcements for FIDO AI, VODA.ai, Olea, SewerAI, 120Water, Waterplan, Transcend, and Klir; Aquasight appears commercial-stage, but I did not find a disclosed institutional round.",
    subsectors: [
      {
        name: "Leakage & Network Intelligence",
        companies: [
          { name: "FIDO AI", bracket: "Series B: N/D | CRH Ventures" },
          { name: "VODA.ai", bracket: "Series A: N/D | CRH Ventures" },
          {
            name: "Olea Edge Analytics",
            bracket: "Series C: $35.0mm | Insight Partners",
          },
          { name: "Aquasight", bracket: "Private: N/D | N/D" },
        ],
      },
      {
        name: "Pipe / Sewer Inspection",
        companies: [
          { name: "SewerAI", bracket: "Series B: $15.0mm | Innovius Capital" },
        ],
      },
      {
        name: "Compliance, Planning & Digital Workflows",
        companies: [
          { name: "120Water", bracket: "Growth: $43.0mm | Edison Partners" },
          { name: "Waterplan", bracket: "Series A: $11.0mm | Base10 Partners" },
          { name: "Transcend", bracket: "Series B: $20.0mm | Autodesk" },
          { name: "Klir", bracket: "Series B: $10.0mm | Insight Partners" },
        ],
      },
    ],
  },
  {
    sector: "Industrial Water Treatment & Reuse",
    sourcesNote:
      "Industrial-water sources include Gradiant, Moleaer, Cambrian, ZwitterCo, Membrion, Via Separations, Aqua Membranes, Capture6, Aquafortus, ElectraMet, and Saltworks commercial updates; Saltworks does not appear to have a clearly disclosed venture round.",
    subsectors: [
      {
        name: "Industrial Reuse Platforms",
        companies: [
          { name: "Gradiant", bracket: "Series D: $225.0mm | BoltRock Holdings" },
          { name: "Moleaer", bracket: "Series C: $40.0mm | Apollo" },
          {
            name: "Cambrian Innovation",
            bracket: "Credit Facility: $150.0mm | ING Capital",
          },
          { name: "Saltworks Technologies", bracket: "Private: N/D | N/D" },
        ],
      },
      {
        name: "Membranes & Separations",
        companies: [
          { name: "ZwitterCo", bracket: "Series B: $58.4mm | Evok Innovations" },
          { name: "Membrion", bracket: "Series B1: $20.0mm | Pangaea Ventures" },
          { name: "Via Separations", bracket: "Series B: $38.0mm | NGP ETP" },
          {
            name: "Aqua Membranes",
            bracket: "Series B: N/D | Burnt Island Ventures",
          },
        ],
      },
      {
        name: "Brine & Resource Recovery",
        companies: [
          {
            name: "Capture6",
            bracket: "Series A + project funding: $27.5mm | Tetrad Corp.",
          },
          { name: "Aquafortus", bracket: "Series A1: $17.0mm | DCVC" },
          {
            name: "ElectraMet",
            bracket: "Series C: $10.0mm | Veriten / NexTen",
          },
        ],
      },
    ],
  },
  {
    sector: "Contaminants, PFAS & Water Quality",
    sourcesNote:
      "PFAS / water-quality sources include Puraffinity, Cyclopure / Kurita, EPOC / SAFF distribution via Allonnia, Aclarity, Allonnia, Claros, Revive, Aquagga, KETOS, and Kando.",
    subsectors: [
      {
        name: "PFAS Capture",
        companies: [
          { name: "Puraffinity", bracket: "Series A: $13.9mm | Octopus Ventures" },
          { name: "Cyclopure", bracket: "Strategic Investment: N/D | Kurita" },
          { name: "EPOC Enviro / SAFF", bracket: "Private: N/D | N/D" },
        ],
      },
      {
        name: "PFAS Destruction & Remediation",
        companies: [
          { name: "Aclarity", bracket: "Series A: $15.9mm | Aqualateral" },
          {
            name: "Allonnia",
            bracket: "Series A Extension: >$20.0mm | Viking Global Investors",
          },
          {
            name: "Claros Technologies",
            bracket: "Growth: $22.0mm | Ecosystem Integrity Fund",
          },
          {
            name: "Revive Environmental",
            bracket: "Spinout / JV: N/D | Viking Global Investors",
          },
          {
            name: "Aquagga",
            bracket: "Grant-backed / non-dilutive: N/D | U.S. DoD",
          },
        ],
      },
      {
        name: "Water Quality Monitoring",
        companies: [
          { name: "KETOS", bracket: "Equity Growth: $10.0mm | Tenfore Holdings" },
          { name: "Kando", bracket: "Growth: $10.0mm | DC Thomson" },
        ],
      },
    ],
  },
  {
    sector: "Behind-the-Meter Efficiency & Distributed Reuse",
    sourcesNote:
      "Behind-the-meter sources include WINT, APANA, Epic Cleantec, Hydraloop, Greyter, and Infinite Cooling.",
    subsectors: [
      {
        name: "Building Water Efficiency",
        companies: [
          { name: "WINT", bracket: "Series C: $35.0mm | Inven Capital" },
          { name: "APANA", bracket: "Series B: $11.0mm | Kurita Water Industries" },
        ],
      },
      {
        name: "Onsite Reuse & Greywater",
        companies: [
          {
            name: "Epic Cleantec",
            bracket: "Series B: $12.0mm | Fields / Rayant FO",
          },
          { name: "Hydraloop", bracket: "Series B: €10.5mm | Invest-NL" },
          { name: "Greyter", bracket: "Series B: $10.0mm | Ferguson Ventures" },
        ],
      },
      {
        name: "Cooling Water Recovery",
        companies: [
          {
            name: "Infinite Cooling",
            bracket: "Series A: $12.25mm | Material Impact",
          },
        ],
      },
    ],
  },
  {
    sector: "Agricultural Water & Irrigation",
    sourcesNote:
      "Ag-water sources include CropX, Kilimo, SupPlant, N-Drip, Lumo, Arable, and Hydrosat.",
    subsectors: [
      {
        name: "Irrigation Intelligence",
        companies: [
          { name: "CropX", bracket: "Series C: $30.0mm | Aliaxis" },
          {
            name: "Kilimo",
            bracket: "Series A: $7.5mm | Emerald Technology Ventures",
          },
          { name: "SupPlant", bracket: "Series A: $27.0mm | Red Dot Capital" },
        ],
      },
      {
        name: "Precision Irrigation Hardware",
        companies: [
          { name: "N-Drip", bracket: "Series C: $44.0mm | Liechtenstein Group" },
          {
            name: "Lumo",
            bracket: "Venture Round: $7.0mm | Active Impact Investments",
          },
        ],
      },
      {
        name: "Field & Water-Stress Data",
        companies: [
          {
            name: "Arable",
            bracket: "Series C: $40.0mm | Galvanize Climate Solutions",
          },
          { name: "Hydrosat", bracket: "Series B: $60.0mm | Hartree Partners" },
        ],
      },
    ],
  },
  {
    sector: "Climate Resilience & Alternative Supply",
    sourcesNote:
      "Climate-resilience and alternative-supply sources include Flocean, Oneka, Previsico, Floodbase, and StormHarvester.",
    subsectors: [
      {
        name: "Alternative Water Supply",
        companies: [
          { name: "Flocean", bracket: "Series A Extension: $22.5mm | Xylem" },
          {
            name: "Oneka Technologies",
            bracket: "Series A: C$12.5mm | Hoffecker Family",
          },
        ],
      },
      {
        name: "Flood & Stormwater Intelligence",
        companies: [
          {
            name: "Previsico",
            bracket: "Series A: N/D | Connecticut Innovations",
          },
          { name: "Floodbase", bracket: "Series A: $12.0mm | Lowercarbon Capital" },
          {
            name: "StormHarvester",
            bracket: "Series A: £8.4mm | YFM Equity Partners",
          },
        ],
      },
    ],
  },
];

function CompanyList({ companies }: { companies: Company[] }) {
  return (
    <ul className="space-y-1.5">
      {companies.map((c) => (
        <li key={c.name} className="leading-snug">
          <span className="font-medium text-foreground">{c.name}</span>{" "}
          <span className="text-muted">[{c.bracket}]</span>
        </li>
      ))}
    </ul>
  );
}

function SectorTable({ rows }: { rows: SectorRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="w-1/4 px-4 py-3 text-left font-semibold text-foreground">
              Sector
            </th>
            <th className="px-4 py-3 text-left font-semibold text-foreground">
              Description
            </th>
            <th className="w-1/4 px-4 py-3 text-left font-semibold text-foreground">
              Relevant Subsectors
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sector} className="border-b border-border align-top">
              <td className="px-4 py-4 text-foreground">
                <div className="font-semibold">{row.sector}</div>
                <div className="text-muted">{row.tagline}</div>
              </td>
              <td className="px-4 py-4 text-muted">
                <ul className="space-y-2">
                  {row.description.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-4 py-4 text-muted">
                <ul className="space-y-1">
                  {row.subsectors.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          The North American Water Technology Sector
        </h1>
        <p className="mt-2 text-lg text-muted">Sector Summary</p>
      </header>

      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Detailed Sector Summary
        </h2>
        <SectorTable rows={detailedSectors} />
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Slide-Ready Sector Summary
        </h2>
        <SectorTable rows={slideSectors} />
      </section>

      <section className="mb-16">
        <h2 className="mb-2 text-xl font-semibold text-foreground">
          Updated Subsector Company Map with Financing Brackets
        </h2>
        <div className="mb-6 space-y-1 text-sm text-muted">
          <p>
            Bracket format: [latest publicly disclosed round / financing: size |
            lead backer].
          </p>
          <p>
            N/D = not disclosed / no credible public round detail found. For
            co-led rounds, one lead is shown for deck simplicity.
          </p>
        </div>
        <div className="space-y-10">
          {subsectorMap.map((group) => (
            <div key={`bracketed-${group.sector}`}>
              <h3 className="mb-3 text-base font-semibold text-foreground">
                {group.sector}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="w-1/3 px-4 py-3 text-left font-semibold text-foreground">
                        Subsector
                      </th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">
                        Priority Companies
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.subsectors.map((sub) => (
                      <tr
                        key={`bracketed-${group.sector}-${sub.name}`}
                        className="border-b border-border align-top"
                      >
                        <td className="px-4 py-3 text-foreground">{sub.name}</td>
                        <td className="px-4 py-3">
                          <CompanyList companies={sub.companies} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {group.sourcesNote ? (
                <p className="mt-3 text-xs italic text-muted">
                  {group.sourcesNote}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Clean Slide Version
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/4 px-4 py-3 text-left font-semibold text-foreground">
                  Broad Sector
                </th>
                <th className="w-1/4 px-4 py-3 text-left font-semibold text-foreground">
                  Subsector
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Priority Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {subsectorMap.flatMap((group) =>
                group.subsectors.map((sub, idx) => (
                  <tr
                    key={`slide-${group.sector}-${sub.name}`}
                    className="border-b border-border align-top"
                  >
                    <td className="px-4 py-3 text-foreground">
                      {idx === 0 ? (
                        <span className="font-semibold">{group.sector}</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-foreground">{sub.name}</td>
                    <td className="px-4 py-3">
                      <CompanyList companies={sub.companies} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs italic text-muted">
          For Klir, the disclosed $10.0mm Series B equity is used rather than
          the combined $17.5mm growth financing package, which also included a
          $7.5mm credit facility. Local-currency rounds are left in their
          reported currency to avoid FX noise.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Diligence View — Subsector to Priority Companies
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/2 px-4 py-3 text-left font-semibold text-foreground">
                  Subsector
                </th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  Priority Companies
                </th>
              </tr>
            </thead>
            <tbody>
              {subsectorMap.flatMap((group) =>
                group.subsectors.map((sub) => (
                  <tr
                    key={`diligence-${group.sector}-${sub.name}`}
                    className="border-b border-border align-top"
                  >
                    <td className="px-4 py-3 text-foreground">{sub.name}</td>
                    <td className="px-4 py-3">
                      <CompanyList companies={sub.companies} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
