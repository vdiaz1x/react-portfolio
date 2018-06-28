import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav_link" to="projects" smooth duration={500} offset={-80}><span className="nav_text">Project Archive</span></Link>
      <Link className="nav_link" to="tech" smooth duration={500} offset={-80}><span className="nav_text">Tech Stack</span></Link>
      <Link className="nav_link" to="dossier" smooth duration={500} offset={-80}><span className="nav_text">Dossier</span></Link>
      <Link className="nav_link" to="contact" smooth duration={500} offset={-80}><span className="nav_text">Contact</span></Link>
    </nav>

  );
}

export default Nav;
