import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/Navbar"
import PortalComponent from "./components/PortalHome"
import News from "./components/News"
import Activity from "./components/Activity"
import Service from "./components/Service"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './index.css'
import About from "./components/About"

Route

function App() {
  return(
    <div>    
    <NavbarComponent/>
    <PortalComponent/>
    <About/>
    <News/>
    <Activity/>
    <Service/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
