import AboutView from "./AboutView";
import HeaderView from "./HeaderView";
import { Footer } from "../../components";
import ScrollButton from "../../components/ScrollButton";

const Mainpage = () => {
    document.title = "Paballo Mathipa | Personal Portfolio";
    return (
        <article className="main-page">
            <HeaderView />
            <AboutView />
            <ScrollButton />
            <Footer />
        </article>
    );
};

export default Mainpage;