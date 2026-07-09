import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectGrid from './components/ProjectGrid'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <Contact />
      </main>
    </>
  )
}

export default App
