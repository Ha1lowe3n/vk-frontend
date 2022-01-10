import clsx from "clsx";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./WhiteBlock.module.scss";

interface WhiteBlockProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: React.ReactNode;
}

export const WhiteBlock: React.FC<WhiteBlockProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.whiteBlock, className)} {...props}>
            {children}
        </div>
    );
};
