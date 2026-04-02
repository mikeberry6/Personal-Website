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
      company: "Axia Water",
      subsector: "Services",
      owner: "Alpine Investors / AlpineX",
      year: "2023",
      description:
        "Pure-play water services platform, organized as a dedicated water services vertical inside AlpineX.",
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
      company: "cleanwater1 (formerly UGSI Solutions)",
      subsector: "Downstream",
      owner: "Baird Capital",
      year: "2022",
      description:
        "Pure-play water and wastewater quality and disinfection solutions platform for municipal and industrial markets.",
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
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-foreground/20">
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Company
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Subsector
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Owner / Sponsor
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Year Invested
              </th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">
                Description of Business
              </th>
            </tr>
          </thead>
          <tbody>
            {companies.map((row) => (
              <tr
                key={row.company}
                className="border-b border-foreground/10 hover:bg-foreground/5"
              >
                <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                  {row.company}
                </td>
                <td className="px-4 py-3 text-foreground/80 whitespace-nowrap">
                  {row.subsector}
                </td>
                <td className="px-4 py-3 text-foreground/80 whitespace-nowrap">
                  {row.owner}
                </td>
                <td className="px-4 py-3 text-foreground/80 whitespace-nowrap">
                  {row.year}
                </td>
                <td className="px-4 py-3 text-foreground/80">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
