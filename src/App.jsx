import React from 'react'
import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import Content from './Content.jsx'
import ProjectsCarousel from './ProjectsCarousel.jsx'
import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx'
import IntroMessage from './IntroMessage.jsx'
import { navBarObjects } from './objects.js'
import Experience from './Experience.jsx'


function contentToRender(navOption){
  const content = navOption.content;
  if (navOption === -1){
    return (
      <React.Fragment>
        <IntroMessage aboutMeContent= {"Hi, I'm Alie! Please click one of the buttons above to learn more about me :)"}/>
      </React.Fragment>
    )
  }
  if (navOption.objectId === 0){
    return (
      <React.Fragment>
        <IntroMessage aboutMeContent= {content}/>
      </React.Fragment>
    )
  }
  else if (navOption.objectId === 1){
    return (
      <React.Fragment>
        <ProjectsCategoryNavigation projectsContent={ content }/>
      </React.Fragment>
    )
  }
  else if (navOption.objectId === 2){
    return (
      <React.Fragment>
        <Experience experienceContentArray={ content }/>
      </React.Fragment>
    )
  }
}
function App() {

  const [selectedNavOption, setselectedNavOption] = useState(null);

  const handleClick = (item) => {
    setselectedNavOption(item);
  };

  return(
    <React.Fragment>
      <div className='non-mobile'>
        <h2 className='non-mobile-text'>Web Page Currently Available only on Mobile Devices! We'll be Up and Running Soon :)</h2>
      </div>
      <div className='container'>
        <div className='heading-container'>
          <h1 className='heading'>
            Alie Antar
          </h1>
        </div>
        <NavigationBar onClick={handleClick}/>
        
        <div className='content-container'>
          {selectedNavOption === null ? contentToRender(-1) : contentToRender(selectedNavOption)}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
