import './App.css'
import About from './components/About'
import Certifications from './components/Certifications'

import ContactDetails from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Projects from './components/Projects'
import Skill from './components/Skill'

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
