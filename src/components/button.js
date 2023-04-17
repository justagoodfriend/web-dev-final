import React from "react";

const Button = (
    {
        active = "",
        href="",
        title = "",
        icon = ""
    }) => {

    if (active === title) {
        return (
            <a href={href} className="list-group-item active no-background">
                <i className={icon}></i>
                {title}
            </a>);
    } else {
        return (
            <a href={href} className="list-group-item no-background text-white">
                <i className={icon}></i>
                {title}
            </a>);
    }
};
export default Button;