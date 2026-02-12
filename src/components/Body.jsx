
import { motion } from 'framer-motion'
import "./Body.css"


const Body = (props) => {
    return (
        <motion.div id="Introduction"  style={{backgroundColor:"#141414", display:"flex", position:"relative", width:"100%", isolation:'isolate', borderBottom: "2px solid #F4413D"}}>
            <motion.section className="text-container" initial={{opacity: 0, x: -20}} animate={{opacity:1, x: 0}} transition={{ease: "easeOut", duration: 5, }}>

                
                <h1 style={{color:"white", fontSize:"60px"}}>Hey, i'm Enzo<strong style={{color:"#F4413D"}}>.</strong></h1>
                <span className="textI"style={{color:"white", fontSize:"30px"}}>
                I'm a <strong style={{color:"#F4413D"}}>Full Stack Developer</strong> 
                </span>

                <p className="textI">
                    I'm currently in my 5th semester in Petrolina, Brazil. I am passionate about technology and constantly seeking new challenges in the world of development. I focus on building efficient digital solutions, applying computing fundamentals to create modern and scalable interfaces.
                </p>


                <button className="btn-skills" onClick={() => props.onNavigate("Skills")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v5.59l-2.29-2.3-1.42 1.41L12 18.41l4.71-4.71-1.42-1.41L13 14.59V9z" fill="currentColor"/>
                </svg>
                <p style={{color:"#141414", fontSize:"15px", fontFamily:"'Noto Sans'", fontWeight:"bold"}}>Skills</p>
                    </button>

            </motion.section>

        <div className="container-patterns"></div>
        </motion.div>
    )
}

export default Body