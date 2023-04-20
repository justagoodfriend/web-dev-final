import React from "react";
import UserSection from "../components/userSection";
import ProfileElement from "../profile-page-components/profileElement";
import ProfileNav from "../profile-page-components/profile-nav/profileNav";

const ProfilePage = ({ active = "Reviews" }) => {
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
          <ProfileNav active={active} />
          <ProfileElement active={active} />
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
