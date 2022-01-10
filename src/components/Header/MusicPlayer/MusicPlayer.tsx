import React from "react";

import styles from "./MusicPlayer.module.scss";

import {
    MusicPlayerArrowLeftIcon,
    MusicPlayerArrowRightIcon,
    MusicPlayerPauseIcon,
    MusicPlayerPlayIcon,
} from "../../Icons";

interface MusicPlayerPropsType {
    play: boolean;
    trackTitle: string;
    togglePlay: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerPropsType> = ({
    play,
    trackTitle,
    togglePlay,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.btns}>
                    <button>
                        <MusicPlayerArrowLeftIcon />
                    </button>
                    <button onClick={togglePlay}>
                        {!play ? (
                            <MusicPlayerPlayIcon />
                        ) : (
                            <MusicPlayerPauseIcon />
                        )}
                    </button>
                    <button>
                        <MusicPlayerArrowRightIcon />
                    </button>
                </div>

                <div className={styles.title}>{trackTitle}</div>
            </div>
        </div>
    );
};
