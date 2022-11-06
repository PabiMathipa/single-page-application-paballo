import Linkedin from "../../assets/img/linkedin-pink.svg";
import Github from "../../assets/img/github-pink.svg";
const NavSocial = () => {
    return (
        <section className="social-media">
            <a
                href="https://www.linkedin.com/in/paballo-mathipa-b4a64ab2//"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Linkedin} alt="linkedin" />
            </a>
            <a
                href="https://github.com/PabiMathipa"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Github} alt="github" />
            </a>
        </section>
    );
};

export default NavSocial;
