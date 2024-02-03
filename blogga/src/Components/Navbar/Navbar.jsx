import React, {useState} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav>
          <h2 className="logo">BLOGGA</h2>

          <ul className={isMobile? "nav-link-mobile" : "nav-link"}
          onClick={() => setIsMobile(false)}
          >
            <li><Link to='/'>Design Tools</Link></li>
            <li><Link to='/Daily Update'>Daily Update</Link></li>
            <li><Link to='/Tutorial'>Tutorial</Link></li>
            <li><Link to='/Library'>Library</Link></li>
          </ul>

          <div>
            <button className="btn">Subscribe</button>
          </div>

          <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
      </nav>
    </div>
  )
}

export default Navbar
