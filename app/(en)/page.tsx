export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Welcome
      </h1>
      <p className="mt-6 text-foreground/80 leading-relaxed">
        This site is under construction.
      </p>

      {/* Macro Spotlight */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Macro Spotlight
        </h2>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Guggenheim Investments Expects Economic Fundamentals To Outweigh
          Geopolitical And Energy Market Volatility
        </h3>
        <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
          <p>
            The U.S. economy continues to demonstrate impressive resilience in
            the face of external shocks, as highlighted in Guggenheim
            Investment&apos;s recent Weekly Viewpoint. While the conflict with
            Iran and the effective closure of the Strait of Hormuz have driven
            oil prices up over 47%, sparking supply chain and inflation concerns,
            the broader economic impact is buffered by the steadily declining
            energy intensity of the U.S. economy. Core inflation remains
            well-behaved, rising just 2.5% year-over-year in February, while
            five-year forward inflation expectations are anchored near 2%. Labor
            and housing markets continue to show underlying strength, with
            existing home sales unexpectedly increasing and jobless claims
            remaining historically low. For infrastructure investors, the
            market&apos;s muscle memory suggests that geopolitical commodity
            shocks tend to be temporary, while the fundamental backdrop for real
            assets remains highly constructive.
          </p>
          <p>
            Guggenheim Investments maintains a positive 12-month outlook,
            expecting corporate earnings to grow at a double-digit pace this
            year. The Federal Reserve is anticipated to maintain an easing bias
            with at least one more rate cut expected, while fiscal policy from
            the One Big Beautiful Bill Act provides a vital tailwind for
            capital-intensive sectors.
          </p>
        </div>
      </section>

      {/* Sector Spotlight */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Sector Spotlight
        </h2>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Power And Renewables Deal Momentum Deepens As Sector Dominates North
          American Mega-Cap M&amp;A Activity
        </h3>
        <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Strategic dealmaking across the infrastructure landscape reached
            unprecedented concentration in early 2026. Building on a pronounced
            trend established throughout 2025, power and renewables transactions
            have completely eclipsed broader infrastructure M&amp;A activity. In
            the first quarter, of the eight North American infrastructure deals
            featuring a disclosed transaction value over $500 million, an
            overwhelming seven were explicitly focused on the power and
            renewables sector (see chart below). This intense concentration of
            capital reflects the critical reality that securing reliable,
            scalable generation capacity has become the ultimate prerequisite for
            both the ongoing energy transition and the parabolic power demands of
            the digital infrastructure boom. Investors are aggressively acquiring
            heavy-asset power platforms capable of delivering firm load.
          </p>
          <p>
            Guggenheim Securities recently held its annual Power, Energy &amp;
            Renewables Symposium. The firm&apos;s Energy, Power &amp; Energy
            Transition Investment Banking team partnered with leading industry
            sponsors to host the summit. The event, held in February in New York,
            convened developers, infrastructure funds, and utility operators for a
            day of interactive discussions focused on navigating the complexities
            of grid interconnections and accelerating asset valuations.
          </p>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="mt-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Product Spotlight
        </h2>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          LP Appetite Has Returned, But Infrastructure Fundraising Is Becoming A
          Barbell Market
        </h3>
        <div className="mt-6 space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Infrastructure has firmly established itself as the most resilient
            private market asset class, recently crossing $1.6 trillion in global
            AUM following a record $211 billion fundraising year in 2025.
            Propelled by massive secular mandates—including the $106 trillion
            needed globally by 2040 for decarbonization and digital
            buildouts—limited partners have decisively increased their
            infrastructure allocations. The fundraising landscape is currently
            defined by a flight to scale and a pursuit of operational alpha.
            Nearly three-quarters of all new capital flowed to the top 50
            mega-funds, while approximately 70% of raised funds targeted
            Core-Plus and Value-Added strategies. Investors are clearly willing
            to move up the risk curve to secure higher, inflation-protected
            yields, according to recent BCG data.
          </p>
          <p>
            The product pipeline into mid-2026 appears exceptionally strong,
            supported by innovative fund structures. To accommodate lengthening
            capital cycles and the complex operational requirements of
            value-added assets, open-ended funds now comprise roughly 10% of the
            market, while average hold periods have increased to 7.6 years.
            Smooth execution for upcoming vintages will depend on sponsors
            demonstrating clear margin-expansion capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
