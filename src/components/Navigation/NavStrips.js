import Whiteham from "../../assets/img/strips-white.png";
import React from "react";
const NavStrips = React.forwardRef((props, ref) => (
    <section className="ham-section">
        <img
            className="ham-menu"
            src={Whiteham}
            alt="hamburger menu"
            ref={ref}
            onClick={() => {
                props.ToggleMenu();
            }}
        ></img>
    </section>
));
export default NavStrips;
