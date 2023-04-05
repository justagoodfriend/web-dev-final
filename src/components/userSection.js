import React from "react";
import Button from "./button";

const UserSection = ({
    active = "Home"
                     }) => {
  return (
    <div className="col-3 pt-3 ps-4 bg-purple">
      <div className="row align">
        <div className="col-auto">
          <img src={`/images/profile-empty.jpeg`} alt="..."
               className="profile-pic rounded mb-2"/>
        </div>

        <div className="col">
          <h2 className="text-white m-0">Hi Guest!</h2>
          <div className="login-navbar text-white">
            <a className="text-white remove-underline small-font" href="./register">Sign Up</a> | <a
              className="text-white remove-underline small-font" href="./login">Log In</a>
          </div>
        </div>
      </div>

      <div className="input-group mb-3 opacity-50 pt-4">
        <span className="input-group-text no-border bg-dark"><i className="bi bi-search text-white"></i></span>
        <input type="text" className="form-control bg-dark text-white no-border" placeholder="Search"
               aria-label="Search"/>
      </div>
      <nav>
        <h5 className="text-white">Categories</h5>
        <ul className="list-group">
            <Button active={active} href="/*" title="Home" icon="bi bi-house-door-fill text-white pe-3 fs-5"/>
            <Button active={active} href="/profile" title="Profile" icon="bi bi-person-fill-gear text-white pe-3 fs-5"/>
            <Button active={active} href="/*" title="Women" icon="bi bi-brightness-high-fill text-white pe-3 fs-5"/>
            <Button active={active} href="/*" title="Men" icon="bi bi-moon-fill text-white pe-3 fs-5"/>
            <Button active={active} href="/*" title="Kids" icon="bi bi-cart-fill text-white pe-3 fs-5"/>
            <Button active={active} href="/*" title="Sale" icon="bi bi-wallet-fill text-white pe-3 fs-5"/>
        </ul>
      </nav>
    </div>
  );
};

export default UserSection;
