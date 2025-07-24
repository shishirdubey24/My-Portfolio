import './App.css'
import About from './components/About'
import Certifications from './components/Certifications'

import ContactDetails from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Projects from './components/Projects'
import Skill from './Components/Skill'
function App() {
  return (
   <>
     <div className="bg-gradient-to-b from-[#0a192f]  via-[#1e293b] to-[#1f2937] min-h-screen text-white">
   <Header/>
    <About/>
    <Skill/>
   <Projects/>
    <Education/>
     <Certifications/>
     <ContactDetails/>
   </div>
    
   </>
  )
}

export default App
