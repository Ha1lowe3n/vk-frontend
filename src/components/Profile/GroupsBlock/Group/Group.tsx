import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./Group.module.scss";

interface GroupProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    groupAvatar: string;
    title: string;
    description: string;
}

export const Group: React.FC<GroupProps> = ({
    groupAvatar,
    title,
    description,
    ...props
}) => {
    return (
        <div className={styles.group} {...props}>
            <a href="#">
                <img src={groupAvatar} alt="group avatar" />
            </a>

            <div className={styles.text}>
                <span className={styles.title}>
                    <a href="#" className="link_text">
                        {title}
                    </a>
                </span>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    );
};
