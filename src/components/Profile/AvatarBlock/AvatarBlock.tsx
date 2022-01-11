import React from "react";

import styles from "./AvatarBlock.module.scss";

import {
    ProfileAvatarBlockMemoriesIcon,
    ProfileAvatarBlockMoneyIcon,
    ProfileAvatarBlockStatisticIcon,
    ProfileAvatarBlockStoryArchiveIcon,
} from "../../Icons";
import { WhiteBlock } from "../../WhiteBlock/WhiteBlock";
import { Action } from "./Action/Action";

export const AvatarBlock: React.FC = () => {
    return (
        <WhiteBlock className={styles.avatarBlock}>
            <img
                src="https://sun1-90.userapi.com/s/v1/ig2/PmrlLYxn--gSMoo1nUfMITCVY5wYz-djtcuXV4y5tUmQjTAul3ir7cyU7zB9EtunB8Ts-eTLH7ojCrQ_LNMCNM5T.jpg?size=200x229&quality=96&crop=0,0,624,717&ava=1"
                alt="avatar"
            />
            <a href="#">
                <span>Edit</span>
            </a>
            <div className={styles.actions}>
                <Action title={"Page statistics"}>
                    <ProfileAvatarBlockStatisticIcon />
                </Action>
                <Action title={"Memories"}>
                    <ProfileAvatarBlockMemoriesIcon />
                </Action>
                <Action title={"Story archive"}>
                    <ProfileAvatarBlockStoryArchiveIcon />
                </Action>
                <Action title={"Money transfers"}>
                    <ProfileAvatarBlockMoneyIcon />
                </Action>
            </div>
        </WhiteBlock>
    );
};
