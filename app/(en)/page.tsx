type Bullet = {
  title: string;
  body: string;
};

type Section = {
  heading: string;
  bullets: Bullet[];
};

const sections: Section[] = [
  {
    heading: "Air France-KLM",
    bullets: [
      {
        title: "A Dual-Track Monetization Playbook",
        body: "Air France-KLM actively manages its balance sheet using two distinct levers: outright divestitures of capital-intensive, non-core ground services, and highly innovative structured financings backed by cash-generative core assets.",
      },
      {
        title: 'Pioneering "Quasi-Equity" Capital Solutions',
        body: "Rather than diluting parent equity or issuing traditional debt during the post-pandemic recovery, the Group partnered with Apollo Global Management to unlock €2.5 billion in value hidden within its core operations (Flying Blue, MRO, spare engines).",
      },
      {
        title: "Ring-Fencing Without Losing Control",
        body: "The genius of the Apollo structured financings is that Air France-KLM ring-fenced the cash flows of specific assets into ad-hoc affiliates, securing IFRS equity treatment to pay down state-backed debt, all while maintaining absolute operational control and majority ownership.",
      },
      {
        title: 'Transitioning to an "Asset-Light" Ground Model',
        body: "By divesting heavy, labor-intensive ancillary subsidiaries—such as Servair, KLM Catering, and KLM Equipment Services—to specialized global operators, the airline converts massive fixed capital expenditure requirements into predictable, variable operating costs.",
      },
      {
        title: "Aggressive Intangible Asset Management",
        body: "Air France-KLM treats its heritage slot portfolio as a highly liquid financial asset, proving a willingness to divest underutilized slots at premium, constrained airports (e.g., the record $75M Heathrow sale) to immediately redeploy capital into high-ROI fleet modernization.",
      },
    ],
  },
  {
    heading: "Dow",
    bullets: [
      {
        title: 'Pioneering an "Infrastructure-as-a-Service" Model',
        body: 'Dow has systematically reviewed its massive global footprint to separate core chemical manufacturing from "non-product-producing" infrastructure (rail networks, marine terminals, site utilities). By transferring these assets to specialized operators, Dow improves site efficiency while stripping out capital intensity.',
      },
      {
        title: "Creative Deal Structuring & Retained Control",
        body: "Dow does not employ a blind liquidation strategy. For its most critical utility nodes—like the $2.4B+ U.S. Gulf Coast transaction with Macquarie—Dow utilized a minority-stake JV structure. This harvested immense upfront cash while allowing Dow to retain a 60% majority stake and strict operational control.",
      },
      {
        title: "Securing Supply Chain Continuity",
        body: "For outright divestitures (such as Watco and Vopak), Dow secured long-term service agreements simultaneously with the sale. This de-risks the transaction and guarantees Dow seamless access to essential logistics without tying up its own balance sheet.",
      },
      {
        title: "Accretive Valuation Arbitrage",
        body: "By carving out and monetizing these logistical and utility assets, Dow captures premium infrastructure market valuations, securing exceptionally cheap capital compared to its blended corporate multiple.",
      },
      {
        title: 'Self-Funding "Decarbonize & Grow"',
        body: "The multi-billion-dollar proceeds from these systemic carve-outs have been purposefully redirected to protect Dow's investment-grade balance sheet and self-fund high-return core growth initiatives.",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="space-y-14">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              {section.heading}
            </h2>
            <ul className="space-y-5">
              {section.bullets.map((bullet) => (
                <li key={bullet.title} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="text-muted">
                    •
                  </span>
                  <p className="text-foreground">
                    <span className="font-semibold">{bullet.title}:</span>{" "}
                    <span className="text-muted">{bullet.body}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
