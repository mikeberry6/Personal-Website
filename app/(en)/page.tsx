export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Alaska LNG Project Overview */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
          Project Overview
        </h2>
        <h3 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          Alaska LNG
        </h3>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            Corporate Structure &amp; Strategy
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Glenfarne Group acquired a 75% lead developer stake (March 2025),
              reducing state-owned AGDC to a 25% minority share to eliminate
              taxpayer risk while preserving state financial upside.
            </li>
            <li>
              Execution is split into two financially independent phases: Phase
              One builds the domestic pipeline, and Phase Two funds the coastal
              export terminal.
            </li>
            <li>
              Strategic partnerships de-risk execution, utilizing Worley for
              Phase One EPCM and Baker Hughes as a strategic investor and
              primary equipment supplier.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            Scale &amp; Design
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Statewide footprint integrates a North Slope gas treatment plant,
              an 807-mile 42-inch pipeline, and a 20 MTPA liquefaction/export
              terminal in Nikiski.
            </li>
            <li>
              3.5 Bcf/d system capacity unlocks stranded Prudhoe Bay and Point
              Thomson reserves for both domestic grids and global markets.
            </li>
            <li>
              Phase One requires ~700,000 metric tonnes of API 5L X70 steel line
              pipe, backed by preliminary supply agreements with manufacturers
              like POSCO.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            Commercial Offtakes
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Phase Two bankability requires 16 MTPA pre-sold capacity, with 13
              MTPA already secured via TotalEnergies (20-year/2 MTPA) and Asian
              buyers (JERA, Tokyo Gas, POSCO).
            </li>
            <li>
              As the only federally authorized U.S. West Coast export terminal,
              the project offers a 7-9 day direct shipping route to Asia,
              bypassing Panama Canal congestion.
            </li>
            <li>
              Domestic baseline is anchored by gas supply agreements with North
              Slope producers (ExxonMobil, Hilcorp) and a 30-year preliminary
              supply LOI with ENSTAR.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            Project Timeline
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80 leading-relaxed">
            <li>
              Fully permitted and shovel-ready with an approved FEIS, FERC
              authorizations, and DOE export licenses.
            </li>
            <li>
              Phase One pipeline execution began January 2026, targeting
              mid-2026 site prep, 2028 mechanical completion, and first domestic
              delivery by 2029.
            </li>
            <li>
              Phase Two FID is targeted for late 2026 to enable full commercial
              LNG exports by the early 2030s.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-foreground">
            Sustainability Commitments
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/80 leading-relaxed">
            <li>
              North Slope gas treatment plant integrates CCS to strip and safely
              reinject ~7 million tons of CO2 annually prior to pipeline
              transit.
            </li>
            <li>
              Geographic proximity to Asia drastically reduces maritime shipping
              distances and GHG emissions, ranking the project among the
              lowest-carbon global LNG exports (per DOE).
            </li>
            <li>
              Domestic delivery displaces high-emission winter fuels (coal,
              wood, diesel) in interior Alaska, reducing particulate pollution
              and improving public health.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
