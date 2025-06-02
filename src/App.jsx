import React from 'react'
import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import Content from './Content.jsx'
import ProjectsCarousel from './ProjectsCarousel.jsx'
import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx'
import IntroMessage from './IntroMessage.jsx'
import { navBarObjects } from './objects.js'


function contentToRender(navOption){
  const content = navOption.content;
  console.log(content);
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
}
function App() {

  const [selectedNavOption, setselectedNavOption] = useState({});

  const handleClick = (item) => {
    setselectedNavOption(item);
  };

  return(
    <div className='container'>
      <div className='heading-container'>
        <h1 className='heading'>
          Alie Antar
        </h1>
      </div>
      <NavigationBar onClick={handleClick}/>
      
      <div className='content-container'>
        {contentToRender(selectedNavOption)}
      </div>
    </div>
  )
}

export default App;
