import React, { useState } from "react";

import styles from "./MusicBlock.module.scss";

import { WhiteBlockInfo } from "../../WhiteBlock/WhiteBlockInfo/WhiteBlockInfo";
import { Track } from "./Track/Track";

export const MusicBlock: React.FC = () => {
    const [currentTrack, setCurrentTrack] = useState<number>(0);
    const [currentPlay, setCurrentPlay] = useState<number>(0);

    const changeCurrentTrack = (n: number) => setCurrentTrack(n);
    const changeCurrentPlay = (n: number) =>
        setCurrentPlay((state) => {
            if (state === n) {
                return 0;
            }
            return n;
        });

    return (
        <div>
            <WhiteBlockInfo title="Music" count={980} />
            <div className={styles.tracks}>
                <Track
                    urlImg={"https://i.imgur.com/FDvVliP.jpg"}
                    titleTrack={"ratata"}
                    titleGroup="yellow"
                    currentTrack={currentTrack === 1}
                    changeCurrentTrack={changeCurrentTrack}
                    currentPlay={currentPlay}
                    changeCurrentPlay={changeCurrentPlay}
                    number={1}
                />
                <Track
                    urlImg={"https://i.imgur.com/FDvVliP.jpg"}
                    titleTrack={"ratata"}
                    titleGroup="yellow"
                    currentTrack={currentTrack === 2}
                    changeCurrentTrack={changeCurrentTrack}
                    currentPlay={currentPlay}
                    changeCurrentPlay={changeCurrentPlay}
                    number={2}
                />
                <Track
                    urlImg={"https://i.imgur.com/FDvVliP.jpg"}
                    titleTrack={"ratata"}
                    titleGroup="yellow"
                    currentTrack={currentTrack === 3}
                    changeCurrentTrack={changeCurrentTrack}
                    currentPlay={currentPlay}
                    changeCurrentPlay={changeCurrentPlay}
                    number={3}
                />
            </div>
        </div>
    );
};
