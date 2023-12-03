import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Proyects from '../pages/proyects/proyects';
import Home from '../pages/home/home';
import Navbar from '../components/navbar/navbar';


//Se crean las rutas para la aplicación
const AppRoutes = () => {

    return (
        <div id='main-background'>
        <BrowserRouter>
        < Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/proyects" element={<Proyects />} />
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default AppRoutes