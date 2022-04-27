import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    backgroundColor: "rgba(211, 211, 211, 0.105)"
  }
}

export default function Footer() {
  return (
    <>
      <footer className="text-center col-12" style={styles.footer}>
        <div className="row text-center text-secondary py-4">
          <div className='text-center'>
            <span className="mx-4">
              <a className="col-12 text-decoration-none text-secondary"> < FaMapMarkerAlt /> Charlotte, NC</a>
            </span>
            <span className="mx-4">
              <a className="col-12 text-decoration-none text-secondary" href="tel:1234567890"><FaPhone /> (704)609-7506</a>
            </span>
            <span className="me-4">
              <a className="col-12 text-decoration-none text-secondary" href="mailto:mageltron@gmail.com"><FaEnvelope />mageltron@gmail.com</a>
            </span>
            <span className="me-4">
              <a className="col-12 text-decoration-none text-secondary" href="https://github.com/magdalenaperry"><FaGithub />magdalenaperry</a>
            </span>
          </div>

        </div>
      </footer>



    </>
  );

}