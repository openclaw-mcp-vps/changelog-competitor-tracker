export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">
      {/* Hero */}
      <section className="w-full max-w-3xl text-center pt-24 pb-16">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-track competitor<br />
          <span className="text-[#58a6ff]">product updates & features</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop manually checking competitor sites. Get instant alerts when rivals ship new features, update pricing, or change their roadmap — powered by AI.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Tracking — $22/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔍</div>
            <h3 className="font-semibold text-white mb-1">AI-Powered Detection</h3>
            <p className="text-sm text-[#8b949e]">Detects meaningful changes, not just HTML diffs. Understands feature launches, pricing shifts, and deprecations.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Instant Alerts</h3>
            <p className="text-sm text-[#8b949e]">Get notified via email or Slack the moment a competitor ships something new. Stay ahead, always.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-white mb-1">Unified Feed</h3>
            <p className="text-sm text-[#8b949e]">All competitor updates in one dashboard. Filter by company, date, or change type to focus on what matters.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full max-w-sm pb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$22<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to stay ahead</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Track up to 20 competitors</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI change summaries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email + Slack notifications</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Daily & weekly digests</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> 90-day change history</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-2xl pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which competitor pages can I track?</h3>
            <p className="text-sm text-[#8b949e]">Any public URL — changelogs, product pages, pricing pages, blog posts, or release notes. Just paste the URL and we handle the rest.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How often are pages checked?</h3>
            <p className="text-sm text-[#8b949e]">Pages are checked every 6 hours by default. You can configure per-competitor frequency from daily to every hour on the Pro plan.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="pb-8 text-xs text-[#6e7681] text-center">
        &copy; {new Date().getFullYear()} Changelog Competitor Tracker. All rights reserved.
      </footer>
    </main>
  );
}
