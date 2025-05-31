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
                      <div className='project-card'>
                        <h2 className='project-title'>Hi</h2>
                        <div className='image-container'>
                          <img src="/assets/SVGs/mobile/general/AlieAntar_PassportPhoto.png" className='project-photo'></img>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
          <button className="carousel-nav left" onClick={goBack}>
                <img src='/assets/SVGs/mobile/general/nav-left.svg'></img>
          </button>
          <button className="carousel-nav right" onClick={moveForward}>
                <img src='/assets/SVGs/mobile/general/nav-right.svg'></img>
          </button>
        </div>
    </div>

  );
}

export default ProjectsCarousel;