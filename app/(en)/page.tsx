const containerStyle = {
  maxWidth: "64rem",
  margin: "0 auto",
  padding: "4rem 1.5rem",
  fontFamily: "Calibri, 'Segoe UI', Arial, sans-serif",
  fontSize: "11pt",
  lineHeight: 1.5,
  color: "#0b1020",
} as const;

const h2Style = {
  margin: "1.75em 0 0.5em 0",
  fontSize: "14pt",
} as const;

const paragraphStyle = {
  margin: "0 0 0.75em 0",
} as const;

const ulStyle = {
  margin: "0 0 0.75em 0",
  paddingLeft: "1.5rem",
} as const;

const liStyle = {
  margin: "0 0 0.5em 0",
} as const;

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        <strong>High-bar view:</strong> confirmed laws, contracts, programs,
        formal reviews, or active government plans &mdash; not just online
        chatter.
      </p>

      <h2 style={h2Style}>
        <strong>Federal</strong>
      </h2>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Infrastructure finance / P3 capital</strong> &mdash; Main
          federal focus is attracting private and institutional capital into
          clean energy, trade/transportation, housing-enabling infrastructure,
          digital infrastructure, and AI through the Canada Infrastructure
          Bank.
        </li>
        <li style={liStyle}>
          <strong>Airports</strong> &mdash; Transport Canada&rsquo;s
          2026&ndash;27 plan explicitly includes attracting more
          private/third-party airport investment and considering airport
          privatization options.
        </li>
        <li style={liStyle}>
          <strong>Trans Mountain</strong> &mdash; The main federal asset-sale
          file is potential divestment of the federally owned Trans Mountain
          pipeline, though sale timing remains uncertain.
        </li>
        <li style={liStyle}>
          <strong>Canada Post</strong> &mdash; More a
          restructuring/commercialization debate than a confirmed
          privatization plan; high-bar inclusion is limited to service-model
          reform, not asset sale.
        </li>
      </ul>

      <h2 style={h2Style}>
        <strong>Provincial &mdash; main focus areas</strong>
      </h2>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Health-care delivery and facilities</strong> &mdash; Biggest
          provincial privatization focus: private surgical centres,
          diagnostics, private-pay/dual-practice models, mental-health
          providers, virtual care, ambulance contracts, and hospital P3s. Key
          provinces: Ontario, Alberta, Saskatchewan, Nova Scotia, Newfoundland
          &amp; Labrador, PEI, B.C., Quebec.
        </li>
        <li style={liStyle}>
          <strong>Electricity / Crown utilities</strong> &mdash; Focus is
          usually not outright sale, but private generation, PPAs, strategic
          partnerships, utility reviews, and partial market liberalization. Key
          provinces: Quebec, New Brunswick, Saskatchewan, Manitoba, PEI.
        </li>
        <li style={liStyle}>
          <strong>Water and wastewater</strong> &mdash; Main live file is
          Ontario municipal water/wastewater corporations and broader concern
          about P3 financing for growth infrastructure; private ownership is
          restricted, but governance/financing concerns remain.
        </li>
        <li style={liStyle}>
          <strong>Hospitals and social-infrastructure P3s</strong> &mdash;
          Classic P3 territory: hospitals, courthouses, schools, government
          buildings. Strong current example: Nova Scotia&rsquo;s QEII Halifax
          Infirmary P3, valued at $7.4B.
        </li>
        <li style={liStyle}>
          <strong>Liquor retail and distribution</strong> &mdash; Focus is
          private retail licences, direct delivery, and erosion of Crown liquor
          retail/distribution. Key provinces: Saskatchewan, Ontario, B.C., Nova
          Scotia, Quebec.
        </li>
        <li style={liStyle}>
          <strong>Government service platforms</strong> &mdash; Privatization
          focus is outsourcing or retail-platform delivery of public access
          points: ServiceOntario-style counters, virtual health platforms,
          registries, and back-office service delivery. Stronger files: Ontario
          ServiceOntario / Staples, PEI Maple.
        </li>
        <li style={liStyle}>
          <strong>Public land / recreation assets</strong> &mdash; Focus is
          long-term leases, private operators, or asset disposal rather than
          full utility privatization. Main examples: Ontario Place / Therme and
          Newfoundland &amp; Labrador&rsquo;s Marble Mountain.
        </li>
        <li style={liStyle}>
          <strong>Health staffing and managed-service contracts</strong>{" "}
          &mdash; Major privatization-adjacent focus where provinces use private
          agencies or contractors for staffing/operations. Key files: Manitoba
          nursing agencies, New Brunswick veterinary services / health
          contracting, NL travel nursing and Medavie ambulance.
        </li>
      </ul>

      <p style={paragraphStyle}>
        <strong>Bottom line:</strong> federally, the strongest privatization
        focus is infrastructure finance, airports, and Trans Mountain.
        Provincially, it is overwhelmingly health care, then
        electricity/utilities, water/wastewater, liquor, government-service
        platforms, and public land/recreation assets.
      </p>
    </div>
  );
}
