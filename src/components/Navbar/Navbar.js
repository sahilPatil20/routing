import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <div className="navbar-container">
            <div><h2><Link to="/">Routing</Link></h2></div>
            <div><Link to="/" >Home</Link></div>
            <div><Link to="/About" >About</Link></div>
            <div><Link to="/Contact" >Contact</Link></div>
        </div>
    </>
  )
}

export default Navbar