import React from "react";

import styles from "./MusicPlayer.module.scss";

import {
    MusicPlayerArrowLeftIcon,
    MusicPlayerArrowRightIcon,
    MusicPlayerPlayIcon,
} from "../../Icons";

export const MusicPlayer: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.btns}>
                <button>
                    <MusicPlayerArrowLeftIcon />
                </button>
                <button>
                    <MusicPlayerPlayIcon />
                </button>
                <button>
                    <MusicPlayerArrowRightIcon />
                </button>
            </div>

            <div className={styles.title}>Fame On Fire — Old Town Road</div>
        </div>
    );
};
