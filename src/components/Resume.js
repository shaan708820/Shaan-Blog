import React from 'react';
import resume from '../assets/resume.pdf'; // Make sure to place your resume in the src/assets/ directory

const Resume = () => {
  return (
    <section id="resume">
      <a href={resume} download>Download Resume</a>
    </section>
  );
}

export default Resume;
