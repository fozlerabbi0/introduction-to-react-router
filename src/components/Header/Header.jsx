import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <nav>
            <span>My Website</span>
                <Link to="/Home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/Posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
            </nav>
        </div>
    );
};

export default Header;