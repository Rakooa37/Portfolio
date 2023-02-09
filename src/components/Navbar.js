export default function Navbar(props){
    return(
        <div className="navbar" style = {{backgroundColor:props.color}}>
            <div className="navbar__links">
                <a href="#home"><div className="home__link">Home</div></a>
                <a href="#about-me"><div className="about-me__link">About</div></a>
                <a href="#projects"><div className="projects__link">Projects</div></a>
                <a href="#section4"><div className="section-4__link">Contact</div></a>
            </div>
        </div>
    )
}