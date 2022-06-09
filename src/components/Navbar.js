import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Your Grocery List</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/info">Info</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;