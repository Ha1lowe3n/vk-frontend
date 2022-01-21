import React from "react";

import styles from "./Person.module.scss";

interface PersonProps {
    src: string;
    name: string;
}

export const Person: React.FC<PersonProps> = ({ src, name }) => {
    return (
        <div className={styles.person}>
            <a href="#" className={styles.imgRow}>
                <img src={src} alt="person avatar" />
            </a>

            <a href="#" className={"link_text"}>
                {name}
            </a>
        </div>
    );
};
