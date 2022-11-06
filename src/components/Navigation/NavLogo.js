import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/img/Icon.jpg";
import Reset from '../../handler/Reset'

const NavLogo = (props) => {
    return (
        <NavLink
            to="/"
            className="logo-section"
            onClick={() => {
                Reset();
                props.closeMenu();
            }}
        >
            <img src={IconBlack} alt="logo"></img>
        </NavLink>
    );
};

export default NavLogo;
