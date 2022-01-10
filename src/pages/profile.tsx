import React from "react";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Navbar />
            </div>
        </>
    );
};

export default ProfilePage;
