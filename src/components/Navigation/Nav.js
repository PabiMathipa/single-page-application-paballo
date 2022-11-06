import { useState } from "react";
import React from "react";
import NavStrips from "./NavStrips";
import NavEmail from "./NavEmail";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import Whiteham from "../../assets/img/strips-white.png";
import WhiteXham from "../../assets/img/x-ham-white.png";
import NavSocial from "./NavSocial";

const Nav = () => {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const ref = React.useRef();
    function ToggleMenu() {
        hiddenMenu
            ? setHiddenMenu(false) || (ref.current.src = WhiteXham)
            : setHiddenMenu(true) || (ref.current.src = Whiteham);
    }
    function closeMenu() {
        setHiddenMenu(true) || (ref.current.src = Whiteham);
    }
    return (
        <article className="side-menu">
            <NavStrips ToggleMenu={ToggleMenu} ref={ref} />
            <section className={`main-menu${hiddenMenu ? `` : ` active-menu`}`}>
                <NavLogo closeMenu={closeMenu} />
                <NavMenu closeMenu={closeMenu} />
                <NavSocial />
                <NavEmail />
            </section>
        </article>
    );
};

export default Nav;
