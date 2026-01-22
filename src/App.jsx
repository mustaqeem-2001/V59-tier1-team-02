import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/questions" element={<Questions />} />
            </Routes>
        </>
    )
}