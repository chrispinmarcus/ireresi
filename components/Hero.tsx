export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><span className="live-dot" /> YOUR NEXT MOVIE NIGHT STARTS HERE</span>
        <h1>Discover movies.<br /><span>Feel every story.</span></h1>
        <p>Explore the latest releases, timeless favourites, and handpicked recommendations all in one place.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#trending">Explore movies <span>→</span></a>
          <a className="button button-ghost" href="#recommended">Discover more</a>
        </div>
        <div className="hero-meta"><span>✦ Curated for movie lovers</span><span>•</span><span>New titles added regularly</span></div>
      </div>
      <div className="hero-art" aria-label="Featured movie artwork">
        <div className="poster-glow" />
        <div className="hero-poster poster-one"><span>THE</span><strong>MOVIE<br />NIGHT</strong><small>AN EXPERIENCE AWAITS</small></div>
        <div className="hero-poster poster-two"><span>NOW SHOWING</span><strong>YOUR<br />NEXT<br />FAVOURITE</strong></div>
        <div className="floating-note"><span className="note-icon">▶</span><span><b>Find your story</b><small>One click away</small></span></div>
      </div>
    </section>
  );
}
