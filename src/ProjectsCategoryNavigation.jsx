import { useState } from 'react';
import { projects } from './objects.js';

function ProjectsCategoryNavigation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const moveForward = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="category-carousel">
      <div className="category-carousel-window">
        <div className='category-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
          {projects.map((item) => (
            <h2 className='project-category' key={item.objectId}>{item.category}</h2>
          ))}
        </div>
      </div>
      <button className="category-carousel-nav cat-left" onClick={goBack}>
            <img src='/assets/SVGs/mobile/general/cat-left.svg'></img>
      </button>
      <button className="category-carousel-nav cat-right" onClick={moveForward}>
            <img src='/assets/SVGs/mobile/general/cat-right.svg'></img>
      </button>
    </div>

  );
}

export default ProjectsCategoryNavigation;