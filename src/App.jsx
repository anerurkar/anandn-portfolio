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

  const tabs = {
    'Enterprise Architecture':
      'Target-state architecture, modernization roadmaps, governance, composable platforms, resilience and execution at scale.',
    'Cloud Transformation':
      'AWS, Azure, GCP modernization, migration factories, platform engineering, cost optimization and reliability.',
    'AI / GenAI Strategy':
      'RAG, copilots, agentic AI, governance, secure adoption, measurable business value.',
    'Engineering Leadership':
      'Large teams, delivery excellence, stakeholder management, execution rigor and innovation culture.',
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
                World-Class Executive Portfolio
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mt-4">
                Anand Nerurkar
              </h1>

              <p className="mt-3 text-xl text-white/80">
                Trusted by enterprise-scale transformation environments
              </p>

              <h2 className="mt-10 text-3xl md:text-4xl leading-tight">
                VP Technology | Enterprise Architect | Cloud, AI & BFSI
                Transformation Leader
              </h2>

              {/* TABS */}
              <div className="flex flex-wrap gap-3 mt-8">
                {Object.keys(tabs).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-5 py-3 rounded-full transition ${
                      tab === t
                        ? 'bg-white/20'
                        : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-xl md:text-2xl text-white/85 leading-relaxed">
                21+ years leading enterprise modernization, engineering
                transformation, cloud strategy, and AI-led innovation across
                banking, financial services, payments, compliance, and regulated
                industries.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-white text-slate-900 px-7 py-4 rounded-2xl font-semibold"
                >
                  Hire For A Leadership Role
                </a>
                <a
                  href="#impact"
                  className="border border-white/60 px-7 py-4 rounded-2xl font-semibold"
                >
                  View Impact
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

              <a
                href="/resume.pdf"
                download
                className="bg-white text-slate-900 px-6 py-4 rounded-2xl font-semibold flex items-center gap-2"
              >
                <Icon>↓</Icon>
                Download Resume
              </a>
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
            <div className="text-5xl font-bold">BFSI</div>
            <div className="mt-2 text-slate-500">Domain</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-5xl font-bold">{count.p}</div>
            <div className="mt-2 text-slate-500">Clouds</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
            <div className="text-3xl font-bold">Immediate</div>
            <div className="mt-2 text-slate-500">Availability</div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="scroll-mt-24 max-w-7xl mx-auto px-6 py-16" id="impact">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h3 className="text-3xl font-bold">Leadership Expertise</h3>
          <p className="mt-5 text-lg text-slate-600">{tabs[tab]}</p>
        </div>
      </section>

      {/* BOOK + LINKS */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold">Upcoming Book</h3>
          <p className="mt-4 text-lg text-slate-600">
            Enterprise Transformation: A Complete Playbook For Modern Banking
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="https://www.linkedin.com/in/anand-nerurkar-9868079/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border flex gap-2 items-center"
            >
              <Icon>in</Icon>LinkedIn
            </a>

            <a
              href="https://github.com/anerurkar"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border flex gap-2 items-center"
            >
              <Icon>GH</Icon>GitHub
            </a>

            <a
              href="https://ananndnerurkar.wixsite.com/website"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-2xl border flex gap-2 items-center"
            >
              <Icon>📘</Icon>Blog
            </a>
          </div>
        </div>

        <img
          src="/book-cover.png"
          className="rounded-3xl shadow-2xl w-full"
          alt="Book"
        />
      </section>

      {/* CONTACT */}
     <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-16">
  <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-3xl p-10 flex flex-col md:flex-row justify-between gap-6 items-center">
    <div>
      <h3 className="text-3xl font-bold">
        Open to VP / Head / Enterprise Leadership Opportunities
      </h3>
      <p className="mt-3 text-white/75">
        Available for immediate conversations with recruiters, CIOs, CTOs and business leaders.
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
