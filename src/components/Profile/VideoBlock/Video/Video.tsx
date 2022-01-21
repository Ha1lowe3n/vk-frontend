import clsx from "clsx";
import React from "react";

import styles from "./Video.module.scss";

export const Video: React.FC = () => {
    return (
        <div className={styles.video}>
            <a href="#">
                <div
                    className={styles.videoImg}
                    style={{
                        backgroundImage:
                            "url('https://i.imgur.com/FDvVliP.jpg')",
                    }}
                >
                    <div
                        className={styles.videoPlayIcon}
                        data-testid="videoPlayIcon"
                    ></div>
                </div>
            </a>

            <a href="#" className={clsx("link_text", styles.videoTitle)}>
                Вот что делают монстры под кроватью
            </a>
        </div>
    );
};
