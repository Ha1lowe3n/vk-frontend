import React from "react";

import styles from "./Header.module.scss";

import { InputSearch } from "./Input/Input";
import { LogoIcon, ProfileSettingsArrowIcon } from "../Icons";
import { Bell } from "./Bell/Bell";
import { MusicPlayer } from "./MusicPlayer/MusicPlayer";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <ul className={styles.list}>
                    <li className={styles.logo}>
                        <LogoIcon />
                    </li>
                    <li className={styles.input}>
                        <InputSearch />
                    </li>
                    <li className={styles.bell}>
                        <Bell />
                    </li>
                    <li className={styles.musicPlayer}>
                        <MusicPlayer />
                    </li>
                    <li className={styles.rightSide}>
                        <div className={styles.catalogWrapper}>
                            <img
                                src="https://vk.com/images/ecosystem_navigation_menu.svg"
                                alt="catalog icon"
                            />
                        </div>
                        <div className={styles.profileWrapper}>
                            <img
                                src="https://sun1-90.userapi.com/s/v1/ig2/bSHcDRplZjBsy2vvEJd1tOGzUDbwAzRK_cNcRf_stSl-JXvVpiDIJjlEqVg3nRWVgniCryDoopd9NS1vgYnlpy1P.jpg?size=50x50&quality=96&crop=131,28,440,440&ava=1"
                                alt="profile avatar"
                            />
                            <div className={styles.arrow}>
                                <ProfileSettingsArrowIcon />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};
