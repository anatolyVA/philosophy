import React from "react";
import "./style.css";
import classNames from "classnames";

type Props = {
    children?: React.ReactNode;
    className: string;
    onClick?: (e: React.MouseEvent) => void;
    href?: string;
    disabled?: boolean;
};

function Button({ children, className, onClick, disabled, ...attrs }: Props) {
    const Tag = attrs.href ? "a" : "button";

    return (
        <Tag className={className} disabled={disabled} onClick={onClick}>
            {children}
        </Tag>
    );
}

export default Button;
