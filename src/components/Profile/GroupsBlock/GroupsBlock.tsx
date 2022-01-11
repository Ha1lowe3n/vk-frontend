import React from "react";
import { WhiteBlockInfo } from "../../WhiteBlock/WhiteBlockInfo/WhiteBlockInfo";
import { Group } from "./Group/Group";

import styles from "./GroupsBlock.module.scss";

const dataGroups = [
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        title: "Vladilen",
        description: "hello",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        title: "Vladilen",
        description: "hello",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        title: "Vladilen",
        description: "hello",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        title: "Vladilen",
        description: "hello",
    },
    {
        src: "https://sun1-55.userapi.com/s/v1/ig2/4AmTw3rdunMJaSLZppSACbdzwsYy-w5fhHszb-fvHFLvv9ea2fe5yrcJE8K_3BsCsJv5MAlWYJRwyIpsB_5SCN9J.jpg?size=50x50&quality=96&crop=0,145,989,989&ava=1",
        title: "Vladilen",
        description: "hello",
    },
];

export const GroupsBlock: React.FC = () => {
    return (
        <div className={styles.groupsBlock}>
            <WhiteBlockInfo title={"Following"} count={60} />
            <div className={styles.groups}>
                {dataGroups.map((group, i) => (
                    <Group
                        key={i}
                        style={i > 0 ? { marginTop: "10px" } : undefined}
                        title={group.title}
                        description={group.description}
                        groupAvatar={group.src}
                    />
                ))}
            </div>
        </div>
    );
};
