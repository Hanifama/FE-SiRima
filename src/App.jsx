import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/Navbar"
import PortalComponent from "./components/PortalHome"
import News from "./components/News"
import Activity from "./components/Activity"
import Service from "./components/Service"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './index.css'
Route

function App() {
  return(
    <>    
    <NavbarComponent/>
    <PortalComponent/>
    <News/>
    <Activity/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
