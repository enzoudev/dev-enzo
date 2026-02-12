import './SkillsComponent.css'
import {easeInOut, motion} from 'framer-motion'


import SkillsCarousel from './SkillsCarousel.jsx'

const SkillsComponent = () => {
    return (
        <div id='Skills' style={{backgroundColor:"#141414", height:"300px", borderBottom: "2px solid #F4413D"}}>
            <div id="skills-container" style={{paddingTop:"50px", paddingBottom:"70px"}}>
                <motion.h1 className='titleH' initial={{x: 50, opacity: 0.5}} animate={{x:0, opacity:1}} transition={{ease: easeInOut, duration: 3}} style={{color:"#F4413D", margin: '0 auto'}}>My Skills:</motion.h1>

                <SkillsCarousel/>
            </div>
        </div>
    )

}

export default SkillsComponent