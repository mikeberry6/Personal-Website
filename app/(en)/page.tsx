type Entry = {
  name: string;
  year: string;
  description: string;
};

const entries: Entry[] = [
  { name: "A25 Concession", year: "2023", description: "Toll road and bridge concession" },
  { name: "AES Indiana", year: "2015", description: "Regulated electric utility" },
  { name: "AES Ohio", year: "2025", description: "Regulated electric utility" },
  { name: "Alto", year: "2025", description: "High-speed rail development" },
  { name: "Backhaul Network Services Inc.", year: "2025", description: "Wireless backhaul infrastructure" },
  { name: "Boralex Inc.", year: "2026", description: "Renewable power generation and development" },
  { name: "DP World Canada", year: "2017", description: "Port terminals and marine logistics" },
  { name: "Enel Green Power Mexico", year: "2018", description: "Utility-scale renewable generation" },
  { name: "Énergir", year: "2004", description: "Natural gas distribution and renewable gas" },
  { name: "ICA Operadora de Vías Terrestres, S.A.P.I. de C.V.", year: "2015", description: "Toll road operating platform" },
  { name: "Indiana Toll Road", year: "2021", description: "Toll road concession" },
  { name: "Innergex Renewable Energy", year: "2025", description: "Hydro, wind, solar, and energy storage" },
  { name: "InTransit BC", year: "2005", description: "Light rail concession" },
  { name: "Invenergy Renewables LLC", year: "2013", description: "Renewable generation and development" },
  { name: "Leading Light Wind", year: "N/A", description: "Offshore wind development" },
  { name: "Pike Corporation", year: "2025", description: "Electric and gas utility infrastructure services" },
  { name: "Plenary Americas", year: "2020", description: "Public-private partnership developer and operator" },
  { name: "QSL International Ltd.", year: "2024", description: "Port terminals, stevedoring, logistics, and marine services" },
  { name: "Renewa", year: "2025", description: "Land-under-infrastructure for renewable projects" },
  { name: "Réseau express métropolitain", year: "2018", description: "Automated light metro" },
  { name: "Southern Star Central Gas Pipeline", year: "2015", description: "Natural gas transmission and storage" },
  { name: "Student Transportation of America and Canada", year: "2004", description: "School bus transportation" },
  { name: "SunZia Wind and Transmission", year: "2023", description: "Wind generation and transmission" },
  { name: "TramCité", year: "2024", description: "Urban tramway" },
  { name: "Vertical Bridge", year: "2019", description: "Wireless towers and communications infrastructure" },
];

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "56rem",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily: "Calibri, 'Segoe UI', Arial, sans-serif",
        fontSize: "11pt",
        lineHeight: 1.5,
        color: "#0b1020",
      }}
    >
      <ul
        style={{
          listStyleType: "disc",
          margin: "0 0 0 1.5em",
          padding: 0,
        }}
      >
        {entries.map((entry) => (
          <li
            key={`${entry.name}-${entry.year}`}
            style={{ margin: "0 0 0.25em 0" }}
          >
            <strong>{entry.name}</strong> ({entry.year} | {entry.description})
          </li>
        ))}
      </ul>
    </div>
  );
}
