import UserSection from "../components/userSection";
import ProfileElement from "../profile-page-components/profileElement";
import ProfileNav from "../profile-page-components/profile-nav/profileNav";
import {useDispatch, useSelector} from "react-redux";
import {findUserByIdThunk, profileThunk} from "../ApiClient/thunks/authThunks";
import {useParams} from "react-router";
import { useEffect } from "react";

const ProfilePage = ({active = "Reviews"}) => {
    const user = useSelector((state) => state.users.currentUser);
    const target = useSelector((state) => state.users.currentTarget);
    const userID = useParams().uid;
    const dispatch = useDispatch();
    useEffect(
        () => {
            // dispatch(findUserByIdThunk(userID));
            dispatch(profileThunk());
        },[]); 
    return (
        <div className="row">
            {console.log("Target: " + target.username)}
            <UserSection active="Profile"/>
            <div className="col-9 profile-background d-flex flex-row h-100">
                <div className="d-flex flex-column custom-padding col-2">
                    <div className="pb-1 d-block mx-auto">
                        <img src={`/images/profile-empty.jpeg`} alt="..."
                             className="profile-pic-larger rounded-circle border border-white border-3"/>
                    </div>
                    <div className="text-center">
                        <h3 className="mb-0">{user && user.username}</h3>
                    </div>
                </div>
                <div className="col-10">
                    <ProfileNav active={active} user={user.username && target._id}/>
                    <ProfileElement active={active} user={user.username && target._id}/>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;

