import {content} from './objects.js'

function Content() {
    return (

        <p className='about-me-text' key={content[0].objectId}>
            {content[0].contentDisplay}
        </p>
    )
}

export default Content;