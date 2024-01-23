import ContactCard from "../../components/contact-card/contact-card"
import Footer from "../../components/footer/footer"
import ParticleComponent from "../../components/particles/particles"
import "./contact-page.css"

const ContactPage = () => {
    return (
        <div className="contact-page">
            < ContactCard />
            <ParticleComponent />
            <Footer />
        </div>
    )
}

export default ContactPage