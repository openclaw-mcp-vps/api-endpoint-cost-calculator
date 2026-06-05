export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate the{' '}
          <span className="text-[#58a6ff]">real cost</span>{' '}
          of every API endpoint
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Ingest your API usage data, configure your cost inputs, and instantly see profit margins per endpoint — infrastructure, third-party APIs, and compute included.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get Access — $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[['Endpoint-level', 'Cost Breakdown'], ['Real-time', 'Usage Tracking'], ['Profit Margin', 'Analytics']].map(([top, bottom]) => (
            <div key={top} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-[#58a6ff] font-semibold text-sm">{top}</p>
              <p className="text-[#8b949e] text-xs mt-1">{bottom}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-2">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to understand your API economics</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Webhook & SDK ingestion',
              'Unlimited endpoints tracked',
              'Configurable cost inputs',
              'Profit margin per endpoint',
              'Usage analytics dashboard',
              'CSV export',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now — $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the cost calculation work?',
              a: 'You configure your cost inputs — server costs, third-party API fees, compute rates — and the tool maps them to each endpoint based on actual usage data ingested via webhook or SDK.',
            },
            {
              q: 'What data do I need to get started?',
              a: 'Just your API request logs. Send them via our webhook endpoint or integrate the lightweight SDK. No complex setup required.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel anytime from your billing portal. No contracts, no lock-in.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} API Endpoint Cost Calculator. All rights reserved.
      </footer>
    </main>
  )
}
