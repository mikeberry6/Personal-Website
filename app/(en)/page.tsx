const containerStyle = {
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "4rem 1.5rem",
  fontFamily: "Calibri, 'Segoe UI', Arial, sans-serif",
  fontSize: "11pt",
  lineHeight: 1.5,
  color: "#0b1020",
} as const;

const h2Style = {
  margin: "1.5em 0 0.5em 0",
  fontSize: "16pt",
} as const;

const yearHeaderStyle = {
  margin: "1em 0 0.25em 0",
  fontSize: "12pt",
} as const;

const paragraphStyle = {
  margin: "0 0 0.75em 0",
} as const;

const ulStyle = {
  listStyleType: "disc",
  margin: "0 0 0.75em 1.5em",
  padding: 0,
} as const;

const liStyle = {
  margin: "0 0 0.25em 0",
} as const;

export default function HomePage() {
  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        To calculate the average cash tax rate, we divide the{" "}
        <strong>actual cash paid for income taxes</strong> by the{" "}
        <strong>pre-tax income</strong> the company generated.
      </p>
      <p style={paragraphStyle}>
        Over the last three full years (2023, 2024, and 2025), McGrath&rsquo;s{" "}
        <strong>average operating cash tax rate was 10.8%</strong>.
      </p>
      <p style={paragraphStyle}>
        Looking at just the 3-year average hides a few massive one-time events
        that heavily distorted the numbers. To give you a clear picture, here
        is the exact year-by-year breakdown using data straight from their
        financial statements:
      </p>

      <h2 style={h2Style}>
        <strong>Year-by-Year Breakdown (2023&ndash;2025)</strong>
      </h2>

      <p style={yearHeaderStyle}>
        <strong>2025</strong>
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Pre-Tax Income:</strong> $213.1 million
        </li>
        <li style={liStyle}>
          <strong>Cash Taxes Paid:</strong> $10.1 million
        </li>
        <li style={liStyle}>
          <strong>Cash Tax Rate: 4.7%</strong>
        </li>
        <li style={liStyle}>
          <em>What happened:</em> This represents a standard year for McGrath.
          Because they purchased a large amount of new rental equipment, they
          were able to use accelerated depreciation to take massive tax
          deductions upfront on their tax returns. This lowered their taxable
          income, resulting in a very low cash tax payment.
        </li>
      </ul>

      <p style={yearHeaderStyle}>
        <strong>2024</strong>
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Pre-Tax Income:</strong> $313.6 million
        </li>
        <li style={liStyle}>
          <strong>Cash Taxes Paid:</strong> $36.5 million
        </li>
        <li style={liStyle}>
          <strong>Cash Tax Rate: 11.6%</strong>
        </li>
        <li style={liStyle}>
          <em>What happened:</em> In 2024, McGrath received a $180 million cash
          breakup fee because a planned merger with a company called WillScot
          Mobile Mini was canceled. This cash dramatically increased their
          pre-tax income for the year and forced them to pay higher cash
          taxes, since breakup fees do not benefit from equipment depreciation
          deductions.
        </li>
      </ul>

      <p style={yearHeaderStyle}>
        <strong>2023 (Adjusted for Business Sale)</strong>
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Pre-Tax Income (Continuing Operations):</strong> $149.5
          million
        </li>
        <li style={liStyle}>
          <strong>Operating Cash Taxes Paid:</strong> $26.3 million
        </li>
        <li style={liStyle}>
          <strong>Adjusted Cash Tax Rate: 17.6%</strong>
        </li>
        <li style={liStyle}>
          <em>What happened:</em> In 2023, McGrath sold off an entire division
          of its company (Adler Tanks) for $268 million. Selling a business
          triggers a large, unavoidable cash tax bill. McGrath&rsquo;s total
          cash taxes paid to the government that year was $91.6 million.
          However, their cash flow statement shows that $65.3 million of that
          was solely due to the sale of Adler Tanks. If we remove that
          one-time business sale to look strictly at their normal daily
          operations, they paid $26.3 million in cash taxes on $149.5 million
          in pre-tax income.
        </li>
      </ul>

      <h2 style={h2Style}>
        <strong>The 3-Year Average</strong>
      </h2>
      <p style={paragraphStyle}>
        If you combine their standard operations over the last three years
        (removing the taxes paid for selling the Adler Tanks business),
        McGrath generated <strong>$676.2 million</strong> in pre-tax operating
        income and paid <strong>$72.9 million</strong> in cash taxes.
      </p>
      <p style={paragraphStyle}>
        This results in an{" "}
        <strong>average operational cash tax rate of 10.8%</strong> over the
        last 3 years. This is roughly half of the standard 21% U.S. federal
        corporate tax rate, which is almost entirely due to the upfront tax
        deductions they take for buying rental equipment.
      </p>
    </div>
  );
}
