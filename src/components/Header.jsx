import { useRef, useState } from "react"
import { motion } from 'framer-motion'

import "./Header.css" 


const Header = (props) => {
const [hoveredIcon, setHoveredIcon] = useState(null);
const [selectedNav, setSelected] = useState('Introduction')
const itensNav = ['Introduction', 'Skills', 'Contact-me']
const defaultColor = "#808082"
const HoveredColor = "#F4413D"

const getColor = (hoveredIcon, iconName, HoveredColor, defaultColor) => {
    return hoveredIcon === iconName ? HoveredColor : defaultColor
}

const redirectSite = (URL) => {
    window.open(URL, '_blank');
}


    return(
        <div className="head" style={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>


            <nav>
            <motion.ul style={{listStyle:"none", display:"flex", gap:"10px"}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeOut", duration: 5}}>


                <li onClick={() => redirectSite("https://github.com/enzoudev")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHoveredIcon('gitHub')} onMouseLeave={() => setHoveredIcon(null)} style={{color: getColor(hoveredIcon, 'gitHub', HoveredColor, defaultColor), cursor:"pointer", transition: "400ms" }}>
                <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="currentColor"></path>
                </svg>


                </li>
                

                <li onClick={() => redirectSite("https://www.linkedin.com/in/enzo-gabriel-2a51b021a/")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHoveredIcon('linkedln')} onMouseLeave={() => setHoveredIcon(null)} style={{color: getColor(hoveredIcon, 'linkedln', HoveredColor, defaultColor), cursor: "pointer", transition: "400ms" }}>
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor"/>
                </svg>
                </li>
                

                <li onClick={() => redirectSite("https://www.instagram.com/enzoqwc/")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#none" xmlns="http://www.w3.org/2000/svg" onMouseEnter={() => setHoveredIcon('insta')} onMouseLeave={() => setHoveredIcon(null)} style={{color: getColor(hoveredIcon, 'insta', HoveredColor, defaultColor), cursor:"pointer", transition: "400ms" }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.217.96.477 1.38.897.42.42.68.82.897 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.56-.477.96-.897 1.38-.42.42-.82.68-1.38.897-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.217-.96-.477-1.38-.897-.42-.42-.68-.82-.897-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.56.477-.96.897-1.38.42-.42.82-.68 1.38-.897.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.79.307-1.46.717-2.127 1.384C1.346 2.68.937 3.35.63 4.14c-.297.765-.498 1.635-.558 2.913C.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.06 1.278.261 2.148.558 2.913.307.79.717 1.46 1.384 2.127.667.667 1.337 1.076 2.127 1.384.765.297 1.635.498 2.913.558C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.947-.072 1.278-.06 2.148-.261 2.913-.558.79-.307 1.46-.717 2.127-1.384.667-.667 1.076-1.337 1.384-2.127.297-.765.498-1.635.558-2.913.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.261-2.148-.558-2.913-.307-.79-.717-1.46-1.384-2.127C21.32 1.346 20.65.937 19.86.63c-.765-.297-1.635-.498-2.913-.558C15.667.014 15.259 0 12 0z" fill="currentColor"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="currentColor"/>
                <path d="M18.406 5.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" fill="currentColor"/>
                </svg>
                </li>

                
            </motion.ul>
            </nav>

            <motion.ul className="navbar" style={{listStyle:"none", display:"flex", gap: "20px", margin: "0 auto"}}>

            {itensNav.map((item) => (
                <li key={item}
                className={`liNAV ${selectedNav === item ? ' active' : ''}`}
                onClick={() => {setSelected(item)
                props.onNavigate(item)
                }}>{item}</li>
            ))}






            </motion.ul>
        </div>
    )
}

export default Header 



