import { useState } from 'react'
import './App.css'
import NavigationBar from './NavigationBar.jsx'


function App() {

  return(
    <div className='container'>
      <div className='heading'>
        <img className='heading-image' src='/assets/SVGs/heading.svg'></img>
      </div>
      <NavigationBar/>
    </div>
  )
}

export default App
