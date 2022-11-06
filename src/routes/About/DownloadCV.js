import DownloadIcon from "../../assets/img/download-icon.webp";
import CV from "../../assets/document/Paballo-Mathipa.pdf";
const DownloadCV = () => {
    return (
        <section>
            <a className="download-btn" href={CV} download="Paballo-Mathipa">
                <img
                    src={DownloadIcon}
                    alt="Download icon"
                    className="download-img"
                ></img>
                Download Curriculum Vitae
            </a>
        </section>
    );
};

export default DownloadCV;
