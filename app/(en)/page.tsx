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

const tableStyle = {
  borderCollapse: "collapse",
  width: "100%",
  margin: "0 0 1em 0",
  fontSize: "11pt",
} as const;

const thStyle = {
  border: "1px solid #0b1020",
  padding: "6px 8px",
  textAlign: "left" as const,
  backgroundColor: "#e5e7eb",
  fontWeight: "bold" as const,
};

const thNumStyle = {
  ...thStyle,
  textAlign: "right" as const,
};

const tdStyle = {
  border: "1px solid #0b1020",
  padding: "6px 8px",
  textAlign: "left" as const,
};

const tdNumStyle = {
  ...tdStyle,
  textAlign: "right" as const,
};

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        Below are the tables from the Water-only / subsegment workbook.
        Figures are in $ millions, except margins and mix percentages. ERII
        does not disclose EBITDA by MPD/OEM/Aftermarket, so Water EBITDA is
        calculated as Water operating income + Water D&amp;A. Capex is
        consolidated company capex, because ERII does not disclose segment
        capex. FY2025 source is the FY25 10-K; Q1 split is from the Q1 2026
        earnings release.
      </p>

      <h2 style={h2Style}>
        <strong>1. Water revenue by subsegment</strong>
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Year</th>
            <th style={thNumStyle}>Megaproject / MPD</th>
            <th style={thNumStyle}>OEM</th>
            <th style={thNumStyle}>Aftermarket / AM</th>
            <th style={thNumStyle}>Total Water Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>2020</td>
            <td style={tdNumStyle}>$66.8</td>
            <td style={tdNumStyle}>$15.8</td>
            <td style={tdNumStyle}>$9.5</td>
            <td style={tdNumStyle}>$92.1</td>
          </tr>
          <tr>
            <td style={tdStyle}>2021</td>
            <td style={tdNumStyle}>$75.3</td>
            <td style={tdNumStyle}>$17.6</td>
            <td style={tdNumStyle}>$10.9</td>
            <td style={tdNumStyle}>$103.9</td>
          </tr>
          <tr>
            <td style={tdStyle}>2022</td>
            <td style={tdNumStyle}>$81.8</td>
            <td style={tdNumStyle}>$28.9</td>
            <td style={tdNumStyle}>$14.8</td>
            <td style={tdNumStyle}>$125.4</td>
          </tr>
          <tr>
            <td style={tdStyle}>2023</td>
            <td style={tdNumStyle}>$83.7</td>
            <td style={tdNumStyle}>$25.5</td>
            <td style={tdNumStyle}>$18.5</td>
            <td style={tdNumStyle}>$127.7</td>
          </tr>
          <tr>
            <td style={tdStyle}>2024</td>
            <td style={tdNumStyle}>$95.4</td>
            <td style={tdNumStyle}>$31.3</td>
            <td style={tdNumStyle}>$17.6</td>
            <td style={tdNumStyle}>$144.3</td>
          </tr>
          <tr>
            <td style={tdStyle}>2025</td>
            <td style={tdNumStyle}>$82.9</td>
            <td style={tdNumStyle}>$31.7</td>
            <td style={tdNumStyle}>$20.1</td>
            <td style={tdNumStyle}>$134.7</td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>
        <strong>2. Water revenue mix</strong>
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Year</th>
            <th style={thNumStyle}>MPD %</th>
            <th style={thNumStyle}>OEM %</th>
            <th style={thNumStyle}>Aftermarket %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>2020</td>
            <td style={tdNumStyle}>72.5%</td>
            <td style={tdNumStyle}>17.2%</td>
            <td style={tdNumStyle}>10.3%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2021</td>
            <td style={tdNumStyle}>72.5%</td>
            <td style={tdNumStyle}>17.0%</td>
            <td style={tdNumStyle}>10.5%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2022</td>
            <td style={tdNumStyle}>65.2%</td>
            <td style={tdNumStyle}>23.0%</td>
            <td style={tdNumStyle}>11.8%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2023</td>
            <td style={tdNumStyle}>65.5%</td>
            <td style={tdNumStyle}>20.0%</td>
            <td style={tdNumStyle}>14.5%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2024</td>
            <td style={tdNumStyle}>66.1%</td>
            <td style={tdNumStyle}>21.7%</td>
            <td style={tdNumStyle}>12.2%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2025</td>
            <td style={tdNumStyle}>61.5%</td>
            <td style={tdNumStyle}>23.6%</td>
            <td style={tdNumStyle}>14.9%</td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>
        <strong>3. Water profitability and capex</strong>
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Year</th>
            <th style={thNumStyle}>Water Gross Profit</th>
            <th style={thNumStyle}>Water Gross Margin</th>
            <th style={thNumStyle}>Water Operating Income</th>
            <th style={thNumStyle}>Water D&amp;A</th>
            <th style={thNumStyle}>Water EBITDA</th>
            <th style={thNumStyle}>Water EBITDA Margin</th>
            <th style={thNumStyle}>Consolidated Capex</th>
            <th style={thNumStyle}>Capex / Water Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>2020</td>
            <td style={tdNumStyle}>$63.8</td>
            <td style={tdNumStyle}>69.3%</td>
            <td style={tdNumStyle}>$45.7</td>
            <td style={tdNumStyle}>$1.4</td>
            <td style={tdNumStyle}>$47.1</td>
            <td style={tdNumStyle}>51.1%</td>
            <td style={tdNumStyle}>$6.8</td>
            <td style={tdNumStyle}>7.4%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2021</td>
            <td style={tdNumStyle}>$71.2</td>
            <td style={tdNumStyle}>68.5%</td>
            <td style={tdNumStyle}>$52.7</td>
            <td style={tdNumStyle}>$1.8</td>
            <td style={tdNumStyle}>$54.5</td>
            <td style={tdNumStyle}>52.5%</td>
            <td style={tdNumStyle}>$6.7</td>
            <td style={tdNumStyle}>6.4%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2022</td>
            <td style={tdNumStyle}>$87.3</td>
            <td style={tdNumStyle}>69.6%</td>
            <td style={tdNumStyle}>$65.1</td>
            <td style={tdNumStyle}>$2.1</td>
            <td style={tdNumStyle}>$67.3</td>
            <td style={tdNumStyle}>53.6%</td>
            <td style={tdNumStyle}>$4.2</td>
            <td style={tdNumStyle}>3.4%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2023</td>
            <td style={tdNumStyle}>$87.4</td>
            <td style={tdNumStyle}>68.5%</td>
            <td style={tdNumStyle}>$61.7</td>
            <td style={tdNumStyle}>$2.8</td>
            <td style={tdNumStyle}>$64.5</td>
            <td style={tdNumStyle}>50.5%</td>
            <td style={tdNumStyle}>$2.6</td>
            <td style={tdNumStyle}>2.0%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2024</td>
            <td style={tdNumStyle}>$96.9</td>
            <td style={tdNumStyle}>67.2%</td>
            <td style={tdNumStyle}>$67.4</td>
            <td style={tdNumStyle}>$2.9</td>
            <td style={tdNumStyle}>$70.3</td>
            <td style={tdNumStyle}>48.7%</td>
            <td style={tdNumStyle}>$1.3</td>
            <td style={tdNumStyle}>0.9%</td>
          </tr>
          <tr>
            <td style={tdStyle}>2025</td>
            <td style={tdNumStyle}>$87.8</td>
            <td style={tdNumStyle}>65.2%</td>
            <td style={tdNumStyle}>$62.0</td>
            <td style={tdNumStyle}>$2.8</td>
            <td style={tdNumStyle}>$64.8</td>
            <td style={tdNumStyle}>48.1%</td>
            <td style={tdNumStyle}>$1.3</td>
            <td style={tdNumStyle}>1.0%</td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>
        <strong>4. Q1 2026 reference split: Desalination vs. Wastewater</strong>
      </h2>
      <p style={paragraphStyle}>
        This split is not available annually for FY2020&ndash;FY2025 in the
        10-Ks. ERII started showing the split in the Q1 2026 materials.
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Period</th>
            <th style={thStyle}>Subsegment</th>
            <th style={thNumStyle}>Revenue</th>
            <th style={thNumStyle}>Gross Profit</th>
            <th style={thNumStyle}>Gross Margin</th>
            <th style={thNumStyle}>Operating Income</th>
            <th style={thNumStyle}>Operating Margin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Q1 2026</td>
            <td style={tdStyle}>Desalination</td>
            <td style={tdNumStyle}>$8.9</td>
            <td style={tdNumStyle}>$4.0</td>
            <td style={tdNumStyle}>44.5%</td>
            <td style={tdNumStyle}>-$1.2</td>
            <td style={tdNumStyle}>-13.8%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Q1 2026</td>
            <td style={tdStyle}>Wastewater</td>
            <td style={tdNumStyle}>$0.6</td>
            <td style={tdNumStyle}>$0.2</td>
            <td style={tdNumStyle}>38.4%</td>
            <td style={tdNumStyle}>-$2.1</td>
            <td style={tdNumStyle}>-343.9%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Q1 2025</td>
            <td style={tdStyle}>Desalination</td>
            <td style={tdNumStyle}>$7.8</td>
            <td style={tdNumStyle}>$4.4</td>
            <td style={tdNumStyle}>56.4%</td>
            <td style={tdNumStyle}>$0.5</td>
            <td style={tdNumStyle}>6.0%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Q1 2025</td>
            <td style={tdStyle}>Wastewater</td>
            <td style={tdNumStyle}>$0.3</td>
            <td style={tdNumStyle}>$0.1</td>
            <td style={tdNumStyle}>41.3%</td>
            <td style={tdNumStyle}>-$2.1</td>
            <td style={tdNumStyle}>-679.0%</td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>
        <strong>5. Source / methodology table</strong>
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Item</th>
            <th style={thStyle}>Used for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>FY2021 10-K</td>
            <td style={tdStyle}>
              FY2020&ndash;FY2021 Water channel revenue, segment financials,
              and D&amp;A
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>FY2022 10-K</td>
            <td style={tdStyle}>
              FY2020&ndash;FY2022 Water channel revenue, segment financials,
              D&amp;A, and capex
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>FY2024 10-K</td>
            <td style={tdStyle}>
              FY2022&ndash;FY2024 channel/segment comparisons, D&amp;A, and
              capex
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>FY2025 10-K</td>
            <td style={tdStyle}>
              FY2023&ndash;FY2025 Water channel revenue, segment financials,
              D&amp;A, and capex
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Q1 2026 earnings release</td>
            <td style={tdStyle}>
              Q1 2026 and Q1 2025 Desalination/Wastewater reference split
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>EBITDA method</td>
            <td style={tdStyle}>
              Water EBITDA = Water operating income + Water D&amp;A
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Capex method</td>
            <td style={tdStyle}>
              Consolidated capex used; ERII does not disclose Water-only capex
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Channel EBITDA</td>
            <td style={tdStyle}>
              Not disclosed by ERII for MPD / OEM / Aftermarket
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={h2Style}>
        <strong>6. Subsegment overview</strong>
      </h2>
      <p style={paragraphStyle}>
        <strong>Desalination:</strong> This is the main business and profit
        engine. ERII sells high-pressure PX devices, pumps, and turbochargers
        into seawater reverse-osmosis desalination plants. Customers include
        developers, EPC firms, OEMs, plant owners, and operators. In FY25,
        the broader &ldquo;Water&rdquo; segment generated almost all company
        revenue: $134.7 million of ERII&rsquo;s $135.0 million total revenue.
      </p>
      <p style={paragraphStyle}>
        <strong>Wastewater:</strong> This is the growth-option business. ERII
        is applying PX technology to industrial and municipal water reuse,
        brackish water, zero-liquid-discharge, and high-pressure
        reverse-osmosis applications. In Q1 2026, ERII separated Wastewater
        into a new reporting segment; revenue was still tiny at $0.6 million,
        but management said the low-pressure PX pipeline had more than
        doubled over the past twelve months.
      </p>
      <p style={paragraphStyle}>
        <strong>Emerging Technologies / CO&#8322;:</strong> This was
        ERII&rsquo;s attempt to apply pressure-exchanger technology to
        CO&#8322; refrigeration, especially grocery retail. The company
        decided to wind down the CO&#8322; retail grocery business after a
        &ldquo;fundamental change&rdquo; in outlook. Q1 2026 included
        restructuring charges, goodwill impairment, and inventory reserve
        charges tied to that shutdown.
      </p>

      <h2 style={h2Style}>
        <strong>
          7. Geography: the business is very international and Middle
          East-heavy
        </strong>
      </h2>
      <p style={paragraphStyle}>
        This is one of the most important things to understand. In FY25, 98%
        of product revenue was international. By country, Saudi Arabia was
        28% of product revenue and Qatar was 12%. By broader region, the
        Middle East was $68.2 million of FY25 revenue, and Africa was $15.0
        million.
      </p>
      <p style={paragraphStyle}>
        That concentration is both a strength and a risk. The Middle East and
        North Africa are major desalination markets, but geopolitical events
        can delay projects. In the Q1 2026 shareholder letter, management
        said the war in Iran severely limited near-term visibility and caused
        ERII to temporarily withdraw 2026 guidance. Management also said
        projects in countries exposed to the conflict represented about 40%
        of original 2026 desalination guidance at the midpoint.
      </p>

      <h2 style={h2Style}>
        <strong>8. What changed in 2026</strong>
      </h2>
      <p style={paragraphStyle}>Three big updates matter:</p>
      <p style={paragraphStyle}>
        <strong>First, management transition.</strong> CEO David Moon intends
        to retire once a successor is appointed, and CFO Mike Mancini
        resigned effective May 6, 2026; Aidan Ryan became interim CFO.
      </p>
      <p style={paragraphStyle}>
        <strong>Second, CO&#8322; is being wound down.</strong> Q1 2026 gross
        margin was only 27.8%, but that was distorted by a $1.6 million
        inventory reserve tied to the CO&#8322; wind-down, plus other
        restructuring and impairment charges. Management says restructuring
        is substantially complete and expects minimal future charges.
      </p>
      <p style={paragraphStyle}>
        <strong>Third, new desalination product cycle.</strong> ERII launched
        the PX Q650 in March 2026 and said it already received its first
        commercial order. Management claims it has the lowest specific energy
        consumption of any energy recovery device on the market, while
        maintaining a 30-year design life and industry-leading uptime.
      </p>
    </div>
  );
}
