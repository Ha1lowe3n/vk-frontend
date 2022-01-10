import React from "react";
import { WhiteBlock } from "../../WhiteBlock/WhiteBlock";
import { WhiteBlockInfo } from "../../WhiteBlock/WhiteBlockInfo/WhiteBlockInfo";

import styles from "./GiftsBlock.module.scss";

export const GiftsBlock: React.FC = () => {
    return (
        <WhiteBlock className={styles.giftsBlock}>
            <WhiteBlockInfo title={"Gifts"} count={105} />
            <div className={styles.gifts}>
                <img src="https://vk.com/sticker/4-1360-96" alt="Team Spirit" />
                <img src="https://vk.com/sticker/4-540-96" alt="VK Music" />
                <img src="https://vk.com/images/gift/1143/96.png" alt="Cake" />
            </div>
        </WhiteBlock>
    );
};
