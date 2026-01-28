import Hero from './Component/Hero'
import Navbar from './Component/Navbar'
import ImageComponent from './Component/imageComponent'
import Footer from './Component/Footer'
import MiddleElement from './Component/MiddleElement'
import './App.css'

function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 [background:radial-gradient(70%_35%_at_50%_5%,#21394C_40%,#09090b_100%)]">
      <Navbar />
      <Hero />
      <ImageComponent />
      <MiddleElement />
      <Footer />
    </div>
  )
}

export default App
