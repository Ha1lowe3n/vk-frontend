import clsx from "clsx";
import React, { useState } from "react";

import styles from "./Track.module.scss";

interface TrackProps {
    titleTrack: string;
    titleGroup: string;
    urlImg: string;
    currentTrack: boolean;
    number: number;
    currentPlay: number;
    changeCurrentPlay: (n: number) => void;
    changeCurrentTrack: (n: number) => void;
}

export const Track: React.FC<TrackProps> = ({
    titleTrack,
    titleGroup,
    urlImg,
    currentTrack,
    number,
    currentPlay,
    changeCurrentPlay,
    changeCurrentTrack,
}) => {
    const [showPlayIcon, setShowPlayIcon] = useState(false);

    const onMouseEnter = () => {
        setShowPlayIcon(true);
    };
    const onMouseLeave = () => {
        setShowPlayIcon(false);
    };
    const togglePlay = () => {
        if (!currentTrack) {
            changeCurrentTrack(number);
        }

        changeCurrentPlay(number);
    };

    const darkImage = (showPlayIcon || currentTrack) && (
        <div className={styles.darkImg}></div>
    );
    const playIcon = showPlayIcon && <div className={styles.playIcon}></div>;
    const pauseIcon = showPlayIcon && <div className={styles.pauseIcon}></div>;
    const content = currentTrack
        ? !currentPlay
            ? playIcon
            : pauseIcon
        : playIcon;

    return (
        <div
            className={clsx(
                styles.track,
                (showPlayIcon || currentTrack) && styles.gray
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={togglePlay}
        >
            <div
                className={styles.trackImg}
                style={{
                    backgroundImage: `url(${urlImg})`,
                }}
            >
                {darkImage}
                {content}
            </div>
            <div className={styles.trackInfo}>
                <a href="#" className={clsx("link_text", styles.titleTrack)}>
                    {titleTrack}
                </a>
                <a href="#" className={clsx("link_text", styles.titleGroup)}>
                    {titleGroup}
                </a>
            </div>
        </div>
    );
};
