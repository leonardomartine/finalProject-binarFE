import "../css/main.css";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    return isLoggedIn ? (
        <>
            <div className="bg-nav">
                <Header />
            </div>
        </>
    ) : (
        <Navigate to = "/login" replace />
    );
}
