import Proyects from "../../components/proyects/proyects";
import RandomQuoteResolver from "../../components/resolve-word/resolve-word";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";

//css
import './proyects-page.css';
import Footer from "../../components/footer/footer";

const ProyectsPage = () => {
    return (
        <div className="proyects-page main-background">
            <RandomQuoteResolver className="word-resolved" resolveWord="@PROJECTS( )" />
            <Proyects />
            <ul className="circles">
                <li><img src={typescript} alt="" id="circular-image-1" /></li>
                <li><img src={javascript} alt="" id="circular-image-2" /></li>
                <li></li>
                <li><img src={typescript} alt="" id="circular-image-3" /></li>
                <li></li>
                <li><img src={javascript} alt="" id="circular-image-4" /></li>
                <li></li>
                <li><img src={typescript} alt="" id="circular-image-5" /></li>
                <li><img src={javascript} alt="" id="circular-image-6" /></li>
                <li><img src={javascript} alt="" id="circular-image-7" /></li>
                {/* Se añaden 5 mas burbujas */}
                <li><img src={typescript} alt="" id="circular-image-8" /></li>
                <li><img src={javascript} alt="" id="circular-image-9" /></li>
                <li><img src={javascript} alt="" id="circular-image-10" /></li>
                <li><img src={typescript} alt="" id="circular-image-11" /></li>
                <li><img src={javascript} alt="" id="circular-image-12" /></li>
            </ul>
            < Footer />
        </div>
    );
};

export default ProyectsPage;
