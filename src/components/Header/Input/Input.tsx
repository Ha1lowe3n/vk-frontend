import React from "react";

import styles from "./Input.module.scss";

export const InputSearch: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <input type="text" placeholder="Search" />
        </div>
    );
};
