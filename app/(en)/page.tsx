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

const h3Style = {
  margin: "1.25em 0 0.5em 0",
  fontSize: "13pt",
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
        Based on the provided Q1 2026 earnings press release, SEC Form 10-Q,
        earnings call transcript, and the Oppenheimer Equity Research report,
        here is a comprehensive review of McGrath RentCorp&rsquo;s (NASDAQ:
        MGRC) first-quarter 2026 performance.
      </p>

      <h2 style={h2Style}>
        <strong>
          Executive Summary &amp; Overall Performance vs. Expectations
        </strong>
      </h2>
      <p style={paragraphStyle}>
        McGrath RentCorp delivered a solid start to 2026, successfully growing
        core rental revenues across all of its primary operating segments,
        offsetting a 13% decline in equipment sales revenues despite a
        challenging macroeconomic environment.
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Total Revenues:</strong> Increased 2% year-over-year (y/y) to
          $198.5 million. Rental operations revenues specifically grew 5% to
          $162.2 million.
        </li>
        <li style={liStyle}>
          <strong>Net Income &amp; EPS:</strong> Net income was $27.0 million
          ($1.10 per diluted share), down slightly from $28.2 million ($1.15
          per share) in Q1 2025.
        </li>
        <li style={liStyle}>
          <strong>Adjusted EBITDA:</strong> Came in at $74.1 million (-1% y/y).
        </li>
      </ul>
      <p style={paragraphStyle}>
        <strong>Relative to Expectations:</strong> McGrath performed very well
        against Wall Street estimates. Adjusted EBITDA of $74.1 million soundly
        beat Oppenheimer&rsquo;s estimate of $71.8 million and was just shy of
        the broader $74.6 million consensus. On the earnings call, Oppenheimer
        analyst Scott Schneeberger congratulated management, stating,{" "}
        <em>
          &ldquo;You beat us top to bottom, and I love that you grew all the
          segments in rental revenue.&rdquo;
        </em>{" "}
        Oppenheimer noted that the slight miss on the consensus EBITDA estimate
        was not concerning; it was driven by higher-than-expected operating
        expenses used to prepare the fleet for a solid upcoming seasonal build.
        As a result, Oppenheimer reaffirmed its &ldquo;Outperform&rdquo; rating
        and $143 price target, and McGrath confidently maintained its 2026
        full-year guidance.
      </p>

      <h2 style={h2Style}>
        <strong>Segment-by-Segment Deep Dive</strong>
      </h2>

      <h3 style={h3Style}>
        <strong>1. Mobile Modular (~2/3rds of EBITDA Mix)</strong>
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Revenues:</strong> Total revenues increased 2% y/y to $134.4
          million. Rental revenues grew 4% to $81.4 million,{" "}
          <strong>outperforming Oppenheimer&rsquo;s estimates</strong>. Sales
          revenues fell 7% to $20.9 million.
        </li>
        <li style={liStyle}>
          <strong>Adjusted EBITDA:</strong> Decreased slightly by 1% y/y to
          $47.2 million.
        </li>
        <li style={liStyle}>
          <strong>Performance Drivers:</strong> Growth was driven primarily by
          commercial customers (mega projects in government, manufacturing,
          healthcare, and data centers), while education demand remained steady
          compared to the prior year.
        </li>
        <li style={liStyle}>
          <strong>Pricing Power vs. Utilization:</strong> Average fleet
          utilization dropped to 70% (from 74.6% a year ago) as equipment
          returns slightly outpaced new shipments. However, the company
          successfully pushed pricing, with the average monthly revenue per
          unit on rent increasing by an impressive 7% y/y to $889. The trailing
          twelve-month (TTM) average for new shipments is even higher at
          $1,208, offering a positive pricing tailwind.
        </li>
        <li style={liStyle}>
          <strong>Margin Compression:</strong> Rental margins compressed to 56%
          (down from 60% in Q1 2025), largely due to a $3.2 million increase in
          inventory center costs required to prepare idle equipment to fulfill
          new shipments. Growth in &ldquo;Mobile Modular Plus&rdquo; (services
          and add-ons) and site-related services (+4% y/y) also helped offset
          lower unit utilization.
        </li>
      </ul>

      <h3 style={h3Style}>
        <strong>2. TRS-RenTelco (&lt;1/4th of EBITDA Mix)</strong>
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Revenues:</strong> Total revenues increased 11% y/y to $38.7
          million. Rental revenues surged 13% to $28.9 million.
        </li>
        <li style={liStyle}>
          <strong>Adjusted EBITDA:</strong> Increased 16% y/y to $20.9 million.
        </li>
        <li style={liStyle}>
          <strong>Performance Drivers:</strong> This segment was the undeniable
          standout performer of the quarter. It capitalized heavily on robust,
          broad-spectrum demand, acting as a direct beneficiary of the ongoing
          boom in <strong>new data center buildouts</strong>. Oppenheimer
          highlighted TRS-RenTelco as a &ldquo;primary driver&rdquo; that is
          poised to continue its momentum following three consecutive quarters
          of strong y/y growth.
        </li>
        <li style={liStyle}>
          <strong>Margin &amp; Utilization Dynamics:</strong> Unlike the other
          segments, TRS saw substantial margin expansion. Rental gross margins
          improved to 45% (from 40% a year ago) as depreciation expenses
          remained flat while revenues surged. Average utilization hit 66.1%,
          marking the highest first-quarter utilization for the segment since
          2021. Equipment sales margins also improved significantly to 55%
          (from 47% in Q1 2025).
        </li>
      </ul>

      <h3 style={h3Style}>
        <strong>3. Portable Storage (~1/10th of EBITDA Mix)</strong>
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Revenues:</strong> Total revenues increased 3% to $21.9
          million. Rental revenues eked out a 1% gain to $16.3 million.
        </li>
        <li style={liStyle}>
          <strong>Adjusted EBITDA:</strong> Decreased 17% y/y to $7.1 million.
        </li>
        <li style={liStyle}>
          <strong>Performance Drivers:</strong> Oppenheimer noted that posting
          a 1% rental revenue gain was an encouraging achievement, marking a
          third consecutive quarter of growth despite soft commercial
          construction project activity and subdued Architecture Billings Index
          (ABI) readings.
        </li>
        <li style={liStyle}>
          <strong>Margin Pressures:</strong> Profitability was heavily
          compressed. Rental margins fell to 80% (from 84% last year) due to
          higher equipment preparation costs. The segment also faced heightened
          competitive pricing pressures from smaller regional players on
          delivery and pickup services, which pushed rental-related services
          margins to a negative 20% (down from negative 8% in Q1 2025). SG&amp;A
          expenses rose 11% as the company deliberately invested in greater
          sales coverage to drive long-term utilization improvements across its
          branch network.
        </li>
      </ul>

      <h3 style={h3Style}>
        <strong>4. Enviroplex (Classroom Manufacturing)</strong>
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Revenues:</strong> Sales revenues plummeted 51% to $3.7
          million.
        </li>
        <li style={liStyle}>
          <strong>Adjusted EBITDA:</strong> Swung to a loss of $(1.1) million
          from a profit of $0.4 million in Q1 2025.
        </li>
        <li style={liStyle}>
          <strong>Performance Context:</strong> Management noted that Q1 2025
          was an exceptionally strong, anomalous quarter for Enviroplex,
          creating a very tough year-over-year comparable. 2026 performance is
          returning to a normalized cadence similar to 2024. Because Enviroplex
          relies on lumpy sales projects, starting the year with modest revenue
          and a slight Q1 loss before education shipments ramp up in the second
          half of the year is not historically uncommon.
        </li>
      </ul>

      <h2 style={h2Style}>
        <strong>Capital Allocation &amp; Strategic Updates</strong>
      </h2>
      <p style={paragraphStyle}>
        McGrath&rsquo;s balance sheet remains highly resilient, providing ample
        flexibility (leveraged at just 1.51x net debt-to-Adjusted EBITDA),
        which the company actively utilized in Q1:
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <strong>Surprise Share Repurchases:</strong> For the first time since
          the 2020 COVID era, McGrath was active in the stock market,
          repurchasing ~$11.9 million of its common stock (approx. 113,500
          shares at an average price of $104.44) in March. Management noted
          that their strong balance sheet allowed them to take advantage of
          attractive equity pricing.
        </li>
        <li style={liStyle}>
          <strong>Capital Expenditures &amp; M&amp;A:</strong> Gross rental
          equipment CapEx spiked to $44.9 million (compared to $11.5 million in
          Q1 2025), fueled by geographic expansion in Mobile Modular and
          aggressively funding the booming TRS-RenTelco data center demand. In
          addition, they closed an $11.4 million acquisition of a regional
          temporary modular space provider in the Midwest on April 1, 2026.
        </li>
        <li style={liStyle}>
          <strong>Maintained 2026 Guidance:</strong> Management reaffirmed
          their full-year guidance, expecting Total Revenue between $945
          million and $995 million, Adjusted EBITDA between $360 million and
          $378 million, and Gross CapEx between $180 million and $200 million.
        </li>
      </ul>
    </div>
  );
}
