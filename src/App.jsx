import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Offer from "./Components/Offer"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import Welcomebar from "./Components/Welcomebar"


function App() {
 

  return (
    <>
     <Welcomebar />
     <Navbar />
     <Home />
     <Services/>
     <Offer />
     <Projects />
     <Contact />
     <Footer/>
    </>
  )
}

export default App
