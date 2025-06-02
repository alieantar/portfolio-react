import { useState } from 'react';
import ProjectsCarousel from './ProjectsCarousel';
import { playSound } from './playSound';

function ProjectsCategoryNavigation(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    playSound();
    setCurrentIndex((prev) => (prev === 0 ? props.projectsContent.length - 1 : prev - 1));
  };

  const moveForward = () => {
    playSound();
    setCurrentIndex((prev) => (prev === props.projectsContent.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="projects-collection">
      <div className="category-carousel">
        <div className="category-carousel-window">
          <div className='category-carousel-track' style={{transform: `translateX(-${currentIndex * 100}%)`}}>
            {props.projectsContent.map((item) => (
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
      <ProjectsCarousel projectsArray={ props.projectsContent[currentIndex].projectsArray }/>
    </div>

  );
}

export default ProjectsCategoryNavigation;