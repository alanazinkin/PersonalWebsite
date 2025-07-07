import headshot from '../assets/headshotCROPPED.jpg';
import '../styles/Home.css';

function Home() {
  return (<div className="home">
        <div className="headerContainer">

          <img
              className="headshot"
              src={headshot}
              alt="Headshot of Alana Zinkin"
          />

          <div className="box2">
            <h1>
              Hey there! I’m Alana Zinkin, a senior at Duke University exploring
              computer science, innovation, and entrepreneurship. I built this
              website myself!
            </h1>
          </div>

          <p className="p1">
            I’m passionate about building intuitive, impactful
            products that solve complex problems. This summer, I’m working as a
            Product Manager at Capital One, leading efforts to redesign a new
            two-factor authentication technique to make identity verification more
            secure and seamless for millions of users.
          </p>

          <p className="p2">
            At Duke, I serve as Vice President of the DTech Career Fair,
            connecting over 300 tech students with industry-leading companies. If you’re
            interested in participating, I’d love to connect! I have also been working as a Teaching Assistant
            for Duke’s largest computer science course, Data Structures and
            Algorithms, where I simplify complex technical concepts through weekly
            discussion sections and office hours.
            <br/><br/>
            Outside of tech, I’m passionate about health care and wellness. As a
            peer health coach for DukeLine, I provide anonymous, text-based support to Duke
            students and alumni navigating stress, loneliness, and other challenges.
            <br/><br/>
            I'm always looking to meet new people, so please feel free to reach out anytime!
          </p>


        </div>
      </div>);
}

export default Home;
