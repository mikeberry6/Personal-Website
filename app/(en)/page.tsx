type SectorRow = {
  sector: string;
  tagline: string;
  description: string[];
  subsectors: string[];
};

type SubsectorMap = {
  sector: string;
  subsectors: { name: string; companies: string[] }[];
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
    subsectors: [
      { name: "Leakage & Network Intelligence", companies: ["FIDO AI", "VODA.ai"] },
      { name: "Pipe / Sewer Inspection", companies: ["SewerAI"] },
      {
        name: "Compliance, Planning & Digital Workflows",
        companies: ["120Water", "Waterplan", "Transcend"],
      },
    ],
  },
  {
    sector: "Industrial Water Treatment & Reuse",
    subsectors: [
      { name: "Industrial Reuse Platforms", companies: ["Gradiant", "Moleaer"] },
      {
        name: "Membranes & Separations",
        companies: ["ZwitterCo", "Membrion", "Via Separations"],
      },
      { name: "Brine & Resource Recovery", companies: ["Capture6", "Aquafortus"] },
    ],
  },
  {
    sector: "Contaminants, PFAS & Water Quality",
    subsectors: [
      { name: "PFAS Capture", companies: ["Puraffinity"] },
      {
        name: "PFAS Destruction & Remediation",
        companies: ["Aclarity", "Allonnia", "Claros Technologies"],
      },
      { name: "Water Quality Monitoring", companies: ["KETOS"] },
    ],
  },
  {
    sector: "Behind-the-Meter Efficiency & Distributed Reuse",
    subsectors: [
      { name: "Building Water Efficiency", companies: ["WINT"] },
      {
        name: "Onsite Reuse & Greywater",
        companies: ["Epic Cleantec", "Hydraloop", "Greyter"],
      },
    ],
  },
  {
    sector: "Agricultural Water & Irrigation",
    subsectors: [
      { name: "Irrigation Intelligence", companies: ["CropX", "Kilimo"] },
      { name: "Precision Irrigation Hardware", companies: ["N-Drip"] },
      { name: "Field & Water-Stress Data", companies: ["Arable", "Hydrosat"] },
    ],
  },
  {
    sector: "Climate Resilience & Alternative Supply",
    subsectors: [
      {
        name: "Alternative Water Supply",
        companies: ["Flocean", "Oneka Technologies"],
      },
      {
        name: "Flood & Stormwater Intelligence",
        companies: ["Previsico", "Floodbase", "StormHarvester"],
      },
    ],
  },
];

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
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Subsectors & Priority Companies
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/3 px-4 py-3 text-left font-semibold text-foreground">
                  Broad Sector
                </th>
                <th className="w-1/3 px-4 py-3 text-left font-semibold text-foreground">
                  Succinct Subsectors
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
                    key={`${group.sector}-${sub.name}`}
                    className="border-b border-border align-top"
                  >
                    <td className="px-4 py-3 text-foreground">
                      {idx === 0 ? (
                        <span className="font-semibold">{group.sector}</span>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-foreground">{sub.name}</td>
                    <td className="px-4 py-3 text-muted">
                      {sub.companies.join(", ")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
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
                    <td className="px-4 py-3 text-muted">
                      {sub.companies.join(", ")}
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
