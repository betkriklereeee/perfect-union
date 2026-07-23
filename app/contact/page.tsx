import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Perfect Union | Booking, Press & Merchandise",
  description: "Contact Perfect Union for booking, press, collaborations, general inquiries, and merchandise support.",
};

const SHOP = "https://shop.perfectuniontheband.com";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <a className="skip" href="#contact-form">Skip to contact form</a>
      <header className="site-header inner-header">
        <a className="brand" href="/" aria-label="Perfect Union home"><span>PERFECT</span><span>UNION</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/#music">Music</a><a href="/#videos">Videos</a><a href="/#shows">Shows</a><a href="/about">About</a><a href={`${SHOP}/collections/all`}>Shop ↗</a><a aria-current="page" href="/contact">Contact</a></nav>
        <div className="header-actions"><a className="social-short" href="https://www.instagram.com/perfectuniontheband" target="_blank" rel="noreferrer">IG ↗</a><a className="ticket-link" href="https://www.axs.com/events/1431152/treaty-oak-revival-tickets" target="_blank" rel="noreferrer">Tickets ↗</a></div>
      </header>
      <div className="ticker" aria-hidden="true"><div>BOOKING ✦ PRESS ✦ COLLABORATIONS ✦ MERCH SUPPORT ✦ BOOKING ✦ PRESS ✦ COLLABORATIONS ✦ MERCH SUPPORT ✦</div></div>
      <section className="contact-intro" id="contact-form">
        <p className="eyebrow">Booking · Press · Collaborations · Merch</p>
        <h1>MAKE<br /><em>CONTACT.</em></h1>
        <p>Tell us what you need and include an order number when contacting us about merchandise.</p>
      </section>
      <section className="contact-form-section">
        <ContactForm />
        <aside><p className="section-kicker">Direct line</p><a href="mailto:perfectuniontheband@gmail.com">perfectuniontheband@gmail.com ↗</a><p>Allow 12–24 hours for a reply.</p></aside>
      </section>
      <footer className="compact-footer"><div className="footer-row"><div><a href="https://www.instagram.com/perfectuniontheband">Instagram ↗</a><a href="https://www.tiktok.com/@perfectuniontheband">TikTok ↗</a><a href="https://www.youtube.com/@PerfectUnionTheBand">YouTube ↗</a></div><p>© 2026 PERFECT UNION · LOS ANGELES</p></div></footer>
    </main>
  );
}
