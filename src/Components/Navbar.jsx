import "../style/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">Home</li>
                <li className="navbar-item">Projects</li>
                <li className="navbar-item">About</li>
                <li className="navbar-item">Contact</li>
            </ul>
        </nav>
    );
};
export default Navbar;