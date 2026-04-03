const subsectorStyles: Record<string, { bg: string; fg: string; label: string }> = {
  Services: { bg: 'var(--color-badge-services-bg)', fg: 'var(--color-badge-services-fg)', label: 'Services' },
  Downstream: { bg: 'var(--color-badge-downstream-bg)', fg: 'var(--color-badge-downstream-fg)', label: 'Downstream' },
  Midstream: { bg: 'var(--color-badge-midstream-bg)', fg: 'var(--color-badge-midstream-fg)', label: 'Midstream' },
  'Behind-the-meter': { bg: 'var(--color-badge-btm-bg)', fg: 'var(--color-badge-btm-fg)', label: 'Behind-the-meter' },
};

export default function HomePage() {
  const companies = [
    {
      company: "Aqualis",
      subsector: "Services",
      owner: "DFW Capital Partners",
      year: "2018",
      description:
        "Provider of sustainable water management solutions, specializing in post-construction stormwater management, wastewater management, and water quality testing services.",
    },
    {
      company: "Ardurra",
      subsector: "Services",
      owner: "Littlejohn & Co.",
      year: "2023",
      description:
        "Engineering and consulting firm providing complex design, planning, and construction management services for water, transportation, and municipal public works projects.",
    },
    {
      company: "Axia Water",
      subsector: "Services",
      owner: "Alpine Investors / AlpineX",
      year: "2023",
      description:
        "Pure-play water services platform, organized as a dedicated water services vertical inside AlpineX.",
    },
    {
      company: "Axius Water",
      subsector: "Downstream",
      owner: "KKR / XPV Water Partners",
      year: "2019",
      description:
        "Platform focused on providing diversified, end-to-end nutrient removal solutions for municipal and industrial wastewater treatment facilities.",
    },
    {
      company: "Blackbuck Resources",
      subsector: "Midstream",
      owner: "Cresta Fund Management",
      year: "2018",
      description:
        "Oilfield water management solutions provider focused on creating practical, effective, and economical infrastructure, disposal, and treatment applications.",
    },
    {
      company: "CITCO Water",
      subsector: "Downstream",
      owner: "Trivest Partners",
      year: "2023",
      description:
        "Value-added distributor of chemicals, pipes, valves, smart meters, and engineered products to small and mid-sized municipalities and waterworks contractors.",
    },
    {
      company: "Clean Water Environmental Services",
      subsector: "Services",
      owner: "Rockwood Equity Partners",
      year: "2020",
      description:
        "Provider of environmental services specializing in industrial wastewater treatment, disposal, and hazardous waste management.",
    },
    {
      company: "cleanwater1 (formerly UGSI Solutions)",
      subsector: "Downstream",
      owner: "Baird Capital",
      year: "2022",
      description:
        "Pure-play water and wastewater quality and disinfection solutions platform for municipal and industrial markets.",
    },
    {
      company: "CRB Water",
      subsector: "Downstream",
      owner: "AEA Investors",
      year: "2023",
      description:
        "Full-service provider of industrial and biological water and wastewater treatment products, chemicals, and programs to commercial and institutional markets.",
    },
    {
      company: "Dragonfly Pond Works",
      subsector: "Services",
      owner: "Warren Equity Partners",
      year: "2024",
      description:
        "Environmental services company specializing in stormwater compliance, providing routine maintenance and repairs on lakes, ponds, stormwater basins, and underground detention systems.",
    },
    {
      company: "Flotilla Partners",
      subsector: "Behind-the-meter",
      owner: "Osceola Capital",
      year: "2023",
      description:
        "Pure-play residential and commercial water treatment services platform providing maintenance, repair, testing, and installation.",
    },
    {
      company: "Goodnight Midstream",
      subsector: "Midstream",
      owner: "Tailwater Capital",
      year: "2016",
      description:
        "Midstream produced water infrastructure company that gathers, transports, and disposes of oil and gas wastewater via extensive pipeline networks.",
    },
    {
      company: "Hasa",
      subsector: "Downstream",
      owner: "Wind Point Partners",
      year: "2023",
      description:
        "High-quality water treatment chemicals and products platform, serving as a leading producer of liquid sodium hypochlorite for recreational, municipal, and industrial water sanitization.",
    },
    {
      company: "Industrial Flow Solutions",
      subsector: "Downstream",
      owner: "May River Capital",
      year: "2017",
      description:
        "Global wastewater pump and controls platform focused on the design, manufacturing, sales, and service of wastewater pumps, controls, and direct in-line pumping systems.",
    },
    {
      company: "Kind Water Systems",
      subsector: "Behind-the-meter",
      owner: "CID Capital",
      year: "2024",
      description:
        "Residential water treatment systems platform offering whole-home water filtration and salt-free softening systems.",
    },
    {
      company: "Pilot Water Solutions",
      subsector: "Midstream",
      owner: "Berkshire Hathaway (via Pilot Co.)",
      year: "2018",
      description:
        "Midstream saltwater disposal, recycling, and transportation company providing full-cycle water management for the oil and gas industry.",
    },
    {
      company: "PURIS",
      subsector: "Services",
      owner: "J.F. Lehman & Company",
      year: "2018",
      description:
        "Vertically integrated water infrastructure platform providing trenchless pipe rehabilitation solutions and technologies across wastewater, stormwater, and potable water applications.",
    },
    {
      company: "Seawolf Water Resources",
      subsector: "Midstream",
      owner: "Private Investors / Riverstone Credit",
      year: "2018 / 2022",
      description:
        "Oilfield water midstream services company focused on full-cycle water supply, gathering, disposal, recycling, and infrastructure for the energy sector.",
    },
    {
      company: "StormTrap",
      subsector: "Services",
      owner: "PSP Capital",
      year: "2022",
      description:
        "Provider of stormwater management solutions, designing systems that control the volume and discharge timing of runoff and remove pollutants.",
    },
    {
      company: "The Rapid Group",
      subsector: "Services",
      owner: "Hidden Harbor Capital Partners",
      year: "2023",
      description:
        "Facility services provider specializing in pump, motor, and related repair, maintenance, and installation services for water and wastewater applications.",
    },
    {
      company: "USA Water",
      subsector: "Services",
      owner: "Levine Leichtman Capital Partners",
      year: "2024",
      description:
        "Water and wastewater operations and maintenance, infrastructure development, technology, and management platform serving municipal and utility systems in the Southeast.",
    },
    {
      company: "USALCO",
      subsector: "Downstream",
      owner: "TJC",
      year: "2024",
      description:
        "Supplier of bespoke aluminum-based coagulants, specialty chemistries, and digital dosing and filtration services for municipal and industrial water and wastewater treatment.",
    },
    {
      company: "Vessco Water",
      subsector: "Downstream",
      owner: "Gryphon Investors",
      year: "2020",
      description:
        "Water and wastewater treatment systems platform and equipment distributor focused on pump, process, flow-control, and automation equipment.",
    },
    {
      company: "Vortex Companies",
      subsector: "Services",
      owner: "Quad-C Management",
      year: "2023",
      description:
        "Global leader in trenchless water and sewer infrastructure solutions, offering turnkey rehabilitation technologies including liners, coatings, robotics, and related renewal services.",
    },
    {
      company: "WaterFleet",
      subsector: "Services",
      owner: "EagleTree Capital",
      year: "2017",
      description:
        "Provider of mobile water and wastewater treatment solutions, operating a technology-as-a-service platform for industrial and commercial customers.",
    },
    {
      company: "ZwitterCo",
      subsector: "Downstream",
      owner: "Evok Innovations / DCVC",
      year: "2024",
      description:
        "Advanced membrane technologies provider transforming water treatment to unlock unconventional water sources like industrial wastewaters.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Portfolio Companies
        </h1>
        <p className="mt-2 text-base text-muted">
          {companies.length} water infrastructure companies across the value chain
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((row) => {
          const badge = subsectorStyles[row.subsector];
          return (
            <div
              key={row.company}
              className="card-shadow flex flex-col rounded-xl border border-border p-5"
              style={{ backgroundColor: 'var(--color-card-bg)' }}
            >
              <span
                className="mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                style={{ backgroundColor: badge.bg, color: badge.fg }}
              >
                {badge.label}
              </span>

              <h2 className="text-lg font-semibold leading-snug text-foreground">
                {row.company}
              </h2>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 text-sm text-muted">
                <span>{row.owner}</span>
                <span className="text-border">|</span>
                <span>{row.year}</span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {row.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
