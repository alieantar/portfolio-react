import {navBarObjects} from './objects.js'

function NavigationBar(){
    return (
        <div className='nav-buttons'>
            {navBarObjects.map((item) => {
                return (
                    <button className='nav-button' key={item.objectId}>
                        {item.title}
                    </button>
                );
            })}
      </div>
    )
}

export default NavigationBar;