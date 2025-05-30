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
    <div className="carousel">


        <div className="carousel-window">
            <div className="carousel-track" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {projects.map((item) => (
                    <div className="slide" key={item.objectId}>
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    </div>

  );
}

export default ProjectsCarousel;