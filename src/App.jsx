import { useState } from 'react'
import './App.css'
import {navBarObjects} from './objects.js'


// function NavBarItems(){
//   return (
//     <div className='nav-item'>

//     </div>
//   );
// }

function App() {

  return(
    <div className='container'>
      <div className='heading'>
        <img className='heading-image' src='/assets/SVGs/heading.svg'></img>
      </div>
      <div className='nav-buttons'>
        {navBarObjects.map((item) => {
          return (
            <button className='nav-button' key={item.objectId}>
              <img src={item.image_url} className='button-img'>
              </img>
            </button>
          );
        })}
        {/* <NavBarItems/> */}
      </div>
    </div>
  )
}

export default App
