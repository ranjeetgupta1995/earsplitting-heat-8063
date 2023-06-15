import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Home/home";

function AllRouter () {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
            </Routes>
        </>
    )
};

export default AllRouter;