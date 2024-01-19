import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Navbar from '../components/navbar/navbar';
import ProyectsPage from '../pages/proyects-page/proyects-page';
import ContactPage from '../pages/contact/contact-page';


//Se crean las rutas para la aplicación
const AppRoutes = () => {

    return (
        <div id='main-background'>
        <BrowserRouter>
        < Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/proyects" element={<ProyectsPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default AppRoutes