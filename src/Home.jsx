import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Floating Glass Orbs */}
      <div className="glass-orb glass-orb-1"></div>
      <div className="glass-orb glass-orb-2"></div>
      <div className="glass-orb glass-orb-3"></div>

      <div className="home-hero">
        <h1>Design Stunning Visuals with Ease</h1>
        <p>Create beautiful graphics, presentations, and more with Stackly's powerful design tools. No design experience required.</p>
        <div className="home-cta">
          <Link to="/signup" className="btn btn-primary">Get Started Free</Link>
          <Link to="#" className="btn btn-secondary">Watch Demo</Link>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Easy to Use</h3>
          <p>Drag and drop interface makes designing intuitive and fun for everyone.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚀</div>
          <h3>Professional Templates</h3>
          <p>Thousands of professionally designed templates to get you started quickly.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Collaborate in Real-time</h3>
          <p>Work together with your team on designs simultaneously from anywhere.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
