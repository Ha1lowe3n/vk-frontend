import React from "react";

import styles from "./Bell.module.scss";

import { BellIcon } from "../../Icons";

export const Bell: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <BellIcon />
        </div>
    );
};
