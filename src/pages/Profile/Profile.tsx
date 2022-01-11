import React from "react";

import styles from "./Profile.module.scss";

import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import { AvatarBlock } from "../../components/Profile/AvatarBlock/AvatarBlock";
import { GiftsBlock } from "../../components/Profile/GiftsBlock/GiftsBlock";
import { FriendsBlock } from "../../components/Profile/FriendsBlock/FriendsBlock";
import { GroupsBlock } from "../../components/Profile/GroupsBlock/GroupsBlock";
import { Divider } from "../../components/WhiteBlock/Divider/Divider";
import { WhiteBlock } from "../../components/WhiteBlock/WhiteBlock";

const ProfilePage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className={styles.flex}>
                    <Navbar />
                    <div className={styles.column}>
                        <AvatarBlock />
                        <GiftsBlock />
                        <FriendsBlock />
                        <WhiteBlock className="page_block">
                            <GroupsBlock />
                            <Divider />
                        </WhiteBlock>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
