import './App.css';
import sahar from "./assets/sahar.png";
import { Link } from 'react-router-dom';

function App() {
  return (
    <header className="hero">
      <div className="hero-content">
        <img src={sahar} alt="Sahar" className="profile-pic" />
        <div className="text-section">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I’m Sahar — a passionate web and software developer.</p>
          <p>My mission is to create clean, fast, and user-friendly applications.</p>
          <div className="btn-group">
            <Link to="/about"><button>About Me</button></Link>
            <Link to="/projects"><button>Projects</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
