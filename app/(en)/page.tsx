export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Investment Themes
        </h2>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Water Infrastructure
        </h3>

        <ol className="mt-8 list-decimal space-y-8 pl-5">
          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Aging infrastructure renewal is the base-case investment story.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Old pipes, treatment plants, storage, pumps, and sewer systems
              need major replacement and rehabilitation, creating long-duration
              capital demand.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Regulation is creating a capex supercycle.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              New water-quality rules around PFAS, lead service lines,
              wastewater treatment, and micropollutants are forcing utilities and
              municipalities to spend, which directly supports treatment,
              monitoring, and network-upgrade opportunities.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Climate resilience is becoming a central investment driver.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Droughts, floods, stormwater stress, and extreme weather are
              pushing investment toward flood protection, drainage, backup
              systems, interconnections, and broader adaptation infrastructure.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Water scarcity is shifting capital toward alternative supply.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Reuse, recycling, desalination, and diversified supply systems are
              increasingly attractive where water shortages are structural and
              offtake is reliable.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Bankability matters as much as physical need.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              The key question is not whether assets are needed, but whether
              capital can be recovered through tariffs, regulated returns,
              availability payments, subsidies, or long-term contracts. Public
              funding, blended finance, WIFIA/SRF-style support, and PPP/P3
              structures are therefore central.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Affordability and political risk are the main constraints.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Even essential projects can face delayed recovery if rate increases
              are politically difficult or socially unaffordable. This makes
              water a sector where regulatory design and stakeholder tolerance
              matter as much as engineering.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Operational efficiency and digitalization are major value-creation
              themes.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Reducing non-revenue water, upgrading metering, improving
              controls, cutting energy use, strengthening cybersecurity, and
              modernizing operations are seen as relatively high-return, often
              self-funding investments.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              Fragmentation creates M&amp;A and platform opportunities.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              Especially in markets with many small systems, investors may
              benefit from consolidation, outsourced operations,
              regionalization, and roll-up strategies.
            </p>
          </li>

          <li>
            <h4 className="text-lg font-semibold text-foreground">
              The opportunity set extends beyond utilities into enabling
              technologies and services.
            </h4>
            <p className="mt-2 text-foreground/80 leading-relaxed">
              The third response especially expands the lens to include smart
              water, infra-tech, industrial water services, Water-as-a-Service
              models, and resource recovery from wastewater.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
