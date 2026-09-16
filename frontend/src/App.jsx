
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>SkillBridge<span>AI</span></h2>
        <button className="login-btn">Get Started</button>
      </nav>

      <main className="hero-section">
        <div className="hero-content">
          <p className="tagline">
            YOUR PERSONAL AI PLACEMENT PARTNER
          </p>

          <h1>
            Your Skills.<br />
            Your Future.<br />
            <span>Your Bridge to Success.</span>
          </h1>

          <p className="description">
            Prepare smarter for placements with AI-powered
            resume analysis, personalized learning, and mock
            interviews—all in one place.
          </p>

          <button className="primary-btn">
            Start Preparing →
          </button>
        </div>

        <div className="hero-card">
          <div className="card-icon">✦</div>
          <h3>Welcome to SkillBridgeAI</h3>
          <p>Your placement preparation journey starts here.</p>

          <div className="feature">
            <span>📄</span>
            <div>
              <strong>Resume Analysis</strong>
              <p>Discover your skill gaps</p>
            </div>
          </div>

          <div className="feature">
            <span>🤖</span>
            <div>
              <strong>AI Learning Assistant</strong>
              <p>Learn at your own pace</p>
            </div>
          </div>

          <div className="feature">
            <span>🎯</span>
            <div>
              <strong>AI Mock Interviews</strong>
              <p>Practice with confidence</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        Built for your next big opportunity ✨
      </footer>
    </div>
  )
}

export default App