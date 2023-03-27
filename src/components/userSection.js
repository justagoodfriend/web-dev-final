import React from "react";

const UserSection = () => {
  return (
    <div>
      <div className="row align">
        <div className="col-auto">
          <img
            src="../images/profile-empty.jpeg"
            alt=""
            className="profile-pic rounded mb-2"
          />
        </div>

        <div className="col">
          <h2 className="text-white m-0">Hi Guest!</h2>
          <div className="login-navbar text-white">
            <a className="text-white remove-underline small-font" href="./register">
              Sign Up
            </a>{" "}
            |{" "}
            <a className="text-white remove-underline small-font" href="./login">
              Log In
            </a>
          </div>
        </div>
      </div>

      <div className="input-group mb-3 opacity-50 pt-4">
        <span className="input-group-text no-border bg-dark">
          <i className="bi bi-search text-white"></i>
        </span>
        <input
          type="text"
          className="form-control bg-dark text-white no-border"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <nav>
        <h5 className="text-white">Categories</h5>
        <ul className="list-group">
          <a href="./search/..." className="list-group-item active no-background">
            <i
                className="bi bi-house-door-fill
				 text-white pe-3 fs-5"
            ></i>
            Home
          </a>
          <a
            href="./search/..."
            className="list-group-item no-background text-white"
          >
            <i
                className="bi
				 bi-brightness-high-fill text-white pe-3 fs-5"
            ></i>
            Women
          </a>
          <a href="/" className="list-group-item no-background text-white">
            <i
                className="bi bi-moon-fill text-white
				pe-3 fs-5"
            ></i>
            Men
          </a>
          <a href="/" className="list-group-item no-background text-white ">
            <i
                className="bi bi-cart-fill text-white
				pe-3 fs-5"
            ></i>
            Kids
          </a>
          <a href="/" className="list-group-item no-background text-white ">
            <i
                className="bi bi-wallet-fill text-white
				pe-3 fs-5"
            ></i>
            Sale
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default UserSection;
