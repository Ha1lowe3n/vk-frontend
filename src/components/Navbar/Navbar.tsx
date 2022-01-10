import React from "react";

import styles from "./Navbar.module.scss";

import {
    NavbarCallIcon,
    NavbarFriendsIcon,
    NavbarMessageIcon,
    NavbarNewsIcon,
    NavbarProfileIcon,
} from "../Icons";
import { NavbarItem } from "./NavbarItem/NavbarItem";

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <NavbarItem title={"My profile"}>
                    <NavbarProfileIcon />
                </NavbarItem>
                <NavbarItem title={"News"}>
                    <NavbarNewsIcon />
                </NavbarItem>
                <NavbarItem title={"Messages"}>
                    <NavbarMessageIcon />
                </NavbarItem>
                <NavbarItem title={"Calls"}>
                    <NavbarCallIcon />
                </NavbarItem>
                <NavbarItem title={"Friends"}>
                    <NavbarFriendsIcon />
                </NavbarItem>
            </ul>
        </nav>
    );
};
