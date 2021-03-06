import React from 'react';
import Headshot from '../images/mp-headshot.png'


function NavTabs({ currentPage, handlePageChange }) {
  return (
<>

    <header className='text-center img-fluid mt-5 mb-5'>
        <img src={Headshot} alt="" />
    </header>

    <h1 className="text-uppercase text-center">Magdalena Perry</h1>

    <ul className="nav nav-tabs text-center navItems">
      <li className="nav-item py-3">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
        <li className="nav-item py-3">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
        <li className="nav-item py-3">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}

          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
        <li className="nav-item py-3">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  </>
  )
}

export default NavTabs;
