import { Link } from 'react-router-dom';

/**
 * Pupsupport home resource page 
 */
function Resources() {
    // Related functions here

    // HTML/React components here to render page
    return (
        <div>
            {/* Sam, replace this with your resources code */}
            <p>This is the resources page</p>
            
            {/* example of how linking will work */}
            <Link to='/videos'>Videos</Link>
        </div>
    );
}

export default Resources;