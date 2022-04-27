import React from 'react';
import { FaCode } from 'react-icons/fa'

const styles = {
  a: {
    textDecoration: "none black",
    color: "black",
  },

  container: {
    height: "450px",
    overflow: "scroll"
  },

  img: {

  },
  btnColor: {
    backgroundColor: "lightgrey"
  }
}

export default function ProjectCard({ 
  srcImage,
  deployUrl,
  name,
  ghUrl
 }) {
  return(
    <div className="col-12 my-5" >
      <div style={styles.container} >
        <a className="text-decoration-none" href={deployUrl}
          target="_blank" rel="noreferrer"
          style={styles.a}>

          <img
            id="image"
            className="img-fluid text-decoration-none col-12"
            src={srcImage}
            title={name} alt={name}
            width="auto" height="350px"
            style={styles.img}>
          </img>
        </a>
      </div>

      <button
        className="btn col-12 project-button text-decoration-none btnColor my-2" type="button" style={styles.btnColor}>
        <a
          href={ghUrl}
          target="_blank"
          rel="noreferrer"
          style={styles.a}>
          <div>

            <h3 className="text-uppercase text-dark text-decoration-none">
              <FaCode /> </h3>
          </div>
        </a>
      </button>
    </div>
  );

}