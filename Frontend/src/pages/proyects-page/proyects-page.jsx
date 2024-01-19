import Proyects from "../../components/proyects/proyects";
import RandomQuoteResolver from "../../components/resolve-word/resolve-word";

//css
import './proyects-page.css';

const ProyectsPage = () => {
    return (
        <div className="proyects-page main-background">
            <RandomQuoteResolver resolveWord="Proyects" />
            <Proyects />
        </div>
    );
};

export default ProyectsPage;
