import ContactCard from "../../components/contact-card/contact-card"
import ParticleComponent from "../../components/particles/particles"
import "./contact-page.css"

const ContactPage = () => {
    return (
        <div className="contact-page">
            < ContactCard />
            <ParticleComponent />
        </div>
    )
}

export default ContactPage