import {navBarObjects} from './objects.js'

function NavigationBar(){
    return (
        <div className='nav-buttons'>
            {navBarObjects.map((item) => {
                return (
                    <button className='nav-button' key={item.objectId}>
                    <img src={item.image_url} className='button-img'>
                    </img>
                    </button>
                );
            })}
      </div>
    )
}

export default NavigationBar;