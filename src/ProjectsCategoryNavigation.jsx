import { useState } from 'react';
import ProjectsCarousel from './ProjectsCarousel';

function ProjectsCategoryNavigation(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? props.projectsContent.length - 1 : prev - 1));
  };

  const moveForward = () => {
    setCurrentIndex((prev) => (prev === props.projectsContent.length - 1 ? 0 : prev + 1));
  };
  // console.log("Category is: ", currentIndex);
  // console.log("projects for selected category: ", props.projectsContent[currentIndex]);
  return (
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
      <ProjectsCarousel projectsArray={ props.projectsContent[currentIndex].projectsArray }/>
    </div>
  );
}

export default ProjectsCategoryNavigation;