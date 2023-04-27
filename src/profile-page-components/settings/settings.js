import React, { useEffect } from "react";
import { useState } from "react";
import * as userService from "../../ApiClient/services/users.js";
import { useNavigate, useParams } from "react-router";
import {
  profileThunk,
  updateUserThunk,
} from "../../ApiClient/thunks/authThunks.js";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../../redux/userContextTest";

const Settings = ({ user = {} }) => {
  //fetch the items from the current
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const targetID = useParams().uid;
  const user2 = useContext(UserContext).user;
  console.log(user2);
  const currentUser = JSON.parse(user2);
  const profilePics = [
    "nature.png",
    "sunset.png",
    "sunglasses.jpeg",
    "profile-empty.jpeg",
  ];

  const handlePic = () => {
    // dispatch(updateProfilePicture(currentUser._id, profilePic));
  };

  const [userInputs, setUserInput] = useState({
    ...currentUser,
  });

  useEffect(() => {
    dispatch(profileThunk());
    console.log("target in settings", targetID);
  }, []);
  //in the profile page -> also may log out here as well

  console.log("target in settings", targetID);
  return (
    <>
      {currentUser._id != targetID &&
        navigate("/profile/" + currentUser._id + "/settings")}
      {currentUser ? (
        <div className="custom-padding-left pt-3 d-flex flex-row pb-5 mb-5">
          <div className="d-flex flex-column col-7">
            <label>
              <div className="pb-1">
                <b>Email</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${userInputs.email}`}
                onChange={(e) => {
                  const copy = { ...userInputs, email: e.target.value };
                  setUserInput(copy);
                }}
              />
            </label>
            <label>
              <div className="pb-1">
                <b>Username</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${userInputs.username}`}
                onChange={(e) => {
                  const copy = { ...userInputs, username: e.target.value };
                  setUserInput(copy);
                }}
              />
            </label>
            <label>
              <div className="pb-1">
                <b>Password</b>
              </div>
              <input
                className="bg-secondary bg-opacity-10 rounded-3 border-2 border-purple p-3 py-2 mb-2 w-75"
                defaultValue={`${userInputs.password}`}
                onChange={(e) => {
                  const copy = { ...userInputs, password: e.target.value };
                  setUserInput(copy);
                }}
              />
            </label>
            <div className="pt-4">
              {/*TODO */}
              <button
                className="background-purple text-white rounded-3 no-border px-4 py-1"
                onClick={(e) => {
                  dispatch(
                    updateUserThunk({ userID: targetID, ...userInputs })
                  );
                  localStorage.setItem(
                    "user",
                    JSON.stringify({ userID: targetID, ...userInputs })
                  );
                  window.location.reload();
                  return false;
                }}
              >
                Save
              </button>
              {/* TODO: style this button better */}
              <button
                className="no-border bg-danger text-white px-4 py-1 rounded-2"
                onClick={() => {
                  // we need to call thunk here.
                  userService.logout();
                  localStorage.removeItem("user");
                  //TODO: idk why but this doesn't navigate back home
                  navigate("/");
                  window.location.reload();
                  return false;
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="col-4 pt-3 text-center">
            <img
              alt="..."
              src={`/images/${userInputs.image}`}
              className="rounded-4"
            />

            <div className="pt-3">
              {profilePics.map((pic, i) => (
                <button
                  key={i}
                  className="no-border no-background p-1 w-25"
                  onClick={(e) => {
                    const copy = { ...userInputs, image: pic };
                    setUserInput(copy);
                  }}
                >
                  <img src={`/images/${pic}`} className="rounded-4" />
                </button>
              ))}
            </div>
            <button className="no-border no-background p-0 pt-3">
              <h5>Choose new image</h5>
            </button>
            <div>{userInputs.image}</div>
            <button
              className="background-purple text-white rounded-3 no-border px-4 py-1 mt-2"
              onClick={(e) => {
                userService.updateUser({ targetID, ...userInputs });
              }}
            ></button>
          </div>
        </div>
      ) : (
        <h1> Log in to view settings</h1>
      )}
    </>
  );
};

export default Settings;
