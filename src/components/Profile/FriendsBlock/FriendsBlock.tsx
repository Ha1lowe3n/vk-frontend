import clsx from "clsx";
import React from "react";
import { Divider } from "../../WhiteBlock/Divider/Divider";
import { WhiteBlock } from "../../WhiteBlock/WhiteBlock";
import { WhiteBlockInfo } from "../../WhiteBlock/WhiteBlockInfo/WhiteBlockInfo";

import styles from "./FriendsBlock.module.scss";
import { Person } from "./Person/Person";

const dataPersons = [
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        name: "Vladilen",
    },
];

export const FriendsBlock: React.FC = () => {
    return (
        <WhiteBlock className={clsx("page_block", styles.friendsBlock)}>
            <WhiteBlockInfo title={"Friends"} count={100} />
            <div className={styles.friends}>
                {dataPersons.map((person, i) => (
                    <Person key={i} src={person.src} name={person.name} />
                ))}
            </div>

            <Divider />

            <WhiteBlockInfo title={"Friends online"} count={15} />
            <div className={styles.friends}>
                {dataPersons.map((person, i) => (
                    <Person key={i} src={person.src} name={person.name} />
                ))}
            </div>
        </WhiteBlock>
    );
};
