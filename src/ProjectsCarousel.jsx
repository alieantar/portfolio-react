import { useState } from 'react';
import { projects } from './objects.js';

function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const moveForward = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='intro-message'>
        <h1>Hi, I'm Alie! </h1>
        <p>Please select one of the options shown above</p>
    </div>

  );
}

export default ProjectsCarousel;