import './home.css';
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <section className="home__section" >
      <Navbar />
      <div className="container-section home__container">
        <div className="home__info">
          <h1>So you want to travel to</h1><br />
          <span>Space</span>
          <p>
            Let's face it; if you want to go to space, you might
            as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax
            because well give you a truly out of this world
            experience!
          </p>
        </div>
        <div className="explore">
          <div>Explore</div>
        </div>
      </div>
    </section>
  );
};

export default Home;