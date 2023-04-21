import React, { useEffect } from "react";
import { useState } from "react";
import * as userService from "../../ApiClient/users.js";
import { useNavigate } from "react-router";
import { profileThunk } from "../../ApiClient/authThunks.js";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  //fetch the items from the current
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  // const currentUser = async () => {
  //const user1 = await userService.profile();
  //const { payload } = await dispatch(profileThunk());
  //  setUser(payload);
  //};
  //on mount load the user information
  //useEffect(() => {
  //  currentUser();
  //}, []);

  //in the profile page -> also may log out here as well
  return (
    <>
      {currentUser ? (
        <div className="custom-padding-left pt-3 d-flex flex-row pb-5 mb-5">
          <div className="d-flex flex-column col-7">
            <label>
              <div className="pb-1">
                <b>Email</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${currentUser.email}`}
              />
            </label>
            <label>
              <div className="pb-1">
                <b>Username</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${currentUser.username}`}
              />
            </label>
            <label>
              <div className="pb-1">
                <b>Password</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${currentUser.password}`}
              />
            </label>
            <div className="pt-4">
              {/*TODO */}
              <button className="background-purple text-white rounded-3 no-border px-4 py-1">
                Save
              </button>
              <button className="no-background no-border text-purple px-4 py-1">
                Cancel
              </button>
              {/* TODO: style this button better */}
              <button
                className="no-border text-purple px-4 py-1"
                style={{ background: "red" }}
                onClick={() => {
                  userService.logout();
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="col-4 pt-3">
            <img
              alt="..."
              src={`/images/profile-empty.jpeg`}
              className="rounded-4 profile-pic-larger2 m-0"
            />
            <button className="no-border no-background p-0 pt-3">
              <h5>Upload new image</h5>
            </button>
            <div>me_photo.jpg</div>
          </div>
        </div>
      ) : (
        <h1> Log in to view settings</h1>
      )}
    </>
  );
};

export default Settings;
