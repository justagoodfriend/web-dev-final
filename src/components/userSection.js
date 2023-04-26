import React, { useState, useEffect } from "react";
import Button from "./button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../ApiClient/thunks/authThunks";
import { useContext } from "react";
import { UserContext } from "../redux/userContextTest";
const UserSection = ({ active = "Home" }) => {
  //TODO: in the sidebar when we are signed in as a user change the signup/login to sign out
  //currently doing it the annoying way where I fetch each time for the current user
  //in the future exchange this out with redux and then use that
  //const user = useSelector((state) => state.users.currentUser);
  const { user } = useContext(UserContext);
  console.log(user);
  const currentUser = JSON.parse(user);

  //console.log(currentUser);
  //console.log(JSON.parse(user));
  //console.log(user.username);
  //const itemInStorage = localStorage.getItem("user");
  //console.log(Object.keys(itemInStorage));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="col-3 pt-3 ps-4 bg-purple" style={{ minHeight: "100vh" }}>
      <div className="row align">
        <div className="col-auto">
          <img
            src={`/images/profile-empty.jpeg`}
            alt="..."
            className="profile-pic rounded mb-2"
          />
        </div>

        <div className="col">
          {/* TODO: make this take in the current user: */}
          <h2 className="text-white m-0">Hi Guest!</h2>
          <>
            {currentUser && currentUser.username ? (
              <span
                onClick={() => {
                  dispatch(logoutThunk());
                  localStorage.removeItem("user");
                  //TODO: idk why but this doesn't navigate back home
                  navigate("/");
                  window.location.reload();
                }}
                id="logoutbutton"
              >
                {" "}
                Log Out{" "}
              </span>
            ) : (
              <div className="login-navbar text-white">
                <a
                  className="text-white remove-underline small-font"
                  href="/register"
                >
                  Sign Up
                </a>{" "}
                |{" "}
                <a
                  className="text-white remove-underline small-font"
                  href="/login"
                >
                  Log In
                </a>
              </div>
            )}
          </>
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/search/${searchQuery}`);
            }
          }}
        />
        <button
          className="btn btn-light"
          onClick={() => navigate(`/search/${searchQuery}`)}
        >
          Go
        </button>
      </div>
      <nav>
        <h5 className="text-white">Categories</h5>
        <ul className="list-group">
          <Button
            active={active}
            href="/"
            title="Home"
            icon="bi bi-house-door-fill text-white pe-3 fs-5"
          />
          {currentUser && currentUser.username && (
            <Button
              active={active}
              href={"/profile/" + currentUser._id}
              title="Profile"
              icon="bi bi-person-fill-gear text-white pe-3 fs-5"
            />
          )}
          { (!currentUser || currentUser.wishlist) &&
            <>
              <Button
                active={active}
                href="/search/women"
                title="Women"
                icon="bi bi-brightness-high-fill text-white pe-3 fs-5"
              />
              <Button
                active={active}
                href="/search/men"
                title="Men"
                icon="bi bi-moon-fill text-white pe-3 fs-5"
              />
              <Button
                active={active}
                href="/search/kids"
                title="Kids"
                icon="bi bi-cart-fill text-white pe-3 fs-5"
              />
              <Button
                active={active}
                href="/search/sale"
                title="Sale"
                icon="bi bi-wallet-fill text-white pe-3 fs-5"
              />
            </>
          }
          {currentUser && currentUser.items && (
            <>
              <Button
                active={active}
                href="/addItem"
                title="Add Item"
                icon="bi bi-plus text-white pe-3 fs-5"
              ></Button>
            </>
          )}
          {currentUser && currentUser.wishlist && (
            <>
              <Button
                active={active}
                href="/listings"
                title="Listings"
                icon="bi bi-tag-fill text-white pe-3 fs-5"
              ></Button>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default UserSection;
