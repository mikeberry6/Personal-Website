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
    name: "3i Group",
    entries: [
      { name: "Regional Rail, LLC", year: "2019", description: "Short-line freight railroads" },
      { name: "Smarte Carte International Holdings, Inc.", year: "2017", description: "Passenger services equipment and concessions" },
    ],
  },
  {
    name: "Antin Infrastructure Partners",
    entries: [
      { name: "FirstLight Fiber", year: "2018", description: "Fiber network operator" },
      { name: "Vicinity Energy", year: "2019", description: "District energy systems" },
    ],
  },
  {
    name: "Apollo Global Management",
    entries: [
      { name: "Arthur Kill Terminal", year: "2021", description: "Offshore wind port infrastructure" },
      { name: "Broad Reach Power", year: "2021", description: "Renewable and storage development platform" },
      { name: "Caledonia Generating LLC", year: "2018", description: "Gas-fired power generation" },
      { name: "FirstDigital Telecom, LLC", year: "2021", description: "Fiber-based business telecommunications network" },
      { name: "Great Bay Renewables", year: "2020", description: "Renewable energy royalties and project finance" },
      { name: "IonicBlue", year: "2021", description: "Energy-as-a-Service" },
      { name: "NextEra Energy Partners 2.5 GW JV", year: "2021", description: "Utility-Scale Renewables Portfolio" },
      { name: "US Wind", year: "2020", description: "Offshore Wind" },
    ],
  },
  {
    name: "ArcLight Capital Partners",
    entries: [
      { name: "Catalyst Old River Hydroelectric", year: "2011", description: "Hydroelectric Generation" },
      { name: "Eastern Generation", year: "2015", description: "Gas-Fired Power Generation" },
      { name: "Generation Bridge", year: "2021", description: "Gas-Fired Power Generation" },
      { name: "Infinigen Renewables", year: "2021", description: "Solar & Battery Storage" },
      { name: "Inspiration Mobility Group", year: "2021", description: "EV Fleet Charging Infrastructure" },
      { name: "Natural Gas Pipeline Co. of America", year: "2021", description: "Natural Gas Transmission & Storage" },
    ],
  },
  {
    name: "Ardian",
    entries: [
      { name: "Dauntless Energy", year: "2018", description: "Renewable and flexible generation platform" },
      { name: "Maple Leaf", year: "2020", description: "Battery energy storage" },
      { name: "Unison Site Management", year: "2021", description: "Wireless infrastructure ground leases" },
    ],
  },
  {
    name: "Ares Management",
    entries: [
      { name: "Apex Clean Energy", year: "2021", description: "Utility-scale renewable energy development" },
      { name: "Birdsboro Power LLC", year: "2017", description: "Natural gas-fired generation" },
      { name: "Northampton Generating Company L.P.", year: "2015", description: "Waste coal-fired generation" },
      { name: "RENEW Energy Partners", year: "2020", description: "Energy efficiency and energy-as-a-service" },
      { name: "Spruance Operating Services LLC", year: "2015", description: "Natural gas-fired generation" },
    ],
  },
  {
    name: "Argo Infrastructure Partners",
    entries: [
      { name: "Astro Solar portfolio", year: "2021", description: "Commercial and industrial distributed solar" },
      { name: "Bayonne water and wastewater concession", year: "2017", description: "Water and wastewater concession" },
      { name: "Black Hills Colorado IPP", year: "2016", description: "Natural gas-fired generation" },
      { name: "Carville Energy Center", year: "2019", description: "Natural gas-fired generation" },
      { name: "Cross-Sound Cable Company, LLC", year: "2015", description: "Merchant electric transmission interconnector" },
      { name: "Duquesne Light Company", year: "2017", description: "Regulated electric distribution utility" },
      { name: "Hudson Transmission Project", year: "2019", description: "Merchant electric transmission interconnector" },
      { name: "LAZ Parking", year: "2021", description: "Parking Management & Mobility" },
      { name: "Middletown Water Joint Venture LLC", year: "2017", description: "Water and wastewater concession" },
      { name: "Mobile Energy LLC", year: "2021", description: "Natural gas-fired generation" },
      { name: "Oneta Energy Center", year: "2019", description: "Gas-Fired Power Generation" },
      { name: "Oneta Power", year: "2019", description: "Natural gas-fired generation" },
      { name: "Pearl / Ruby solar portfolio", year: "2019", description: "Commercial and industrial solar portfolio" },
      { name: "Pueblo Airport Generating Station", year: "2016", description: "Gas-Fired Power Generation" },
      { name: "Thule Energy Storage", year: "2018", description: "Behind-the-meter thermal energy storage" },
      { name: "US Water Systems", year: "2017", description: "Water & Wastewater Concessions" },
    ],
  },
  {
    name: "Astatine Investment Partners",
    entries: [
      { name: "BTR", year: "2021", description: "Waste Fleet Rental" },
      { name: "Maurepas Pipeline", year: "2018", description: "Natural Gas Pipeline" },
      { name: "PECO Pallet", year: "2020", description: "Pallet Pooling and Logistics" },
    ],
  },
  {
    name: "Basalt Infrastructure Partners",
    entries: [
      { name: "Habitat Solar", year: "2020", description: "Residential solar" },
      { name: "Helios Power", year: "2019", description: "Distributed solar" },
      { name: "Xpress Natural Gas", year: "2021", description: "Virtual pipeline and compressed natural gas logistics" },
    ],
  },
  {
    name: "Bernhard Capital Partners",
    entries: [
      { name: "ClearCurrent", year: "2021", description: "Water and wastewater utility services" },
      { name: "National Water Infrastructure", year: "2020", description: "Wastewater utility" },
    ],
  },
  {
    name: "BlackRock",
    entries: [
      { name: "Electrada", year: "2021", description: "EV fleet charging infrastructure" },
      { name: "National Renewable Solutions", year: "2021", description: "Renewable project development" },
      { name: "Vopak Industrial Infrastructure Americas", year: "2020", description: "Industrial terminals and storage" },
    ],
  },
  {
    name: "Blackstone",
    entries: [
      { name: "Atlantic Power Transmission LLC", year: "2021", description: "Offshore transmission development" },
      { name: "Aypa Power", year: "2020", description: "Battery energy storage" },
      { name: "Cheniere Energy Partners, L.P.", year: "2020", description: "LNG export" },
      { name: "Kindle Energy", year: "2015", description: "Power generation development and asset management" },
      { name: "Kinetik Holdings Inc.", year: "2017", description: "Gas gathering, processing and transportation" },
      { name: "Legence", year: "2020", description: "Building systems engineering and energy services" },
      { name: "Magnolia Power Generating Station", year: "2021", description: "Gas-fired generation" },
      { name: "Onyx Renewables", year: "2014", description: "Commercial and industrial solar and storage" },
      { name: "QTS Data Centers", year: "2021", description: "Hyperscale and wholesale data centers" },
      { name: "Sabre Industries", year: "2021", description: "Transmission, telecom and data center infrastructure components" },
      { name: "Transmission Developers Inc. / Champlain Hudson Power Express", year: "2010", description: "HVDC transmission development" },
    ],
  },
  {
    name: "Brookfield Asset Management",
    entries: [
      { name: "Cove Point LNG, LP", year: "2019", description: "LNG terminal" },
      { name: "Enercare Inc.", year: "2018", description: "Residential energy infrastructure and home services" },
      { name: "Evolugen", year: "1999", description: "Renewable power generation" },
      { name: "Holtwood and Safe Harbor Hydroelectric Facilities", year: "2014", description: "Hydroelectric generation" },
      { name: "Inter Pipeline Ltd.", year: "2021", description: "Diversified midstream pipelines, processing, and storage" },
      { name: "Metergy Solutions", year: "2018", description: "Utility submetering and billing services" },
      { name: "NorthRiver Midstream Inc.", year: "2018", description: "Natural gas gathering and processing" },
      { name: "Rockpoint Gas Storage", year: "2016", description: "Natural gas storage" },
      { name: "Service Experts", year: "2018", description: "Residential HVAC, plumbing, and electrical services" },
      { name: "Smoky Mountain Hydroelectric Facilities", year: "2012", description: "Hydroelectric generation" },
      { name: "TerraForm Power", year: "2017", description: "Renewable power owner and operator" },
    ],
  },
  {
    name: "Carlyle Infrastructure",
    entries: [
      { name: "Acadia Renewable Energy", year: "2020", description: "Solar and battery storage development" },
      { name: "AlphaStruxure", year: "2019", description: "Microgrids and energy-as-a-service" },
      { name: "Amp Energy", year: "2021", description: "Solar, storage, and renewable energy platform" },
      { name: "CAG Holdings / The New Terminal One at JFK", year: "2019", description: "Airport terminal public-private partnership" },
      { name: "Cardinal Renewables", year: "2020", description: "Utility-scale solar development platform" },
      { name: "Copia Power", year: "2021", description: "Utility-scale solar, storage, and power development" },
      { name: "Crescent Midstream", year: "2019", description: "Crude oil midstream and carbon capture infrastructure" },
      { name: "Wyyerd Fiber", year: "2021", description: "Fiber-to-the-premise broadband" },
    ],
  },
  {
    name: "CIM Group",
    entries: [
      { name: "400 Paul Avenue Data Center", year: "2017", description: "Hyperscale and wholesale data centers" },
      { name: "Antelope Valley Water Bank", year: "2007", description: "Water banking and groundwater storage" },
      { name: "Kelso Valley Wind, Solar & Water", year: "2008", description: "Renewable generation and water infrastructure" },
      { name: "Novva Data Centers", year: "2020", description: "Wholesale and colocation data centers" },
      { name: "Pine Street Garage", year: "2018", description: "Urban parking infrastructure" },
      { name: "Sixth Avenue Garage", year: "2019", description: "Urban parking infrastructure" },
      { name: "Westlands Solar Park (incl. Aquamarine Solar)", year: "2014", description: "Utility-scale solar and battery storage" },
    ],
  },
  {
    name: "Copenhagen Infrastructure Partners",
    entries: [
      { name: "Energy Storage", year: "2020", description: "Battery and long-duration energy storage portfolio" },
      { name: "Fighting Jays Solar", year: "2020", description: "Solar PV" },
      { name: "Goldendale Energy Storage", year: "2020", description: "Pumped hydro storage" },
      { name: "Greasewood Solar", year: "2018", description: "Solar PV" },
      { name: "Misae Solar Park", year: "2018", description: "Solar PV" },
      { name: "Panther Grove Wind", year: "2019", description: "Onshore wind" },
      { name: "Sage Solar PV Park", year: "2017", description: "Solar PV" },
      { name: "Swan Lake North Pumped Storage Project", year: "2020", description: "Pumped hydro storage" },
      { name: "Vineyard Northeast", year: "2019", description: "Offshore wind development" },
      { name: "Vineyard Wind 1", year: "2016", description: "Offshore wind" },
    ],
  },
  {
    name: "CVC DIF",
    entries: [
      { name: "Bernhard, LLC", year: "2021", description: "Energy-as-a-service and building infrastructure" },
      { name: "BluEarth Renewables", year: "2019", description: "Wind, hydro, and solar independent power producer" },
      { name: "Brahms Wind", year: "2019", description: "Onshore wind" },
      { name: "Canadian Hills Wind", year: "2017", description: "Onshore wind" },
      { name: "Cascade Power Project", year: "2020", description: "Natural Gas Power Generation" },
      { name: "ENFRA", year: "2021", description: "Energy solutions and building infrastructure services" },
      { name: "Idaho Wind Partners", year: "2019", description: "Onshore wind" },
      { name: "Joink, LLC", year: "2021", description: "Fiber and fixed wireless broadband" },
      { name: "Kingfisher Wind", year: "2021", description: "Onshore wind" },
      { name: "PERENfra Water Joint Venture", year: "2021", description: "Water and wastewater utility development" },
      { name: "Valley Fiber Ltd.", year: "2020", description: "Rural fiber broadband" },
    ],
  },
  {
    name: "DigitalBridge",
    entries: [
      { name: "Aptum Technologies", year: "2019", description: "Data centers, cloud, and managed infrastructure" },
      { name: "Beanfield Metroconnect", year: "2019", description: "Metro fiber networks" },
      { name: "Boingo Wireless", year: "2021", description: "Wi-Fi / DAS / neutral-host networks" },
      { name: "ConGlobal", year: "2017", description: "Intermodal terminals and container depots" },
      { name: "Expedient", year: "2019", description: "Data centers and managed cloud infrastructure" },
      { name: "Millennium Garages", year: "2016", description: "Urban parking concession" },
      { name: "Vantage Data Centers", year: "2017", description: "Hyperscale data centers" },
      { name: "Vantage SDC", year: "2020", description: "Stabilized hyperscale data centers" },
    ],
  },
  {
    name: "ECP",
    entries: [
      { name: "Convergent Energy and Power", year: "2019", description: "Battery storage and distributed energy infrastructure" },
      { name: "Gopher Resource, LLC", year: "2018", description: "Lead-acid battery recycling" },
      { name: "Next Wave Energy Partners, LP", year: "2015", description: "Alkylate production, processing, and fuels logistics" },
      { name: "Pivot Energy", year: "2021", description: "Distributed and community solar and storage" },
      { name: "USD Group LLC", year: "2014", description: "Multi-modal energy logistics terminals and infrastructure" },
    ],
  },
  {
    name: "EIC",
    entries: [
      { name: "Captis Energy", year: "2021", description: "Landfill-gas-to-energy" },
      { name: "Desert Sky Energy", year: "2017", description: "Utility-scale wind and solar generation" },
      { name: "West Coast Hydro", year: "2012", description: "Run-of-river hydroelectric generation" },
    ],
  },
  {
    name: "EIG Global Energy Partners",
    entries: [
      { name: "ARB Midstream", year: "2017", description: "Crude oil and NGL logistics" },
      { name: "Aurora Sustainable Lands", year: "2021", description: "Forest carbon and sustainable land management" },
      { name: "Blue Racer Midstream, LLC", year: "2019", description: "Natural gas gathering, processing, and fractionation" },
      { name: "Midship Pipeline Company, LLC", year: "2019", description: "Natural gas transmission pipeline" },
    ],
  },
  {
    name: "EIP",
    entries: [
      { name: "BayWa r.e. AG", year: "2021", description: "Renewable energy development, IPP, asset operations, and energy trading" },
    ],
  },
  {
    name: "Ember Infrastructure",
    entries: [
      { name: "Caban Systems, Inc.", year: "2021", description: "Telecom energy storage and energy-as-a-service" },
      { name: "ReGenerate Energy Holdings, LLC", year: "2021", description: "Biomass power and sustainable products" },
      { name: "SunShare, LLC", year: "2021", description: "Community solar" },
    ],
  },
  {
    name: "EnCap Investments",
    entries: [
      { name: "Arbor Renewable Gas", year: "2021", description: "Biomass-to-renewable fuels" },
      { name: "Edgewater Midstream", year: "2020", description: "Crude oil and refined products storage, transportation, and terminalling" },
      { name: "Greenfield Midstream", year: "2017", description: "Crude oil gathering, storage, and transportation" },
      { name: "SolarProponent", year: "2020", description: "Utility-scale solar development and project origination" },
    ],
  },
  {
    name: "EQT Infrastructure",
    entries: [
      { name: "Cypress Creek Renewables", year: "2021", description: "Solar and storage independent power producer" },
      { name: "EdgeConneX", year: "2020", description: "Data centers" },
      { name: "First Student", year: "2021", description: "Student transportation" },
      { name: "Osmose Utilities Services, Inc.", year: "2019", description: "Grid inspection, maintenance, and restoration" },
      { name: "Zayo Group Holdings, Inc.", year: "2020", description: "Fiber networks and bandwidth infrastructure" },
    ],
  },
  {
    name: "Equitix",
    entries: [
      { name: "Boston AFC 2.0 OpCo", year: "2021", description: "Transit fare collection systems" },
      { name: "Denver Transit Partners", year: "2021", description: "Commuter rail PPP" },
      { name: "I-4 Mobility Partners", year: "2021", description: "Availability-based highway PPP" },
      { name: "I-77 Mobility Partners", year: "2021", description: "Managed lanes toll concession" },
      { name: "Live Oak Wind Farm", year: "2021", description: "Onshore wind generation" },
      { name: "Mobilinx", year: "2021", description: "Light rail transit PPP" },
      { name: "North Carolina Solar", year: "2021", description: "Utility-scale solar generation portfolio" },
      { name: "Oakland Corridor Partners", year: "2021", description: "Availability-based highway PPP" },
    ],
  },
  {
    name: "Fengate Asset Management",
    entries: [
      { name: "Amadeus Wind Project", year: "2020", description: "Onshore wind generation" },
      { name: "Central Utility Block (Heartland Petrochemical Complex)", year: "2018", description: "Industrial cogeneration and utility supply" },
      { name: "Edmonton Valley Line LRT Southeast", year: "2016", description: "Light rail transit PPP" },
      { name: "eStruxture Data Centers", year: "2017", description: "Data centers" },
      { name: "Fort St. James Green Energy Project", year: "2013", description: "Biomass power generation" },
      { name: "Freeport Energy Center", year: "2020", description: "Industrial cogeneration" },
      { name: "JFK Terminal 6 Redevelopment", year: "2020", description: "Airport terminal concession" },
      { name: "Merritt Biomass Plant", year: "2014", description: "Biomass-fired power generation" },
      { name: "PowerFin Partners Texas Solar Portfolio", year: "2018", description: "Operating solar portfolio" },
      { name: "Sunningdale Solar Project", year: "2014", description: "Solar photovoltaic" },
      { name: "TowerCom", year: "2020", description: "Wireless communications towers" },
    ],
  },
  {
    name: "GCM",
    entries: [
      { name: "Arctic Cold", year: "2019", description: "Temperature-controlled warehousing and cold-chain logistics" },
      { name: "Vantage Data Centers North America", year: "2020", description: "Hyperscale and wholesale data centers" },
    ],
  },
  {
    name: "Global Infrastructure Partners",
    entries: [
      { name: "Clearway Energy Group", year: "2018", description: "Utility-scale renewable power and storage" },
      { name: "Eolian", year: "2020", description: "Renewable project development and battery storage" },
      { name: "Saavi Energía", year: "2021", description: "Gas-fired generation and gas infrastructure" },
    ],
  },
  {
    name: "Goldman Sachs Asset Management",
    entries: [
      { name: "Avports", year: "2018", description: "Airport operations and management" },
      { name: "Synagro Technologies", year: "2020", description: "Biosolids processing and resource recovery" },
    ],
  },
  {
    name: "Grain",
    entries: [
      { name: "AWS-1 A-Block License", year: "2013", description: "Wireless spectrum license" },
      { name: "Cincinnati Bell Wireless spectrum licenses", year: "2014", description: "Wireless spectrum portfolio" },
      { name: "Great Plains Communications", year: "2018", description: "Regional fiber broadband and enterprise connectivity" },
      { name: "Network Wireless Solutions", year: "2021", description: "Telecom distribution and field services" },
      { name: "NewLevel", year: "2017", description: "Low-band wireless spectrum licenses" },
      { name: "NewLevel II, L.P.", year: "2021", description: "Licensed wireless spectrum (C-band)" },
      { name: "Ritter Communications", year: "2019", description: "Regional fiber broadband and business telecom" },
      { name: "Summit Broadband", year: "2020", description: "Fiber broadband and transport services" },
    ],
  },
  {
    name: "H.I.G. Capital",
    entries: [
      { name: "North America Central School Bus", year: "2021", description: "School bus transportation" },
    ],
  },
  {
    name: "Harbert Management Corp (Harbert Infra / Gulf Pacific)",
    entries: [
      { name: "AL Sandersville Holdings", year: "2021", description: "Gas-fired peaking generation" },
      { name: "Caney River Wind", year: "2017", description: "Onshore wind generation" },
      { name: "Chisholm View Wind", year: "2019", description: "Onshore wind generation" },
      { name: "Desert Sunlight", year: "2016", description: "Utility-scale solar generation" },
      { name: "Generate Capital", year: "2021", description: "Sustainable infrastructure investment and operations" },
      { name: "Goodwell Wind", year: "2019", description: "Onshore wind generation" },
      { name: "Northern Star Generation", year: "2014", description: "Thermal power generation portfolio" },
      { name: "Origin Wind", year: "2019", description: "Onshore wind generation" },
      { name: "Prairie Rose Wind", year: "2019", description: "Onshore wind generation" },
      { name: "Rocky Ridge Wind", year: "2017", description: "Onshore wind generation" },
      { name: "St. Lawrence Wind", year: "2019", description: "Onshore wind generation" },
      { name: "Washington County Power", year: "2018", description: "Gas-fired peaking generation" },
    ],
  },
  {
    name: "I Squared Capital",
    entries: [
      { name: "Atlantic Power & Utilities", year: "2021", description: "Power generation portfolio" },
      { name: "Ezee Fiber", year: "2021", description: "Fiber-to-the-home broadband" },
      { name: "FlexiVan", year: "2020", description: "Intermodal chassis leasing" },
      { name: "GridPoint", year: "2021", description: "Distributed energy management software and controls" },
      { name: "HTEC", year: "2021", description: "Hydrogen production and fueling infrastructure" },
      { name: "KIO Networks", year: "2021", description: "Data centers and digital infrastructure services" },
    ],
  },
  {
    name: "iCON Infrastructure",
    entries: [
      { name: "Capstone Infrastructure Corporation", year: "2016", description: "Renewable and low-carbon power generation" },
      { name: "Iowa Interstate Railroad, Ltd.", year: "2020", description: "Regional freight railroad" },
      { name: "TruVista Communications", year: "2019", description: "Rural fiber broadband and telecom services" },
      { name: "Vista Services", year: "2018", description: "Residential equipment leasing for HVAC, water, and home electrification equipment" },
    ],
  },
  {
    name: "Igneo Infrastructure Partners",
    entries: [
      { name: "Patriot Rail", year: "2019", description: "Short line freight railroads" },
      { name: "Terra-Gen", year: "2020", description: "Utility-scale wind, solar, and battery storage" },
    ],
  },
  {
    name: "InfraRed Capital Partners",
    entries: [
      { name: "Fullmark Energy", year: "2018", description: "Battery energy storage development and operation" },
      { name: "Hawtree Solar Project", year: "2021", description: "Utility-scale solar generation" },
      { name: "Iron Star Wind Project", year: "2021", description: "Onshore wind generation" },
      { name: "Kicking Horse Canyon", year: "2010", description: "Highway concession" },
      { name: "Northwest Anthony Henday Ring Road", year: "2010", description: "Availability-based road PPP" },
      { name: "Portsmouth Gateway Group", year: "2015", description: "Availability-based road PPP" },
      { name: "Priddy Wind Project", year: "2021", description: "Onshore wind generation" },
    ],
  },
  {
    name: "Instar",
    entries: [
      { name: "AMPORTS, Inc.", year: "2018", description: "Automotive port logistics and processing" },
      { name: "Creative Energy", year: "2018", description: "District energy systems" },
      { name: "JET Infrastructure", year: "2018", description: "Aviation fuel storage and pipeline infrastructure" },
      { name: "LS Networks", year: "2021", description: "Middle-mile fiber and tower backhaul" },
      { name: "Pilot Water Solutions", year: "2019", description: "Produced water gathering, transportation, and disposal" },
      { name: "Skyservice Business Aviation Inc.", year: "2017", description: "Fixed-base operations, aircraft management, and MRO" },
      { name: "Skyservice US (formerly Leading Edge Jet Center)", year: "2019", description: "Fixed-base operations and business aviation services" },
      { name: "Steel Reef Infrastructure Corp.", year: "2016", description: "Associated gas capture and processing infrastructure" },
    ],
  },
  {
    name: "KKR",
    entries: [
      { name: "Altavair, L.P. / Altitude Aircraft Leasing", year: "2018", description: "Aircraft leasing" },
      { name: "Atlantic Aviation", year: "2021", description: "Fixed-base operator network" },
      { name: "Coastal GasLink Pipeline Project", year: "2020", description: "Natural gas transmission pipeline" },
      { name: "Monterra Energy", year: "2015", description: "Natural gas transportation and distribution" },
      { name: "Neon Renewables", year: "2020", description: "Contracted wind and solar generation portfolio" },
      { name: "Nitrogen Renewables", year: "2019", description: "Wind and solar portfolio joint venture" },
      { name: "Sol Systems", year: "2021", description: "Solar development, ownership, and energy-market services" },
    ],
  },
  {
    name: "Macquarie Asset Management",
    entries: [
      { name: "altafiber", year: "2021", description: "Incumbent fiber broadband and telecom network" },
      { name: "Bluebird Fiber", year: "2019", description: "Regional fiber network" },
      { name: "Calibrant Energy", year: "2020", description: "On-site solar, storage, and energy-as-a-service" },
      { name: "Ceres Terminals Jacksonville", year: "2015", description: "Marine container terminal" },
      { name: "Cleco Corporate Holdings LLC", year: "2016", description: "Regulated electric utility and wholesale generation" },
      { name: "Cyrq Energy", year: "2021", description: "Geothermal power generation" },
      { name: "International Transportation Service, LLC", year: "2020", description: "Marine container terminal" },
      { name: "Long Beach Container Terminal", year: "2019", description: "Marine container terminal" },
      { name: "Maher Terminals LLC", year: "2016", description: "Marine container terminal" },
      { name: "Mexico Telecom Partners", year: "2014", description: "Wireless towers and edge digital infrastructure" },
      { name: "Netrality Data Centers", year: "2019", description: "Interconnection and colocation data centers" },
      { name: "NYNJ Link Partnership", year: "2013", description: "Bridge public-private partnership" },
      { name: "Yusen Terminals LLC", year: "2015", description: "Marine container terminal" },
    ],
  },
  {
    name: "Meridiam",
    entries: [
      { name: "Central 70", year: "2017", description: "Highway DBFOM concession" },
      { name: "Fresno State University Heating and Cooling Plant", year: "2021", description: "Campus utility and district energy" },
      { name: "Idaho Biogas", year: "2020", description: "Biogas and renewable natural gas" },
      { name: "ION Light Rail Transit", year: "2014", description: "Light rail transit concession" },
      { name: "LaGuardia Terminal B", year: "2016", description: "Airport terminal concession" },
      { name: "North Tarrant Express Segment 3", year: "2013", description: "Managed lanes toll road" },
      { name: "North Tarrant Express Segments 1 and 2", year: "2009", description: "Managed lanes toll road" },
      { name: "Northeast Anthony Henday Drive", year: "2012", description: "Availability-based highway concession" },
      { name: "Port of Miami Tunnel", year: "2009", description: "Road tunnel availability concession" },
      { name: "Presidio Parkway", year: "2012", description: "Road concession" },
      { name: "Purple Line Light Rail Transit", year: "2016", description: "Light rail transit concession" },
      { name: "Southwest Calgary Ring Road", year: "2016", description: "Availability-based highway concession" },
      { name: "Transform 66 Outside the Beltway", year: "2017", description: "Managed lanes toll road" },
      { name: "University of Iowa Utility System", year: "2020", description: "Campus utility and district energy" },
    ],
  },
  {
    name: "MSIP",
    entries: [
      { name: "Altán Redes, S.A.P.I. de C.V.", year: "2017", description: "Wholesale mobile network infrastructure" },
      { name: "Bayonne Energy Center", year: "2018", description: "Gas-fired merchant power generation" },
      { name: "Eureka Midstream", year: "2014", description: "Natural gas gathering pipeline system" },
      { name: "Hornet Midstream", year: "2016", description: "Natural gas gathering pipeline system" },
      { name: "Lightpath Holdings LLC", year: "2020", description: "Enterprise and carrier fiber networks" },
    ],
  },
  {
    name: "Northleaf",
    entries: [
      { name: "Canadian Breaks", year: "2019", description: "Onshore wind generation" },
      { name: "Cotton Plains Portfolio", year: "2016", description: "Wind and solar generation portfolio" },
      { name: "CSV Midstream", year: "2019", description: "Natural gas processing and compression" },
      { name: "CSV Midstream Solutions Corp.", year: "2019", description: "Natural gas processing and compression" },
      { name: "Millennium Parking Garages, LLC", year: "2016", description: "Urban parking concession" },
      { name: "Odfjell Terminals US", year: "2019", description: "Bulk liquid storage terminals" },
      { name: "Pocahontas Parkway", year: "2017", description: "Toll road concession" },
      { name: "Puna Geothermal Venture", year: "2015", description: "Geothermal generation" },
    ],
  },
  {
    name: "Oaktree / Duration",
    entries: [
      { name: "American Corporate Airport Partners, LLC", year: "2019", description: "Business aviation and airport support infrastructure" },
      { name: "Neighborhood Property Group", year: "2020", description: "Urban parking and last-mile real estate platform" },
      { name: "REEF Technology", year: "2020", description: "Urban parking and neighborhood logistics infrastructure" },
      { name: "Watco Companies, LLC", year: "2019", description: "Short line rail, terminals, ports, and logistics" },
    ],
  },
  {
    name: "QIC",
    entries: [
      { name: "CenTrio", year: "2021", description: "District energy" },
    ],
  },
  {
    name: "Quinbrook",
    entries: [
      { name: "Ash Creek Solar", year: "2021", description: "Utility-scale solar generation" },
      { name: "Byrd Ranch", year: "2019", description: "Battery energy storage system" },
      { name: "GlidePath Power Solutions", year: "2017", description: "Battery energy storage development and operation" },
      { name: "Meyersdale Energy Storage", year: "2019", description: "Standalone battery energy storage" },
      { name: "Primergy", year: "2020", description: "Utility-scale solar and battery storage development" },
      { name: "Prospect Storage", year: "2019", description: "Standalone battery energy storage" },
      { name: "Rowan Digital Infrastructure", year: "2020", description: "Hyperscale data center development" },
      { name: "Valley of Fire", year: "2017", description: "Solar and battery storage development portfolio" },
    ],
  },
  {
    name: "Ridgewood",
    entries: [
      { name: "Carolina Marine Terminal", year: "2020", description: "Marine bulk terminal" },
      { name: "Undine", year: "2017", description: "Regulated water and wastewater utilities" },
    ],
  },
  {
    name: "SDC",
    entries: [
      { name: "ALLO Communications, LLC", year: "2020", description: "Fiber-to-the-premise broadband" },
      { name: "Bandwidth Infrastructure Group, LLC d/b/a BIG Fiber", year: "2020", description: "Metro dark fiber" },
      { name: "BIG Fiber", year: "2020", description: "Metro dark fiber" },
      { name: "IQ Fiber, LLC", year: "2021", description: "Fiber-to-the-home broadband" },
      { name: "SQF, LLC d/b/a Verta", year: "2019", description: "Wireless towers, poles, and fiber" },
    ],
  },
  {
    name: "Searchlight",
    entries: [
      { name: "All Points Broadband", year: "2021", description: "Fiber-to-the-home broadband" },
    ],
  },
  {
    name: "Stonepeak",
    entries: [
      { name: "Astound Broadband", year: "2021", description: "Hybrid fiber-coaxial and fiber broadband networks" },
      { name: "Cologix", year: "2017", description: "Carrier-neutral colocation and interconnection data centers" },
      { name: "Evolve Transition Infrastructure LP", year: "2015", description: "Energy transition infrastructure and lower-carbon fuels assets" },
      { name: "Lineage", year: "2018", description: "Temperature-controlled warehousing and cold-chain logistics" },
      { name: "Oryx Midstream", year: "2019", description: "Crude oil gathering and transportation" },
      { name: "Oryx Midstream Services", year: "2019", description: "Crude gathering, transportation, and storage" },
      { name: "Stonepeak Infrastructure Logistics Platform", year: "2021", description: "Industrial logistics real estate" },
      { name: "TRAC Intermodal", year: "2020", description: "Marine chassis leasing and pool management" },
      { name: "Venture Global Calcasieu Pass", year: "2019", description: "LNG liquefaction and export facility" },
      { name: "Xplore Inc.", year: "2020", description: "Rural broadband access networks" },
    ],
  },
  {
    name: "Tiger",
    entries: [
      { name: "11:11 Systems", year: "2021", description: "Managed cloud, network, and security infrastructure" },
      { name: "American Natural", year: "2015", description: "Multi-fuel retail and wholesale fuel distribution" },
      { name: "Crosslake Fibre", year: "2017", description: "Subsea and terrestrial fiber networks" },
      { name: "Danskammer Energy", year: "2017", description: "Gas-fired power generation" },
      { name: "Granite Comfort", year: "2019", description: "Residential HVAC infrastructure and services" },
      { name: "NorthLink Aviation", year: "2021", description: "Airport cargo infrastructure" },
      { name: "Strategic Venue Partners", year: "2019", description: "In-building wireless infrastructure" },
    ],
  },
  {
    name: "Vision Ridge",
    entries: [
      { name: "Guzman Energy", year: "2018", description: "Wholesale power supply and portfolio management" },
      { name: "Highland Electric Fleets", year: "2021", description: "Electric fleet and school bus electrification services" },
      { name: "Sparkfund", year: "2017", description: "Distributed energy deployment and energy-as-a-service" },
      { name: "Vision RNG", year: "2021", description: "Landfill gas to renewable natural gas infrastructure" },
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
          style={{ marginBottom: firmIndex === firms.length - 1 ? 0 : "1.5em" }}
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
                {entry.name} ({firm.name} | {entry.year} | {entry.description})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
