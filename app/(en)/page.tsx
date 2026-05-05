type Entry = {
  name: string;
  year: string;
  description: string;
};

type Firm = {
  name: string;
  entries: Entry[];
};

const firms: Firm[] = [
  {
    name: "CVC DIF",
    entries: [
      { name: "Airtower Networks", year: "2022", description: "In-building wireless and neutral-host networks" },
      { name: "American Student Transportation Partners (ASTP)", year: "2025", description: "Student transportation" },
      { name: "BluEarth Renewables", year: "2019", description: "Wind, hydro, and solar independent power producer" },
      { name: "Brahms Wind", year: "2019", description: "Onshore wind" },
      { name: "Canadian Hills Wind", year: "2017", description: "Onshore wind" },
      { name: "CARMA Corp.", year: "2025", description: "Submetering and utility billing" },
      { name: "Cascade Power Project", year: "2020", description: "Natural Gas Power Generation" },
      { name: "Diverso Energy Inc.", year: "2023", description: "Geothermal energy-as-a-service" },
      { name: "ENFRA", year: "2021", description: "Energy solutions and building infrastructure services" },
      { name: "Etobicoke General Hospital (Phase 1 Patient Tower)", year: "2016", description: "Hospital public-private partnership" },
      { name: "GS Power Partners", year: "2023", description: "Distributed and community solar" },
      { name: "Idaho Wind Partners", year: "2019", description: "Onshore wind" },
      { name: "Joink, LLC", year: "2021", description: "Fiber and fixed wireless broadband" },
      { name: "JW Water Holdings (incl. Robson Utilities)", year: "2024", description: "Regulated water and wastewater utilities" },
      { name: "Kingfisher Wind", year: "2021", description: "Onshore wind" },
      { name: "PERENfra Water Joint Venture", year: "2021", description: "Water and wastewater utility development" },
      { name: "RFNOW Inc.", year: "2023", description: "Fiber and fixed wireless broadband" },
      { name: "SBA Canada", year: "2025", description: "Wireless tower infrastructure" },
      { name: "Valley Fiber Ltd.", year: "2020", description: "Rural fiber broadband" },
      { name: "ValorC3", year: "2023", description: "Colocation, cloud, and data centers" },
    ],
  },
];

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily:
          "Calibri, 'Segoe UI', Arial, sans-serif",
        fontSize: "11pt",
        lineHeight: 1.5,
        color: "#0b1020",
      }}
    >
      {firms.map((firm, firmIndex) => (
        <div
          key={firm.name}
          style={{ marginBottom: firmIndex === firms.length - 1 ? 0 : "4em" }}
        >
          <p
            style={{
              margin: "0 0 0.5em 0",
              fontSize: "12pt",
            }}
          >
            <strong>
              <u>{firm.name}</u>
            </strong>
          </p>
          <ul
            style={{
              listStyleType: "disc",
              margin: "0 0 0 1.5em",
              padding: 0,
            }}
          >
            {firm.entries.map((entry) => (
              <li
                key={`${firm.name}-${entry.name}-${entry.year}`}
                style={{ margin: "0 0 0.25em 0" }}
              >
                <strong>{entry.name}</strong> ({entry.year} |{" "}
                {entry.description})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
