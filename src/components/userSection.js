import React from "react";

const UserSection = () => {
  return (
    <div>
      <div class="row align">
        <div class="col-auto">
          <img
            src="images/profile-empty.jpeg"
            alt=""
            class="profile-pic rounded mb-2"
          />
        </div>

        <div class="col">
          <h2 class="text-white m-0">Hi Guest!</h2>
          <div class="login-navbar text-white">
            <a class="text-white remove-underline small-font" href="./register">
              Sign Up
            </a>{" "}
            |{" "}
            <a class="text-white remove-underline small-font" href="./login">
              Log In
            </a>
          </div>
        </div>
      </div>

      <div class="input-group mb-3 opacity-50 pt-4">
        <span class="input-group-text no-border bg-dark">
          <i class="bi bi-search text-white"></i>
        </span>
        <input
          type="text"
          class="form-control bg-dark text-white no-border"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <nav>
        <h5 class="text-white">Categories</h5>
        <ul class="list-group">
          <a href="./search/..." class="list-group-item active no-background">
            <i
              class="bi bi-house-door-fill
				 text-white pe-3 fs-5"
            ></i>
            Home
          </a>
          <a
            href="./search/..."
            class="list-group-item no-background text-white"
          >
            <i
              class="bi
				 bi-brightness-high-fill text-white pe-3 fs-5"
            ></i>
            Women
          </a>
          <a href="/" class="list-group-item no-background text-white">
            <i
              class="bi bi-moon-fill text-white
				pe-3 fs-5"
            ></i>
            Men
          </a>
          <a href="/" class="list-group-item no-background text-white ">
            <i
              class="bi bi-cart-fill text-white
				pe-3 fs-5"
            ></i>
            Kids
          </a>
          <a href="/" class="list-group-item no-background text-white ">
            <i
              class="bi bi-wallet-fill text-white
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
