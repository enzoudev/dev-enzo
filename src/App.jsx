
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import SkillsComponent from './components/SkillsComponent.jsx'

import SectionBottom from './components/SectionBottom.jsx'

function App() {
  

  const scrollSection = (sectionID) => {
    const target = document.getElementById(sectionID)

    if(target) {
      target.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <>
  <Header onNavigate={scrollSection}/>
  <Body onNavigate={scrollSection}/>
  <SkillsComponent/>
  <SectionBottom/>
    </>
  )
}

export default App
