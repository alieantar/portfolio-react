import { navBarObjects } from './objects.js'
import ProjectsCategoryNavigation from './ProjectsCategoryNavigation.jsx';

function Content(props) {
    const section = navBarObjects[props.contentNavIndex];
    return (
        <ProjectsCategoryNavigation projects={navBarObjects[props.contentNavIndex].content}/>
    )
}

export default Content;