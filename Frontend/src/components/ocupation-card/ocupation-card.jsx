//imagen
import Programmer from "../../assets/programmer.jpeg";
import Reliable from "../../assets/reliable.png";

//estilos
import "./ocupation-card.css";

const OcupationCard = () => {
    return (
        <>
        <div className="ocupation-card">
        <div className="ocupation-card__image">
            <img src={Programmer} className="ocupation-card__image" alt="programmer image" />
        </div>
        
            <div className="ocupation-card__text">
                <div className="ocupation-title">
                    <h3 className="ocupation-title">Fullstack </h3>
                    <h3 className="ocupation-title add-title-color">developer</h3>
                </div>
                <div className="ocupation-cards">
                    {/* Tarjeta 1 */}
                    <div className="ocupation-card-facts card-1">
                        <div className="ocupation-card__text-1">
                            <span class="material-symbols-outlined icon-ocupation">
                            code_blocks
                            </span>
                            <h3 className="ocupation-title-card">Developer</h3>
                            <h3 className="ocupation-title-card add-title-color">Web</h3>
                            <p>
                                Expert in the development of both frontend and backend of web applications.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="ocupation-card-facts card-2">
                        <div className="ocupation-card__text-2">
                            <span class="material-symbols-outlined icon-ocupation">
                            api
                            </span>
                            <h3 className="ocupation-title-card">API Creator</h3>
                            <p>
                                Solid experience in designing and developing APIs to facilitate communication between the frontend and the backend.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="ocupation-card-facts card-3">
                        <div className="ocupation-card__text-3">
                            <span class="material-symbols-outlined icon-ocupation">
                            developer_board
                            </span>
                            <h3 className="ocupation-title-card">Frontend</h3>
                            <h3 className="ocupation-title-card add-title-color">Specialist</h3>
                            <p>
                                Specialization and advanced skills in creating and improving user interfaces (UI) to provide exceptional user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="ocupation-card-facts card-4">
                        <div className="ocupation-card__text-4">
                            <span class="material-symbols-outlined icon-ocupation">
                            deployed_code_account
                            </span>
                            <h3 className="ocupation-title-card">UI/UX Design</h3>
                            <p>
                                Ability to design and structure the architecture of the user interface (UI) and user experience (UX) with a focus on usability and aesthetics.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ocupation-background">
            <div className="second-title">
            <br />
                <h3 className="ocupation-title2">My recent </h3>
                <h3 className="ocupation-title2 add-title-color-1">work</h3>
            </div>
            <a href="https://www.1reliablelimo.com/"><img className="reliable" src={Reliable} alt="reliable luxury car limo" /></a>
        </div>
        </>
    );
    };

export default OcupationCard;
