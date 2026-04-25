import React, { useState, useEffect } from 'react';

function Icon({ children }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 text-sm font-bold">
      {children}
    </span>
  );
}

export default function ExecutivePortfolio() {
  const [count, setCount] = useState({ y: 0, p: 0 });
  const [tab, setTab] = useState('Enterprise Architecture');

  useEffect(() => {
    const t = setTimeout(() => setCount({ y: 21, p: 3 }), 500);
    return () => clearTimeout(t);
  }, []);

const [downloading, setDownloading] = useState(false);

const handleDownload = () => {
  setDownloading(true);

  setTimeout(() => {
    setDownloading(false);
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1NMWq5RAOhbNJrACsGcVnJYzSusJb75tt";
  }, 400);
};

 const tabs = {
  'Enterprise Architecture':
    `• Define enterprise-wide target architecture across business, data, and technology domains
• Drive legacy modernization (core systems, APIs, integration layers)
• Establish architecture governance, standards, and guardrails
• Ensure scalable, secure, and resilient platform design aligned to business capabilities`,

  'Cloud Transformation':
    `• Lead end-to-end cloud adoption and modernization programs
• Execute workload migration (6R strategy: rehost, replatform, refactor, etc.)
• Design hybrid cloud and landing zone architecture
• Build platform engineering capabilities and CI/CD enablement
• Optimize cost, performance, and operational resilience across AWS / Azure / GCP`,

  'AI / GenAI Strategy':
    `• Design enterprise AI adoption and GenAI enablement strategy
• Build RAG-based knowledge systems and intelligent assistants
• Implement fraud detection and decision intelligence use cases
• Enable secure, governed, and responsible AI frameworks
• Drive measurable business outcomes from AI initiatives`,

  'Engineering Leadership':
`• Lead enterprise-scale engineering and delivery organizations across multi-domain platforms  
• Own delivery governance, execution predictability, and outcome-driven execution  
• Build DevSecOps, SRE, and engineering excellence at scale  
• Scale high-performing agile squads across distributed global teams  
• Align engineering execution with business KPIs and enterprise transformation outcomes`,
  
};



  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* HERO */}
<section className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 text-white">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <div className="flex justify-between items-start gap-8 flex-col md:flex-row">

      {/* LEFT */}
      <div className="max-w-4xl">

        <p className="uppercase tracking-[0.25em] text-white/70 text-sm">
          Enterprise Transformation,Architecture & Delivery Leadership Portfolio
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4">
          Anand Nerurkar
        </h1>

        <p className="mt-3 text-white/70">
          📍 Mumbai | 📞 +91 9890127922
        </p>

        <p className="mt-4 text-xl text-white/80">
          Cloud • AI • Platform Modernization • Enterprise-Scale Architecture
        </p>

        <h2 className="mt-8 text-3xl md:text-4xl leading-tight">
		VP Technology | Enterprise Architect | Transformation & Delivery Leader | Consulting & Advisory | SAAS & BFSI Expert
          
        </h2>

        {/* REFINED VALUE STATEMENT */}
        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          21+ years of experience leading enterprise-scale modernization across banking and financial services, 
          with exposure to other regulated and complex enterprise domains. I help organizations transform legacy platforms 
          into cloud-native, event-driven, AI-powered ecosystems that improve agility, compliance, and business outcomes.
        </p>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mt-8">
          {Object.keys(tabs).map((t) => (
            <button
  key={t}
  onClick={() => setTab(t)}
  className={`relative group px-5 py-3 rounded-full transition ${
    tab === t
      ? 'bg-white/20'
      : 'bg-white/10 hover:bg-white/15'
  }`}
>
  {t}

  {/* ✅ TOOLTIP USING EXISTING tabs OBJECT */}
  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 
                  bg-black/90 text-white text-xs p-3 rounded-xl 
                  opacity-0 group-hover:opacity-100 transition 
                  pointer-events-none z-50 leading-relaxed">


    {tabs[t]}
  </div>
</button>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-white text-slate-900 px-7 py-4 rounded-2xl font-semibold"
          >
            Explore Leadership Opportunities
          </a>

          <a
            href="#impact"
            className="border border-white/60 px-7 py-4 rounded-2xl font-semibold"
          >
            View Transformation Impact
          </a>

          <a
            href="/Anand_Nerurkar_Case_Study_v2.pdf"
            download="Anand_Nerurkar_Case_Study.pdf"
            className="bg-blue-600 text-white px-7 py-4 rounded-2xl font-semibold"
          >
            Download Case Study
          </a>
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-4 items-center md:items-end">

        <img
          src="/profile-photo.jpeg"
          className="w-44 h-44 rounded-full object-cover border-4 border-white/20"
          alt="Anand"
        />

  <button
  onClick={handleDownload}
  className="bg-white text-slate-900 px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 min-w-[220px] justify-center"
>
  {downloading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 text-slate-900"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      Preparing Resume...
    </>
  ) : (
    <>
      <Icon>↓</Icon>
      Download Latest Resume
    </>
  )}
</button>



      </div>

    </div>
  </div>
</section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-4 gap-5">
          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-5xl font-bold">{count.y}+</div>
            <div className="mt-2 text-slate-500">Years</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-xl font-bold">BFSI & Enterprise</div>
            <div className="mt-2 text-slate-500">Domain</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-xl font-bold">AWS | Azure | GCP</div>
            <div className="mt-2 text-slate-500">Multi-Cloud</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-3xl font-bold">Immediate</div>
            <div className="mt-2 text-slate-500">Availability</div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-wrap gap-4 justify-center text-sm md:text-base">
          <span className="px-4 py-2 bg-slate-100 rounded-xl">TOGAF Enterprise Architect</span>
          <span className="px-4 py-2 bg-slate-100 rounded-xl">Azure Solution Architect</span>
          <span className="px-4 py-2 bg-slate-100 rounded-xl">GCP Professional Architect</span>
		  <span className="px-4 py-2 bg-slate-100 rounded-xl">AWS Solution Architect</span>
        </div>
      </section>

      {/* IMPACT */}
      <section className="scroll-mt-24 max-w-7xl mx-auto px-6 py-16" id="impact">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-bold">Leadership & Transformation Impact</h3>
          <p className="mt-5 text-lg text-slate-600">Enterprise transformation across architecture, cloud,data, AI/GenAI/Agentic AI, and engineering leadership delivering scalable platforms, resilience, governance, and measurable business outcomes.</p>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-bold">
            Large Retail Bank – End-to-End Lending & Compliance Transformation
          </h3>

          <p className="mt-4 text-slate-600">
            Led enterprise-scale modernization of digital lending, onboarding, and compliance platform.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-8">

            <div>
              <h4 className="font-semibold text-lg">Challenges</h4>
              <ul className="list-disc ml-6 mt-2 text-slate-600 space-y-1">
                <li>Legacy systems slowing loan approvals</li>
                <li>Manual KYC & AML processes</li>
                <li>High drop-offs in onboarding</li>
                <li>No real-time fraud detection</li>
              </ul>

              <h4 className="font-semibold text-lg mt-6">Solution</h4>
              <ul className="list-disc ml-6 mt-2 text-slate-600 space-y-1">
                <li>Event-driven microservices (Kafka)</li>
                <li>Azure + GCP hybrid cloud</li>
                <li>AI underwriting & fraud detection</li>
                <li>Fenergo + Actimize integration</li>
                <li>Adapter + CBS integration</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 p-5 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600">from 25 % To 70%</div>
                <div className="text-sm">State Though Processing Time</div>
              </div>

              <div className="bg-slate-100 p-5 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600">↑35%</div>
                <div className="text-sm">Conversion</div>
              </div>

              <div className="bg-slate-100 p-5 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600">99.99%</div>
                <div className="text-sm">Availability</div>
              </div>

              <div className="bg-slate-100 p-5 rounded-xl text-center">
                <div className="text-2xl font-bold text-green-600">8K-12k TPS,150K Users </div>
                <div className="text-sm">Scale</div>
              </div>
            </div>

          </div>

          {/* ✅ ARCHITECTURE DIAGRAM (ADDED ONLY THIS) */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold mb-4">
              End-to-End Reference Architecture
            </h4>

            <img
              src="/ref-arch-digital-lending.png"
              alt="Digital Lending Architecture"
              className="rounded-2xl shadow-xl w-full border"
            />
          </div>

        </div>
      </section>

      {/* BOOK */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold">Upcoming Book</h3>
          <p className="mt-4 text-lg text-slate-600">
            Enterprise Transformation: A Complete Playbook For Modern Banking
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="https://www.linkedin.com/in/anand-nerurkar-9868079/" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border flex gap-2 items-center">
              <Icon>in</Icon>LinkedIn
            </a>

            <a href="https://github.com/anerurkar" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border flex gap-2 items-center">
              <Icon>GH</Icon>GitHub
            </a>

            <a href="https://ananndnerurkar.wixsite.com/website" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-2xl border flex gap-2 items-center">
              <Icon>📘</Icon>Blog
            </a>
          </div>
        </div>

        <img src="/book-cover.png" className="rounded-3xl shadow-2xl w-full" alt="Book" />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h3 className="text-3xl font-bold">
              Open to VP / Head / Chief Architect / Enterprise Architect / Enterprise Transformation & Leadership roles
            </h3>
            <p className="mt-3 text-white/75">
              Mumbai | +91 9890127922
            </p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anannd.nerurkar@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-slate-900 px-6 py-4 rounded-2xl font-semibold"
          >
            Talk to Anand
          </a>
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919890127922"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl flex items-center gap-2"
      >
        <Icon>☎</Icon>WhatsApp
      </a>

    </main>
  );
}