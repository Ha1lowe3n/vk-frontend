import React from "react";

import styles from "./VideoBlock.module.scss";

import { WhiteBlockInfo } from "../../WhiteBlock/WhiteBlockInfo/WhiteBlockInfo";
import { Video } from "./Video/Video";

export const VideoBlock: React.FC = () => {
    return (
        <div className={styles.videoBlock}>
            <WhiteBlockInfo title={"Videos"} count={208} />
            <div className={styles.videos}>
                <Video />
                <Video />
            </div>
        </div>
    );
};
