import Navbar from "../../components/Navbar/Navbar"
import "./About.css"

const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <img src="https://png.pngtree.com/png-vector/20190725/ourmid/pngtree-vector-information-icon-png-image_1577365.jpg" />
                <h2>About Page</h2>
            </div>
        </>
    )
}

export default About