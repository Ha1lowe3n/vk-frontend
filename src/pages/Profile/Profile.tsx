import React from "react";

import styles from "./Profile.module.scss";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { AvatarBlock } from "../../components/Profile/AvatarBlock/AvatarBlock";
import { GiftsBlock } from "../../components/Profile/GiftsBlock/GiftsBlock";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.flex}>
                    <Navbar />
                    <div className={styles.column}>
                        <AvatarBlock />
                        <GiftsBlock />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
