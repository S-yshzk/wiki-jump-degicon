import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
    return (
        <div className="header">
            <div className="hero is-primary hero-body">
                <p className="title">
                    WikiJump
                </p>
                <nav><Link to="/"><FontAwesomeIcon icon={faRightToBracket} />最初から始める</Link></nav>
            </div>
        </div>
    )
}

export default Header;