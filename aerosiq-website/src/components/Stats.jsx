import FadeIn from './FadeIn';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <FadeIn delay={0.1}><div className="stat-box"><h2>4x</h2><p>4x meeting booked with our strategic funnel systems.</p></div></FadeIn>
        <FadeIn delay={0.2}><div className="stat-box"><h2>2x</h2><p>2x increase in email open rates through targeted campaigns.</p></div></FadeIn>
        <FadeIn delay={0.3}><div className="stat-box"><h2>400%</h2><p>Average return on investment across our digital ad spend.</p></div></FadeIn>
      </div>
    </section>
  );
}