import React from "react";

import styles from "./Profile.module.scss";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { AvatarBlock } from "../../components/Profile/AvatarBlock/AvatarBlock";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.flex}>
                    <Navbar />
                    <div className={styles.column}>
                        <AvatarBlock />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
