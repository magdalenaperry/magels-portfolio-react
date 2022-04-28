import React from 'react';
import ResumePDF from '../../images/magdalena-perry-resume.pdf'
import { FaDownload } from 'react-icons/fa';

const styles = {
  padding: {
    paddingBottom: "400px"
  }
}

export default function Resume() {
  return (
    <>
    <div style={styles.padding}>
        <ul className='list-group container pb-5' >
          <h2 class="titles mt-5 text-uppercase text-center"> Proficiencies</h2>
          <li className='list-group-item'>HTML</li>
          <li className='list-group-item'>CSS</li>
          <li className='list-group-item'>JavaScript</li>
          <li className='list-group-item'>MVC</li>
          <li className='list-group-item'>Restful API</li>
          <li className='list-group-item'>MYSQL</li>
          <li className='list-group-item'>Express</li>
          <li className='list-group-item'>React</li>
          <li className='list-group-item'>MongoDB</li>
          <li className='list-group-item'><a href={ResumePDF} download><span> <FaDownload /> Resume </span></a></li>

        </ul>
    </div>
      
    </>
  );
}
