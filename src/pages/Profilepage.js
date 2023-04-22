import React, { useEffect, useState } from "react";
import UserSection from "../components/userSection";
import ProfileElement from "../profile-page-components/profileElement";
import ProfileNav from "../profile-page-components/profile-nav/profileNav";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import * as userService from "../ApiClient/users.js";

const ProfilePage = ({ active = "Reviews" }) => {
  const { id } = useParams();
  //I think this profile page, could use the current user
  //and then if we are visiting the profile page of another we can maybe have
  const currentUser = useSelector((state) => state.users.currentUser);
  const [user, setUser] = useState();
  const getUserById = async () => {
    const newUser = await userService.findUserById(id);
    setUser(newUser);
  };

  useEffect(() => {
    if (id) {
      getUserById();
    }
  }, []);

  return (
    <div className="row">
      <UserSection active="Profile" />
      <div className="col-9 profile-background d-flex flex-row h-100">
        <div className="d-flex flex-column custom-padding col-2">
          <div className="pb-1 d-block mx-auto">
            <img
              src={`/images/profile-empty.jpeg`}
              alt="..."
              className="profile-pic-larger rounded-circle border border-white border-3"
            />
          </div>
          <div className="text-center">
            <h3 className="mb-0">Aliyah</h3>
          </div>
          <div className="text-center">@aliyah_9</div>
        </div>
        <div className="col-10">
          {user ? (
            //TODO get content related to userID
            <h1> Upcoming Content </h1>
          ) : (
            <>
              <ProfileNav active={active} />
              <ProfileElement active={active} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
