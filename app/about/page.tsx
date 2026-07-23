import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Perfect Union | Los Angeles Rock Band",
  description: "Meet Perfect Union, a Los Angeles rock band built around loud guitars, honest songwriting, and real performances.",
};

const SHOP = "https://shop.perfectuniontheband.com";

export default function AboutPage() {
  return (
    <main className="about-page">
      <a className="skip" href="#story">Skip to story</a>
      <header className="site-header inner-header">
        <a className="brand" href="/" aria-label="Perfect Union home"><span>PERFECT</span><span>UNION</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/#music">Music</a><a href="/#videos">Videos</a><a href="/#shows">Shows</a><a aria-current="page" href="/about">About</a><a href={`${SHOP}/collections/all`}>Shop ↗</a><a href="/contact">Contact</a></nav>
        <div className="header-actions"><a className="social-short" href="https://www.instagram.com/perfectuniontheband" target="_blank" rel="noreferrer" aria-label="Perfect Union on Instagram">IG ↗</a><a className="social-short" href="https://www.tiktok.com/@perfectuniontheband" target="_blank" rel="noreferrer" aria-label="Perfect Union on TikTok">TT ↗</a><a className="ticket-link" href="https://www.axs.com/events/1431152/treaty-oak-revival-tickets" target="_blank" rel="noreferrer">Tickets ↗</a></div>
      </header>
      <div className="ticker" aria-hidden="true"><div>THE BAND ✦ LOS ANGELES, CALIFORNIA ✦ LOUD · HONEST · NO FILLER ✦ THE BAND ✦ LOS ANGELES, CALIFORNIA ✦ LOUD · HONEST · NO FILLER ✦</div></div>
      <section className="about-hero">
        <img src="/assets/hero.jpg" alt="Perfect Union campaign artwork in a pink night desert" /><div className="hero-shade" />
        <div className="about-hero-copy"><p className="eyebrow">The story so far</p><h1>THREE<br />PLAYERS.<br /><em>ONE SOUND.</em></h1></div>
      </section>
      <section className="story paper" id="story">
        <div className="section-kicker">Perfect Union / Los Angeles</div>
        <div className="story-grid"><h2>BUILT IN<br />THE ROOM.</h2><div className="story-copy"><p className="story-lede">Perfect Union started the way most real bands do—not in a boardroom, but in a warehouse studio.</p><p>A shared instinct became a band built around loud guitars, honest songwriting, and songs that hit without pretending.</p><p>The band pulls from heartland rock, alternative country, indie, and emo—loud where it needs to be and honest everywhere else. The songs live in the space between love and regret, betrayal and consequence, the mistake and everything that follows.</p><p>Perfect Union is focused on real performances and real connection. With new music on the way and The Greek Theatre next, the band is only getting started.</p></div></div>
      </section>
      <section className="social-callout paper"><p className="eyebrow">Follow the noise</p><h2>STAY IN<br />THE UNION.</h2><div className="actions"><a className="button dark" href="https://www.instagram.com/perfectuniontheband" target="_blank" rel="noreferrer">Instagram ↗</a><a className="button dark" href="https://www.tiktok.com/@perfectuniontheband" target="_blank" rel="noreferrer">TikTok ↗</a><a className="button dark" href="https://www.youtube.com/@PerfectUnionTheBand" target="_blank" rel="noreferrer">YouTube ↗</a></div></section>
      <footer><p className="eyebrow">Booking · Press · Collaborations</p><h2>MAKE<br /><em>CONTACT.</em></h2><a className="email" href="mailto:perfectuniontheband@gmail.com">perfectuniontheband@gmail.com ↗</a><div className="footer-row"><div><a href="https://www.instagram.com/perfectuniontheband" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/@perfectuniontheband" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://www.youtube.com/@PerfectUnionTheBand" target="_blank" rel="noreferrer">YouTube ↗</a></div><p>© 2026 PERFECT UNION · LOS ANGELES</p></div></footer>
    </main>
  );
}
