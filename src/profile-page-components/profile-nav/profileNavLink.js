import React from "react";

const ProfileNavLink = (
    {
        active = "",
        href="",
        title = ""
    }) => {

    if (active === title) {
        return (
            <a className="nav-link active text-decoration-underline text-black custom-underline" aria-current="page" href={href}>
                <h5>{title}</h5>
            </a>);
    } else {
        return (
            <a className="nav-link text-secondary" href={href}>
                <h5>{title}</h5>
            </a>);
    }
};
export default ProfileNavLink;