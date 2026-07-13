import headshot from '../assets/headshotCROPPED.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" id="home">
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-media">
            <img
              className="headshot"
              src={headshot}
              alt="Headshot of Alana Zinkin"
            />
          </div>

          <div className="hero-content">
            <span className="section-eyebrow">Welcome</span>
            <h1>
              Hey there! I'm Alana. I currently work as a Deployment
              Strategist at Palantir Technologies, where I spend my days
              tackling complex, high-impact problems. While I'm originally a
              Long Islander, I now call New York City home.
            </h1>
            <p>
              I love staying active and exploring the city. You can usually
              find me chasing down food recommendations and ticking off
              spots from my Beli list, lifting weights, or hiking. To
              unwind, I'm either catching up on whatever great TV series is
              currently capturing everyone's attention, or planning the next
              big adventure with my friends. We most recently traveled to
              Japan, Bali, and Thailand!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
