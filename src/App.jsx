import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import "./index.css"

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}
export default App