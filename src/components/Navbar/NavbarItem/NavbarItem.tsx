import React from "react";

import styles from "./NavbarItem.module.scss";

interface NavbarItemProps {
    title: string;
    children: React.ReactNode;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ title, children }) => {
    return (
        <li className={styles.item}>
            {children}
            <span>{title}</span>
        </li>
    );
};
