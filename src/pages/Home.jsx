import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
    return <>
        <header>        
            {/* Import Header here */}
        </header>

        <h1>Home Page</h1>
        <br/>
        <Link to="/roles">Roles Page</Link>
        <br/>
        <Link to="/questions">Questions Page</Link>
        
        <footer>
            {/* Import Footer here */}
        </footer>

    </>
}