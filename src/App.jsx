import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import Content from './Content.jsx'
import ProjectsCarousel from './ProjectsCarousel.jsx'
import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx'
import IntroMessage from './IntroMessage.jsx'
import { navBarObjects } from './objects.js'


function contentToRender(navOption){
  if (navOption.objectId === 1){
    const projectsContent = navOption.content;
    // console.log(projectsContent); 
    return (
    <div className='projects-collection'>
      <ProjectsCategoryNavigation projectsContent={ projectsContent }/>
      {/* <ProjectsCarousel/> */}
    </div>)
  }
}
function App() {

  const [selectedNavOption, setselectedNavOption] = useState({});

  const handleClick = (item) => {
      // console.log(event.target.value);
    setselectedNavOption(item);
  };

  return(
    <div className='container'>
      <div className='heading-container'>
        <h1 className='heading'>
          Alie Antar
        </h1>
        {/* <img className='heading-image' src='/assets/SVGs/heading.svg'></img> */}
      </div>
      <NavigationBar onClick={handleClick}/>
      
      <div className='content-container'>
        {contentToRender(selectedNavOption)}
      </div>
    </div>
  )
}

export default App;
