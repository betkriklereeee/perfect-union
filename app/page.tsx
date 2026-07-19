const SHOP = "https://shop.perfectuniontheband.com";

const socials = [
  ["Instagram", "https://www.instagram.com/perfectuniontheband"],
  ["YouTube", "https://www.youtube.com/@PerfectUnionTheBand"],
  ["TikTok", "https://www.tiktok.com/@perfectuniontheband"],
] as const;

export default function Home() {
  return (
    <main>
      <a className="skip" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Perfect Union home">
          <span>PERFECT</span><span>UNION</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#music">Music</a><a href="#videos">Videos</a><a href="#shows">Shows</a>
          <a href="/about">About</a><a href={`${SHOP}/collections/all`}>Shop ↗</a>
        </nav>
        <div className="header-actions">
          <a className="social-short" href="https://www.instagram.com/perfectuniontheband" target="_blank" rel="noreferrer" aria-label="Perfect Union on Instagram">IG ↗</a>
          <a className="social-short" href="https://www.tiktok.com/@perfectuniontheband" target="_blank" rel="noreferrer" aria-label="Perfect Union on TikTok">TT ↗</a>
          <a className="ticket-link" href="https://www.axs.com/events/1431152/treaty-oak-revival-tickets" target="_blank" rel="noreferrer">Tickets ↗</a>
        </div>
      </header>

      <div className="ticker" aria-hidden="true"><div>ALL OR NOTHING ✦ LOS ANGELES ROCK ✦ LIVE AT THE GREEK JULY 24 ✦ ALL OR NOTHING ✦ LOS ANGELES ROCK ✦ LIVE AT THE GREEK JULY 24 ✦</div></div>

      <section className="hero" id="top">
        <img className="hero-art" src="/assets/hero.jpg" alt="Pink Perfect Union diamond mark glowing over a night desert" />
        <div className="hero-shade" />
        <div className="hero-copy" id="content">
          <p className="eyebrow">Los Angeles, California</p>
          <h1>LOUD.<br /><em>HONEST.</em><br />NO FILLER.</h1>
          <p className="lede">Perfect Union writes loud, plays louder, and doesn’t apologize for either.</p>
          <div className="actions"><a className="button pink" href="#music">Hear the band</a><a className="button ghost" href="#shows">See us live</a></div>
        </div>
        <p className="vertical-note">SCROLL TO ENTER THE UNION ↓</p>
      </section>

      <section className="music-section paper" id="music">
        <div className="section-kicker">01 / Current signal</div>
        <div className="music-grid">
          <div><p className="stamp">NEW MUSIC INCOMING</p><h2>ALL OR<br /><span>NOTHING.</span></h2></div>
          <div className="release-card">
            <img src="/assets/all-or-nothing.png" alt="All or Nothing Perfect Union artwork" />
            <div><p>Perfect Union</p><h3>Turn it all the way up.</h3><p>Heartland rock, alternative country, indie, and emo—loud where it needs to be and honest everywhere else.</p><a href="https://www.youtube.com/@PerfectUnionTheBand" target="_blank" rel="noreferrer">Follow for the next release ↗</a></div>
          </div>
        </div>
      </section>

      <section className="video-section" id="videos">
        <div className="section-kicker">02 / Watch</div>
        <a className="video-card" href="https://www.youtube.com/@PerfectUnionTheBand" target="_blank" rel="noreferrer" aria-label="Watch Perfect Union on YouTube">
          <img src="/assets/hero.jpg" alt="Perfect Union campaign artwork" />
          <span className="play">PLAY<br />LOUD ↗</span>
          <h2>LIVE, LOUD<br />&amp; UNFILTERED.</h2>
        </a>
      </section>

      <section className="shows-section paper" id="shows">
        <div className="show-copy">
          <div className="section-kicker">03 / Shows</div>
          <p className="stamp orange">NEXT UP · LOS ANGELES</p>
          <h2>THE GREEK<br />THEATRE</h2>
          <p className="date">JUL 24, 2026 · DOORS 5PM</p>
          <p>Perfect Union opens for Treaty Oak Revival at one of Los Angeles’ most iconic stages.</p>
          <a className="button dark" href="https://www.axs.com/events/1431152/treaty-oak-revival-tickets" target="_blank" rel="noreferrer">Get tickets ↗</a>
        </div>
        <img className="flyer" src="/assets/greek.jpg" alt="Perfect Union at The Greek Theatre, July 24, 2026, supporting Treaty Oak Revival" />
      </section>

      <section className="about-section" id="about">
        <div className="section-kicker">04 / The band</div>
        <blockquote>“REAL SONGS.<br /><span>REAL VOLUME.</span>”</blockquote>
        <div className="about-copy"><p>Perfect Union started in a warehouse studio, where Wayne, Dylan, and Tommy realized they were chasing the same sound.</p><div><p>A three-piece built around loud guitars, honest songwriting, and songs that hit without pretending.</p><a className="text-link" href="/about">Read the full story ↗</a></div></div>
      </section>

      <section className="merch-section paper" id="merch">
        <div className="merch-head"><div><div className="section-kicker">05 / Official goods</div><h2>WEAR IT<br />TO DEATH.</h2></div><a className="button dark" href={`${SHOP}/collections/all`} target="_blank" rel="noreferrer">Shop all merch ↗</a></div>
        <div className="products">
          <a href={`${SHOP}/products/dead-signal-pocket-tee?variant=48657211162849`} target="_blank" rel="noreferrer"><img src="/assets/dead-signal.jpg" alt="Dead Signal black pocket tee, front and back" /><div><h3>“DEAD SIGNAL” POCKET TEE</h3><p>$40.00 · View in Shopify ↗</p></div></a>
          <a href={`${SHOP}/products/gas-station-gray-tee?variant=48666569998561`} target="_blank" rel="noreferrer"><img src="/assets/gas-station.jpg" alt="Gas Station gray Perfect Union tee" /><div><h3>“GAS STATION” GRAY TEE</h3><p>$30.00 · View in Shopify ↗</p></div></a>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Booking · Press · Collaborations</p><h2>MAKE<br /><em>CONTACT.</em></h2>
        <a className="email" href="mailto:perfectuniontheband@gmail.com">perfectuniontheband@gmail.com ↗</a>
        <div className="footer-row"><div>{socials.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name} ↗</a>)}</div><p>© 2026 PERFECT UNION · LOS ANGELES</p></div>
      </footer>
    </main>
  );
}
