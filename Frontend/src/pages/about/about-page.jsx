import Carrousel from "../../components/carrousel/carrousel";
import RandomQuoteResolver from "../../components/resolve-word/resolve-word";
import SetUp from "../../assets/setup.png";

import './about-page.css';
import Footer from "../../components/footer/footer";

const AboutPage = () => {
    return (
        <div className="about-page">
        <RandomQuoteResolver className="word-resolved" resolveWord="@ABOUT( )" />
        <br />
        <p class="tools-heading">-Tools I've used-</p>
        < Carrousel />
        <br />
        <h2 className="studies-title">My Studies( )</h2>
            <div className="studies-container">
                <div className="studies-list">
                <li>Computer Systems Engineering student.</li>
                <a href="https://www.utp.edu.co/">Universidad Tecnológica de Pereira (UTP)</a>
                <li>Fullstack developper by "The second bootcamp for fullstack". </li>
                <a href="https://www.utp.edu.co/">Universidad Tecnológica de Pereira (UTP)</a>
                <li>Backend python course</li>
                <a href="https://www.utp.edu.co/">Universidad Tecnológica de Pereira (UTP)</a>
                <li>GitHub Universe Cloud Skills Challenge</li>
                <a href="https://learn.microsoft.com/es-mx/training/challenges?id=ef5f9f41-0818-4895-9217-79d19827a322&ocid=GitHubUniv_CSC_event_nge">Microsoft</a>
                <p></p>
                </div>
            <img src={ SetUp } alt="Setup cube" className="setup-cube" />
            </div>
            <h2 className="services-title">My Services( )</h2>
            < Footer />
        </div>
    );
    }

export default AboutPage;