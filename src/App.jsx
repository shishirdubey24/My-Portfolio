import './App.css'
import About from './components/About'
import Certifications from './components/Certifications'

import ContactDetails from './components/Contact'
import Education from './components/Education'
import Header from './components/Header'
import Skill from './components/Skill'
import Projects from './components/Projects'
function App() {
  return (
   <>
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900"> 
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
