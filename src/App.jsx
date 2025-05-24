import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'
import Content from './Content.jsx'


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
        <Content/>
      </div>
    </div>
  )
}

export default App;
