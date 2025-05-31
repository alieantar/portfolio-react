import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import Content from './Content.jsx'
import ProjectsCarousel from './ProjectsCarousel.jsx'
import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx'
import IntroMessage from './IntroMessage.jsx'


function App() {

  return(
    <div className='container'>
      <div className='heading-container'>
        <h1 className='heading'>
          Alie Antar
        </h1>
        {/* <img className='heading-image' src='/assets/SVGs/heading.svg'></img> */}
      </div>
      <NavigationBar/>
      
      <div className='content-container'>
        {/* <Content/> */}
        {/* <IntroMessage/> */}
        <div className='projects-collection'>
          <ProjectsCategoryNavigation/>
          <ProjectsCarousel/>
        </div>

        
      </div>
    </div>
  )
}

export default App;
