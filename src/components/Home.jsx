import "./home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="hero-section">

        <div className="home-text">
          <h1 className="title">
            UNITING <span>COMMUNITIES</span> IN CRISIS
          </h1>
          <p className="description">
            Welcome to RecoverEase – bridging hope in crisis. Connect with those
            affected by disasters and volunteer your support. Together, we make
            a difference.
          </p>
        </div>
        <div className="btn">
          <button>Seek Support</button>
          <button>Volunteer</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
