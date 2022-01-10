import React from "react";

import styles from "./WhiteBlockInfo.module.scss";

interface WhiteBlockInfoProps {
    title: string;
    count: number;
}

export const WhiteBlockInfo: React.FC<WhiteBlockInfoProps> = ({
    title,
    count,
}) => {
    return (
        <div className={styles.whiteBlockInfo}>
            <span className={styles.title}>{title}</span>
            <span className={styles.count}>{count}</span>
        </div>
    );
};
