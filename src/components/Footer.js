import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    height: "100px",
    backgroundColor: "rgba(211, 211, 211)"
  }
}

export default function Footer() {
  return (
    <>
      <footer className="text-center col-12" style={styles.footer}>
        <div className="row text-center text-secondary py-4">
          <div className='text-center'>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-secondary" href="https://github.com/magdalenaperry"><FaGithub /></a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-secondary" href="https://www.linkedin.com/in/magdalena-perry/"><FaLinkedin /></a>
            </span>
            <span className="fs-2 me-4">
              <a className="col-12 text-decoration-none text-secondary" href="https://stackoverflow.com/users/17484808/magdalena-perry"><FaStackOverflow /></a>
            </span>
   
          </div>

        </div>
      </footer>



    </>
  );

}