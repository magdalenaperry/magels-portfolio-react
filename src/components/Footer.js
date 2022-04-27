import React from 'react';
import { FaFileExport, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const styles = {
  footer: {
    display: "flex",
    position: "absolute",
    backgroundColor: "red"
  }
}

export default function Footer() {
  return (
  <>
      <footer className="text-center col-12" style={styles.footer}>
        <div className="col-12 text-center">
            < FaMapMarkerAlt />
            <p>Charlotte, NC</p>

              <FaPhone />
              <a className="text-decoration-none text-secondary" href="tel:1234567890">(123) 456-7890 </a>

              <FaEnvelope />
              <a className="text-decoration-none text-secondary" href="mailto:mageltron@gmail.com">mageltron@gmail.com</a>
        </div>
   
    </footer>

  
  
  </>
  );

}