
import React, { useEffect } from "react";
import { useState } from "react";
import * as userService from "../../ApiClient/services/users.js";
import { useNavigate, useParams } from "react-router";
import { profileThunk } from "../../ApiClient/thunks/authThunks.js";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { UserContext } from "../../redux/userContextTest";


const Settings = ({user= {}}) => {
  //fetch the items from the current
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const targetID = useParams().uid;
  const user2 = useContext(UserContext).user;
  console.log(user);
  const currentUser = JSON.parse(user2);

  const [profilePic, setProfilePic] = useState('profile-empty.jpeg');
  const profilePics = ['nature.png', 'sunset.png', 'sunglasses.jpeg', 'profile-empty.jpeg' ];

  const handlePic = () => {
    // dispatch(updateProfilePicture(currentUser._id, profilePic));
  };

  useEffect(
    () => {
        dispatch(profileThunk());
    },[]); 
  //in the profile page -> also may log out here as well
  return (
    <>
      {currentUser._id != targetID && navigate("/profile/"+currentUser._id+"/settings")}
      {(currentUser) ? (
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
                className="no-border bg-danger text-white px-4 py-1 rounded-2"
                onClick={() => {
                  dispatch({})
                  // we need to call thunk here. 
                  userService.logout();
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="col-4 pt-3 text-center">
            <img
              alt="..."
              src={`/images/${profilePic}`}
              className="rounded-4"
            />

            <div className="pt-3">
              {profilePics.map((pic, i) => (
                  <button
                      key={i}
                      className="no-border no-background p-1 w-25"
                      onClick={() => setProfilePic(pic)}
                  >
                    <img
                        src={currentUser.picture || `/images/${pic}`}
                        className="rounded-4"
                     />
                  </button>
              ))}
            </div>
            <button className="no-border no-background p-0 pt-3">
              <h5>Choose new image</h5>
            </button>
            <div>{profilePic}</div>
            <button className="background-purple text-white rounded-3 no-border px-4 py-1 mt-2" onClick={handlePic}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <h1> Log in to view settings</h1>
      )}
    </>
  );
};

export default Settings;
