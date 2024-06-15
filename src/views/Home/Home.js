import Navbar from "../../components/Navbar/Navbar";
import "./Home.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
                <h2 className="heading">Home Page</h2>
            </div>

        </>
    )
}

export default Home