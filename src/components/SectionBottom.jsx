
import './SectionBottom.css'

const SectionBottom = () => {
    return (
        <div>
            <div id='Contact-me' className="landing" style={{backgroundColor:"#141414", display:'flex', paddingTop:"50px", flexDirection:"column", alignItems:"center"}}>
                <h1 style={{color:"#F4413D"}}>Moderzine your business!</h1>
                <p style={{color:'white', padding: "20px"}}>In a world that never stops evolving, having a basic website isn’t enough anymore. I create high-performance digital solutions that turn visitors into customers and ideas into reality. Whether you're looking to automate processes, increase your reach, or build a stunning brand presence, let’s build the future of your company together.</p>

                

                <button className="btn-skills" style={{alignSelf:"center"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                </svg>
                <p style={{color:"#141414", fontSize:"15px", fontFamily:"'Noto Sans'", fontWeight:"bold"}}>Contact-me</p>
                </button>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F4413D" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,218.7C384,256,480,256,576,224C672,192,768,128,864,122.7C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            </div>
        </div>
    )
}

export default SectionBottom