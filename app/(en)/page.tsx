export default function HomePage() {
  const companies = [
    { company: "AqueoUS Vets", owner: "Bain Capital Double Impact", year: "2022" },
    { company: "Goodnight Midstream", owner: "Tailwater Capital*", year: "2016" },
    { company: "Industrial Flow Solutions", owner: "May River Capital", year: "2017" },
    { company: "WaterFleet", owner: "EagleTree Capital", year: "2017" },
    { company: "Aqualis", owner: "DFW Capital Partners**", year: "2018" },
    { company: "Blackbuck Resources", owner: "Cresta Fund Management", year: "2018" },
    { company: "PURIS", owner: "J.F. Lehman & Company**", year: "2018" },
    { company: "Axius Water", owner: "KKR & Co. / XPV Water Partners", year: "2019" },
    { company: "Clean Water Environmental Services", owner: "Rockwood Equity Partners**", year: "2021" },
    { company: "Pilot Water (Pilot Water Solutions)", owner: "Berkshire Hathaway (via Pilot Company)***", year: "2018" },
    { company: "Seawolf Water (Seawolf Water Resources)", owner: "KLR Group", year: "2018" },
    { company: "Vessco Water", owner: "Gryphon Investors", year: "2020" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left font-semibold text-foreground">Company</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Current Owner</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Initial Investment Year by Current Owner</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((row) => (
              <tr key={row.company} className="border-b border-border">
                <td className="px-4 py-3 text-foreground">{row.company}</td>
                <td className="px-4 py-3 text-muted">{row.owner}</td>
                <td className="px-4 py-3 text-muted">{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
