import {navBarObjects} from './objects.js'

function NavigationBar(props){
    return (
        <div className='nav-buttons-container'>
            {navBarObjects.map((item) => {
                return (
                    <button className='nav-button' key={item.objectId} onClick={() => props.onClick(item)} value={item.objectId}>
                        {item.title}
                    </button>
                );
            })}
        </div>
    )
}

export default NavigationBar;