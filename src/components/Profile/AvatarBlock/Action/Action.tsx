import React from "react";

import styles from "./Action.module.scss";

interface ActionProps {
    title: string;
    children: React.ReactNode;
}

export const Action: React.FC<ActionProps> = ({ title, children }) => {
    return (
        <div className={styles.action}>
            {children}
            <span>{title}</span>
        </div>
    );
};
