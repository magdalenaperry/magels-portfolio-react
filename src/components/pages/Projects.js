// import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import ProjectCard from './ProjectCard'
import projectData from '../../utils/projectData'



// const images = [
//   Chiron, 
//   Cosmic, 
//   LosAmigos,
//   TechBlog,
//   Portfolio,
//   Weather
// ];


export default function Projects({ project }) {

  return (
    <>
      <h2 className=" titles h1-responsive font-weight-bold text-center my-5 text-uppercase text-small">Projects</h2>
      <div className='row mx-5 pb-5 mb-5'>
        <section className='col-12'>
          {projectData.map( (project, i ) => (
            // ... spreads out project object can access name, 
            <ProjectCard {...project} />
          ))}

        </section>
      </div>

    </>
  )
}
