import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from './assets/logo.jpg';
import './App.css';

function Layout() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <span className="site-title">Sahar Khuri Portfolio</span>
        </div>
        <ul className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
<NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
<NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
<NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>Services</NavLink>
<NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
        </ul>
      </nav>

      <Outlet /> {/* this is where page content goes */}
    </div>
  );
}

export default Layout;
