import { NavLink } from "react-router-dom";
import Reset from '../../handler/Reset'

const activeNavLink = ({ isActive }) =>
    "white-text nav-link" + (isActive ? " active" : "");

const NavMenu = (props) => {
    return (
        <section className="menu-links">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    "white-text nav-link" + (isActive ? " main-active" : "")
                }
                onClick={() => {
                    Reset();
                    props.closeMenu();
                }}
            >
                Main
            </NavLink>
            <NavLink
                to="/About"
                onClick={() => {
                    Reset();
                    props.closeMenu();
                }}
                className={activeNavLink}
            >
                About
            </NavLink>
        </section>
    );
};

export default NavMenu;
