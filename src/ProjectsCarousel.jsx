import { useState } from 'react';

function ProjectsCarousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? props.projectsArray.length - 1 : prev - 1));
  };

  const moveForward = () => {
    setCurrentIndex((prev) => (prev === props.projectsArray.length - 1 ? 0 : prev + 1));
  };
  console.log(props.projectsArray);
  return (
    <div className="carousel">
        <div className="carousel-window">
            <div className="carousel-track" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                {props.projectsArray.map((item) => (
                    <div className="slide" key={item.objectId}>
                      <div className='project-card'>
                        <a className='project-title' href={item.URL}>{item.title}</a>
                        <div className="project-description-container">
                          <p className='project-description'>{item.description}</p>
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