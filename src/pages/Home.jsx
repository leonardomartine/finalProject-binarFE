import "../css/main.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/NavBar";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return isLoggedIn ? (
        <>
            <div className="bg-nav">
                <Navbar />
            </div>

        </>
    ) : (
        <Navigate to="/login" replace />
    );
}
