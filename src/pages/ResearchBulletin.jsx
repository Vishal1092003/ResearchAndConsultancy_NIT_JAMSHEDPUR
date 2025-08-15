import Navbar from '@/components/Navbar/Navbar';
import Tab from '@/components/Tab/Tab';
import React from 'react';

/**
 * ResearchBulletin.jsx
 * Fully responsive page that mirrors the layout/content of the provided PDF,
 * styled with Tailwind to match your existing theme (Navbar + Tab + gradient headers + cards).
 *
 * Drop this file into your pages (or app routes) and route it like your other pages.
 */

const SectionHeader = ({ title, subtitle }) => (
  <div className="w-full px-4">
    <div className="bg-blue-600 text-white rounded-xl shadow-lg px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h2 className="text-2xl md:text-3xl font-extrabold">{title}</h2>
      {subtitle && <p className="opacity-90 text-sm md:text-base">{subtitle}</p>}
    </div>
  </div>
);

const StatCard = ({ label, value, note }) => (
  <div className="rounded-xl border bg-white shadow-sm p-5">
    <div className="text-3xl font-bold">{value}</div>
    <div className="mt-1 text-gray-700 font-medium">{label}</div>
    {note && <div className="mt-1 text-xs text-gray-500">{note}</div>}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-100">
    {children}
  </span>
);

const ResearchBulletin = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navs */}
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <div className="sticky top-0 z-10 bg-white shadow-md">
        <Tab />
      </div>

      {/* Page Title */}
      <header className="w-full mt-6 mb-8 px-4">
        <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="font-extrabold text-3xl md:text-5xl leading-tight">
            Research Bulletin 2025
          </h1>
          <p className="mt-2 text-lg md:text-xl font-medium">
            National Institute of Technology Jamshedpur — Vol. I
          </p>
        </div>
      </header>

      {/* Vision & Mission */}
      <main className="max-w-7xl mx-auto px-4 space-y-12 pb-24">
        <section className="space-y-6">
          <SectionHeader title="Our Vision & Mission" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white shadow p-6 border">
              <h3 className="text-xl font-bold text-blue-700">Our Vision</h3>
              <p className="mt-3 text-gray-700">
                To be one of the premier technical institutions for its academic
                excellence and innovative research to meet the future needs of
                the society.
              </p>
            </div>
            <div className="rounded-xl bg-white shadow p-6 border">
              <h3 className="text-xl font-bold text-orange-600">Our Mission</h3>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700">
                <li>To build conducive environment for learning and creativity.</li>
                <li>
                  To train students to become technically competent professionals and
                  socially responsible citizens.
                </li>
                <li>
                  To develop innovative products and technologies for the betterment of the
                  society.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Director's Message */}
        <section className="space-y-6">
          <SectionHeader title="Message from the Director’s Desk" />
          <div className="rounded-2xl bg-gray-50 border shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold">Prof. Goutam Sutradhar</h3>
                <p className="text-gray-600">Director, NIT Jamshedpur</p>
              </div>
              <div className="text-sm text-gray-600">
                <div>director@nitjsr.ac.in</div>
                <div>657-2373392</div>
                <div>www.nitjsr.ac.in</div>
              </div>
            </div>
            <div className="mt-5 space-y-4 text-gray-800 leading-relaxed">
              <p>
                I present this edition of the National Institute of Technology Jamshedpur's
                Research Bulletin with great pride and satisfaction. Research and innovation
                have long been central to NIT Jamshedpur's academic mission as one of the
                nation's top HEI.
              </p>
              <p>
                Our faculty, research scholars, and students have continuously shown in recent
                years that they are deeply committed to expanding knowledge, resolving
                practical issues, and assisting in the development of the country's technology.
                The projects and publications featured in this bulletin are a testament to the
                vibrant research ecosystem we have nurtured — one that blends academic rigor
                with practical relevance.
              </p>
              <p>
                Our focus remains on fostering interdisciplinary collaboration, strengthening
                industry–academia partnerships, and encouraging cutting-edge research that
                addresses both regional priorities and global challenges.
              </p>
              <p>
                The dedication of our researchers to sustainability, innovation, and societal
                impact reflects the true spirit of NIT Jamshedpur. I extend my heartfelt
                appreciation to all contributors and to the editorial team for bringing together
                this impressive compilation. Let us together reaffirm our commitment to
                excellence in research.
              </p>
            </div>
          </div>
        </section>

        {/* About the Institute */}
        <section className="space-y-6">
          <SectionHeader title="About the Institute" />
          <div className="rounded-xl bg-white border shadow p-6">
            <p className="text-gray-800 leading-relaxed">
              Established on 15th August 1960 as the Regional Institute of Technology (RIT),
              NIT Jamshedpur was among the first eight RECs of India, aimed at producing
              top-tier technical graduates. Renamed in 2002 and granted Institute of National
              Importance status in 2007, it now operates under the Ministry of Education.
              Spread over 341 acres on the outskirts of Jamshedpur, the campus blends
              natural beauty with modern infrastructure, housing 11 departments, state-of-the-art
              facilities, and vibrant sports amenities. With strong industry ties, restructured
              courses, and excellent placements, NIT Jamshedpur continues to nurture talent
              and lead in technical education.
            </p>
          </div>
        </section>

        {/* Research & Consultancy Committee */}
        <section className="space-y-6">
          <SectionHeader title="Research and Consultancy Division" subtitle="Committee" />
          <div className="rounded-xl bg-white border shadow p-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard label="Dean (R&C)" value="Prof. Satish Kumar" />
              <StatCard label="Associate Dean (R&C)" value="Dr. Ashok K Mandal" />
              <StatCard label="Research & Consultancy" value="Dr. Swagatadeb Sahoo" />
              <StatCard label="IPR" value="Dr. Suravi Pal" />
              <StatCard label="Members" value="Dr. Neha Jaiswal" />
              <StatCard label="" value="Dr. Abhishek Sharma" />
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <SectionHeader title="Achievements" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border shadow p-6">
              <ul className="space-y-3 text-gray-800 list-disc list-inside">
                <li>
                  Currently, <b>51 ongoing research projects</b> funded by reputed agencies such as
                  SERB, DST, DRDO, ICMR & different industries.
                </li>
                <li>
                  Signed <b>42 MoUs</b> with premier institutions, industries, and government
                  bodies to foster innovation, knowledge exchange and skill development.
                </li>
                <li>
                  MoU signed between <b>JCSTI</b> and NIT Jamshedpur to enhance academic
                  collaboration, faculty development and research in line with NEP 2020.
                </li>
                <li><b>JCSTI</b> sanctioned six research projects in May 2025.</li>
                <li>
                  <b>MSME</b> sanctioned <b>₹66.45 lakh (2025)</b> for 27 training programs including ESDP,
                  A-ESDP, MDP and A-MDP.
                </li>
                <li>
                  Institute participated in <b>APAIE 2025</b> held at Yashobhoomi, Delhi as part of internationalization efforts.
                </li>
                <li>
                  <b>Eight</b> faculty members featured among the world’s <b>top 2% scientists</b> (Stanford, 2024).
                </li>
                <li>
                  Over <b>150 of 198</b> faculty are young and dynamic, contributing actively to academic and research growth.
                </li>
                <li>
                  Under the UG Innovation Project, <b>₹11.94 lakhs (2024)</b> under IIPA, IATT & ISG and
                  <b> ₹8.64 lakhs (2025)</b> under IIPA were sanctioned.
                </li>
                <li>
                  Hosts a <b>DST-NIDHI Inclusive Technology Business Incubator (i-TBI)</b> with a <b>₹5 Cr</b> grant to support startups through mentoring, prototyping, seed funding, and entrepreneurship programs.
                </li>
                <li>
                  Received <b>₹1.66 Crore</b> for enabling technical textiles in NITJSR for lab infrastructure
                  development and training.
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-gray-50 border shadow p-6">
              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Active Projects" value="51" />
                <StatCard label="Partner Institutions" value="24" />
                <StatCard label="Faculty" value="198" />
                <StatCard label="Staff" value="151" />
                <StatCard label="UG Students" value="3025+" />
                <StatCard label="PG Students" value="750+" />
                <StatCard label="PhD Scholars" value="700+" />
                <StatCard label="Alumni" value="3000+" />
              </div>
            </div>
          </div>
        </section>

        {/* Broad Areas of Research (Department-wise) */}
        <section className="space-y-6">
          <SectionHeader title="Broad Areas of Research" />
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Civil */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Civil Engineering</h3>
              <p className="mt-2 text-gray-700">
                Structural design & behaviour, Seismic hazard assessment, Offshore structures,
                Sustainable building materials, Geophysics, Soil–structure interaction, Pavement geotechnique,
                Ground improvement, Slope stability, Sustainable geotechnics, Environmental geology,
                Geotechnical earthquake engineering, Road & rail structures, Pavement design,
                Bituminous mix design, Traffic safety studies, Hydrology, Open channel hydraulics,
                Groundwater management, Water treatment, Photocatalysis.
              </p>
            </div>
            {/* Mathematics */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Mathematics</h3>
              <p className="mt-2 text-gray-700">
                Numerical analysis of singularly perturbed problems, Nanofluid and MHD flows,
                Heat–mass transfer in complex systems, Evolutionary optimisation, Entropy-based sediment transport modelling,
                Algebraic & computational geometry, Cryptography, Machine learning applications in missing data analysis,
                Disease dynamics, and Operational research.
              </p>
            </div>
            {/* Physics */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Physics</h3>
              <p className="mt-2 text-gray-700">
                Foundations of mathematical sciences & condensed matter physics, Green hydrogen system design,
                ML-driven material design, Holography with optical element applications, Nuclear physics, and
                advanced modelling for emerging energy & optical technologies.
              </p>
            </div>
            {/* Chemistry */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Chemistry</h3>
              <p className="mt-2 text-gray-700">
                Computational chemistry (MD & DFT), Organometallic catalysis, Fluorometric sensing materials for PDT
                & environmental monitoring, Heterogeneous/Photocatalysis for clean energy & purification, Magnetic nanomaterials,
                Fluorescent probes for cell imaging, Advanced organic synthesis for dye & heavy-metal removal from wastewater.
              </p>
            </div>
            {/* Electrical */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Electrical Engineering</h3>
              <p className="mt-2 text-gray-700">
                Advanced power electronic converters & drives, Renewable-integrated microgrids, Electric mobility systems,
                AI/ANN-based protection, FACTS-enabled reactive power management, Grid stability enhancement,
                Multi-port energy processors, Heuristic–AI optimisation, Dynamic modelling & simulation, Condition assessment
                for sustainable smart grids and offshore wind integration.
              </p>
            </div>
            {/* ECE */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Electronics & Communication Engineering</h3>
              <p className="mt-2 text-gray-700">
                VLSI/FPGA/ASIC design for digital–analog ICs, RF–microwave & antenna engineering, Next-gen wireless (IoT, THz, Quantum links),
                AI/ML-enabled signal processing, Metamaterial-assisted devices, Biomedical image analysis, Nanomaterial-based photovoltaics,
                MIMO/filtenna systems, High-power microwave components, FPGA prototyping for advanced instrumentation & robotics.
              </p>
            </div>
            {/* CSE */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Computer Science & Engineering</h3>
              <p className="mt-2 text-gray-700">
                Artificial Intelligence, Machine/Deep Learning, Image processing, Biomedical AI & healthcare analytics,
                Quantum computing, Blockchain, IoT & Sustainable IoT, Smart systems for cities & agriculture,
                Cybersecurity & networking, Data mining, Network optimization, Heuristics, Software reliability,
                Digital heritage preservation.
              </p>
            </div>
            {/* Mechanical */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Mechanical Engineering</h3>
              <p className="mt-2 text-gray-700">
                Thermal–fluid sciences, CFD-based multiphase flow, Heat/Mass transfer in renewable energy,
                Hydrogen engines, Advanced thermal systems, Laser additive manufacturing, Micro/nano-scale heat transport,
                Biomaterials & MMCs, Aeroacoustics, Finite element modelling, Vibration/health monitoring,
                Functionally graded smart composites, Design optimisation.
              </p>
            </div>
            {/* PIE */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Production & Industrial Engineering</h3>
              <p className="mt-2 text-gray-700">
                Supply chain optimisation, Industry 4.0 manufacturing, Multi-objective decision-making,
                Additive manufacturing (wire arc, cryorolling), Metal forming, Reverse engineering, Rapid prototyping,
                Materials characterization (special alloys, composites, polymers), CAD/CAM/robotics integration,
                Waste management, Advanced welding.
              </p>
            </div>
            {/* MME */}
            <div className="rounded-xl border p-6 shadow bg-white">
              <h3 className="font-bold text-lg">Metallurgical & Materials Engineering</h3>
              <p className="mt-2 text-gray-700">
                Corrosion science & surface engineering, Microstructural characterization, Structure–property correlations in light alloys,
                Composites, Steels, Refractory metals; High-temperature materials, Fatigue/fracture behaviour, Powder metallurgy,
                Bulk metallic glasses, Polymer nanocomposites, Process optimisation, Mineral beneficiation,
                Alternate steelmaking routes, Decarbonisation strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Strength (Bar style list) */}
        <section className="space-y-6">
          <SectionHeader title="Faculty Strength by Department" />
          <div className="rounded-xl bg-white border shadow p-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Pill>CE</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'85%'}}/></div><span className="w-10 text-right">30</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>CSE</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'68%'}}/></div><span className="w-10 text-right">24</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>ECE</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'62%'}}/></div><span className="w-10 text-right">22</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>EE</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'60%'}}/></div><span className="w-10 text-right">21</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>ME</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'93%'}}/></div><span className="w-10 text-right">33</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Pill>MME</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'45%'}}/></div><span className="w-10 text-right">16</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>PIE</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'40%'}}/></div><span className="w-10 text-right">14</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>Chemistry</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'32%'}}/></div><span className="w-10 text-right">11</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>Mathematics</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'35%'}}/></div><span className="w-10 text-right">12</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>Physics</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'25%'}}/></div><span className="w-10 text-right">8</span>
                </div>
                <div className="flex items-center gap-3">
                  <Pill>Humanities</Pill><div className="w-full bg-gray-100 rounded h-2"><div className="bg-blue-500 h-2 rounded" style={{width:'22%'}}/></div><span className="w-10 text-right">7</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Statistics (Scopus, Projects, Consultancy, Patents, PhD, Events) */}
        <section className="space-y-6">
          <SectionHeader title="Research Statistics" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Scopus Indexed Publications</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>2022–23: <b>516</b></li>
                <li>2023–24: <b>568</b></li>
                <li>2024–25: <b>739</b></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Consultancy Projects</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>2022–23: <b>50</b></li>
                <li>2023–24: <b>49</b></li>
                <li>2024–25: <b>69</b></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Research Projects</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>2022–23: <b>62</b></li>
                <li>2023–24: <b>80</b></li>
                <li>2024–25: <b>102</b></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Ph.D. Awarded (14th Convocation 2024–25)</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>Total Awarded: <b>39</b></li>
              </ul>
            </div>

            <div className="rounded-xl bg-white border shadow p-6 lg:col-span-2">
              <h3 className="font-semibold">Organised Events (2024–25)</h3>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <StatCard label="Workshop" value="2" />
                <StatCard label="National Conference" value="7" />
                <StatCard label="International Conference" value="1" />
                <StatCard label="AESDP" value="3" />
                <StatCard label="ESDP" value="15" />
                <StatCard label="STC/STTP" value="1" />
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Project for UG Students */}
        <section className="space-y-6">
          <SectionHeader title="Innovation Project for UG Students" />
          <div className="rounded-xl bg-white border shadow p-6 space-y-6">
            <p className="text-gray-800">
              Source of fund: Student innovation project fund as one-time fees (UG) collected during admission.
              Name of the Fund: <b>Institute Innovation Project Fund (IIPF)</b>. Fund is disbursed among UG students by
              Research and Consultancy Division. In any category, funds should not be taken from different sources for a single purpose.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Annual budget (Academic year wise): <b>₹40,00,000</b></li>
              <li>
                Distribution among four categories (IIPA, IATT, ISG, NPPNR) is ~<b>₹10,00,000</b> each (flexible per R&amp;C committee).
              </li>
            </ul>

            <div>
              <h4 className="font-semibold">Categories</h4>
              <div className="mt-3 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <Pill>Institute Innovation Project Assistance (IIPA)</Pill>
                <Pill>Institute Assistance to Technical Teams (IATT)</Pill>
                <Pill>Institute Startup Grant (ISG)</Pill>
                <Pill>Assistance for Programs of National Repute (NPPNR)</Pill>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <StatCard label="IIPA — Sanctioned (2024–25)" value="₹ 4,64,000" />
              <StatCard label="IIPA — Sanctioned (2025–26)" value="₹ 8,64,000" />
            </div>
          </div>
        </section>

        {/* Events and Initiatives */}
        <section className="space-y-6">
          <SectionHeader title="Events & Initiatives" />
          <div className="grid lg:grid-cols-2 gap-6">
            {/* International Conference */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">International Conference on Recent Advances in Materials Processing and Characterization</h3>
              <p className="mt-2 text-gray-700">
                Organized by the Department of Metallurgical & Materials Engineering, 21–23 March 2025.
                Featured 52 technical papers on emerging trends, sustainable practices, and industrial applications in materials science.
                Eminent speakers included Dr. Sandip Ghosh Chowdhary (Director, CSIR-NML), Mr. Ajitesh Monga (Director, Tata Cummins Pvt. Ltd.),
                and senior academic leaders from NIT Jamshedpur and international institutions.
              </p>
            </div>

            {/* Product Design Workshop */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">National Workshop on Product Design & Development for Rural and Agricultural Applications</h3>
              <p className="mt-2 text-gray-700">
                A 5-day workshop inaugurated by former CM of Jharkhand, Shri Arjun Munda. Equipped faculty and students with
                skills to design, develop, and market innovative rural/agri products—covering rural needs, design thinking,
                prototyping, marketing, and business planning.
              </p>
            </div>

            {/* UBA */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">Unnat Bharat Abhiyan (UBA)</h3>
              <p className="mt-2 text-gray-700">
                Supporting the “Ek Ped Maa Ke Naam” campaign, UBA unit organized a plantation drive on campus.
                On 31 July 2024, Team UBA with Tata Steel CSR inaugurated an archery club in Pindrabeda to nurture local talent.
              </p>
            </div>

            {/* CBDE */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">Capacity Building for Design and Entrepreneurship (CBDE)</h3>
              <p className="mt-2 text-gray-700">
                Program to enhance capacity of faculty and HEIs for creative transformation with focus on design & entrepreneurship
                as enshrined in NEP 2020. Includes one-to-one mentoring and generative dialogues among faculty, student teams, and partners.
                A workshop on pedagogy by Prof. Sudhir Varadarajan (13 Feb 2025) emphasized innovative teaching methods and collaboration.
              </p>
            </div>

            {/* BIS Activities */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">BIS Activities</h3>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                <li>09 research projects sponsored by BIS.</li>
                <li>07 student chapters established to promote standardization activities.</li>
                <li>Paid internships offered in standardization-related work.</li>
                <li>Awareness workshops conducted by BIS scientists.</li>
                <li>Technical sessions on BIS-recommended standards.</li>
                <li>07 departments adopted standardization courses in UG curriculum.</li>
                <li>Faculty training programs & annual convention sponsored by BIS.</li>
              </ul>
            </div>

            {/* Industry Academia Conclave */}
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-bold">Industry Academia Conclave (IAC)</h3>
              <p className="mt-2 text-gray-700">
                IAC 2024 aimed to strengthen collaboration—enhancing connections, offering advanced research/technology for industrial challenges,
                developing industry-relevant programs, and promoting entrepreneurship via startup support, mentorship, and funding.
              </p>
              <div className="mt-3">
                <h4 className="font-semibold">In association with</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Pill>IIT (ISM) Dhanbad</Pill>
                  <Pill>IIT Patna</Pill>
                  <Pill>NIT Mizoram</Pill>
                  <Pill>NIT Patna</Pill>
                  <Pill>NIT Raipur</Pill>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold">IAC 2023 Highlights</h4>
                <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
                  <li>20+ sponsors (Tata Steel, JSW, SBI, etc.)</li>
                  <li>355 delegates & 400+ students (135+ school/college teams)</li>
                  <li>Panels, MoUs, Models, Startups, Sessions, Exhibitions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="space-y-6">
          <SectionHeader title="Notable Projects & Outcomes" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Effect of Nano-particles in Viscoplastic Complex Fluids</h3>
              <p className="text-sm text-gray-600">Sponsored: DST-SERB | P.I.: Dr. M. A. Hassan (ME)</p>
              <p className="mt-2 text-gray-700">
                Facility for preparation, testing & application of nanofluid established. Utilized for highly energetic rocket fuel preparation,
                minichannel heat sink enhancement, and improved heat transport in automotive cooling systems.
              </p>
            </div>
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Revitalizing the Sacred Art of Ancient Ironmaking</h3>
              <p className="text-sm text-gray-600">Sponsored: IKS Division, MoE | P.I.: Dr. Ram Krishna (MME)</p>
              <p className="mt-2 text-gray-700">
                Documentation, recommendations & future directions preserving cultural essence while adapting to industrial feasibility,
                integrating renewable energy and eco-friendly materials in traditional furnace designs.
              </p>
            </div>
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Experimental Investigation & CFD Modeling of Centrifugal Slurry Pump</h3>
              <p className="text-sm text-gray-600">Sponsored: DST-SERB | P.I.: Prof. Satish Kumar (ME)</p>
              <p className="mt-2 text-gray-700">
                Demonstrated disposal/transport of high concentration fine particulate suspensions with lower principal investment and improved economy using optimized particle size distributions.
              </p>
            </div>
          </div>
        </section>

        {/* MSME + 5G Use Case Lab */}
        <section className="space-y-6">
          <SectionHeader title="MSME Initiatives & 5G Use Case Lab" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">MSME-Supported Entrepreneurship & Skill Development</h3>
              <p className="mt-2 text-gray-700">
                NIT Jamshedpur, as a Host Institute (HI), conducted ESDP, A-ESDP, MDP & A-MDP programs to enhance skills and professional
                acumen among marginalized communities. In 2025, MSME sanctioned <b>₹66.45 lakh</b> for <b>27 training programs</b>.
              </p>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                <li>Six-week ESDP on Pickle Processing, Packaging & Marketing (Jan–Feb 2025)</li>
                <li>Six-week ESDP on Cultivation of Oyster Mushroom (Jan–Mar 2025)</li>
                <li>Six-week ESDP on Sewing, Tailoring & Embroidery (Jan–Mar 2025)</li>
              </ul>
            </div>
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">5G Use Case Lab</h3>
              <p className="mt-2 text-gray-700">
                DoT awarded “100 5G Use Case Labs” to educational institutions; NIT Jamshedpur received a lab of estimated amount <b>₹5 Cr</b>.
                Objective: cultivate competencies and engagement in 5G technologies for students and startups — enabling development and
                experimentation across education, agriculture, health, power, urban management, mining, logistics, resource management,
                tourism, sports, security, and e-governance.
              </p>
            </div>
          </div>
        </section>

        {/* CIIC & Research Facilities */}
        <section className="space-y-6">
          <SectionHeader title="Centre for Innovation and Incubation Council (CIIC) & Research Facilities" />
          <div className="rounded-xl bg-white border shadow p-6 space-y-4">
            <p className="text-gray-800">
              The Institute has established a Section-8 company <b>“NIT-JSR CENTER FOR INNOVATION AND INCUBATION COUNCIL”</b> to act as the
              principal incubator, overseeing multiple incubators across technology verticals and ensuring uniform policy & governance.
              CIIC has a <b>₹5 Cr</b> DST-NIDHI grant to establish i-TBI for mentoring, prototyping, seed funding and entrepreneurship programs.
              It aims to inculcate startup culture, establish incubation centres, nurture innovative ideas, promote education and research,
              and conduct seminars, expert lectures, conclaves, and interactions with technocrats & entrepreneurs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <Pill>Advanced Labs</Pill>
              <Pill>Prototyping</Pill>
              <Pill>Seed Funding</Pill>
              <Pill>Mentoring</Pill>
            </div>
          </div>
        </section>

        {/* Media & Design Team */}
        <section className="space-y-6">
          <SectionHeader title="Design, Web & Volunteers" />
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white border shadow p-6">
              <h3 className="font-semibold">Research Bulletin — Design Team</h3>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-700">
                <li>Aditya Raj — B.Tech, 3rd Sem, Computer Science & Engineering</li>
                <li>Yogesh Meena — B.Tech, 3rd Sem, Engineering & Computational Mechanics</li>
                <li>Anoop Kumar Burnwal — B.Tech, 3rd Sem, Engineering & Computational Mechanics</li>
                <li>Nihaal Sahay — B.Tech, 5th Sem, Mechanical Engineering</li>
                <li>Mrinal Ayush Raj — B.Tech, 5th Sem, Mechanical Engineering</li>
                <li>Harshit Raj — B.Tech, 7th Sem, Production & Industrial Engineering</li>
              </ul>
            </div>
            <div className="rounded-xl bg-gray-50 border shadow p-6">
              <h3 className="font-semibold">Media Coverage & Web Team</h3>
              <p className="mt-2 text-gray-700">
                Media features and institute web assets captured notable achievements, events and
                research facilities throughout the year with contributions from student volunteers and the web team.
              </p>
            </div>
          </div>
        </section>

        {/* Waste to Art */}
        <section className="space-y-6">
          <SectionHeader title="Waste to Art — Campus Landmarks" />
          <div className="rounded-xl bg-white border shadow p-6">
            <p className="text-gray-800">
              A total of <b>2,360 kg</b> of campus metal scrap was transformed into three campus landmarks under the
              <b> Waste to Art</b> initiative — blending sustainability with creative expression.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResearchBulletin;