import './App.css'
import About from './Components/About'
import Certifications from './Components/Certifications'
import ContactDetails from './Components/Contact'
import Education from './Components/Education'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Skill from './Components/Skill'

function App() {

  return (
   <>
   <div >
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
