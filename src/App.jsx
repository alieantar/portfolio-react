import React from 'react'
import { useState } from 'react'
import './App.css'
import './Contact.css'
import './Experience.css'
import './Projects.css'
import './AboutMe.css'
import NavigationBar from './NavigationBar.jsx'

import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx'
import AboutMe from './AboutMe.jsx'
import Experience from './Experience.jsx'
import Contact from './Contact.jsx'


function contentToRender(navOption){
  const content = navOption.content;
  if (navOption === -1){
    return (
      <React.Fragment>
        <AboutMe aboutMeContent= {"Hi, I'm Alie! Please click one of the buttons above to learn more about me :)"}/>
      </React.Fragment>
    )
  }
  if (navOption.objectId === 0){
    return (
      <React.Fragment>
        <AboutMe aboutMeContent= {content}/>
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
    else if (navOption.objectId === 3){
    return (
      <React.Fragment>
        <Contact contactObject={ navOption }/>
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
  )
}

export default App;
