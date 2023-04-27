import {useDispatch, useSelector} from "react-redux";
import ProfileNavLink from "./profileNavLink";
import { useParams } from "react-router";
import {useContext, useEffect} from "react";
import { UserContext } from "../../redux/userContextTest";
import {findUserByIdThunk} from "../../ApiClient/thunks/authThunks";
const ProfileNav = ({ active = "Reviews" }) => {
  // userId = user id of profile being viewed
  const userId = useParams().uid;
  const userViewed = useSelector((state) => state.users.currentTarget);
  // params for current user
  // const source = JSON.parse(useContext(UserContext).user);
  const { user } = useContext(UserContext);
  const currentUser = JSON.parse(user);
  const dispatch = useDispatch();

  useEffect(
      () => {
        dispatch(findUserByIdThunk(userId));
      },[]);

  return (
    <nav className="nav justify-content-around custom-padding-extra me-5">
      {
        userId &&
        <ProfileNavLink
          active={active}
          href={"/profile/" + userId}
          title="Reviews"
        />
      }
      {userViewed.wishlist && userId && (
        <>
          <ProfileNavLink
            active={active}
            href={"/profile/" + userId + "/wishlist"}
            title="Wishlist"
          />
        </>
      )}
      {
        // Need to do HTTP get reqs for profie/id/items
        userViewed.items && userId &&(
          <>
            <ProfileNavLink
              active={active}
              href={"/profile/" + userId + "/items"}
              title="Items"
            />
          </>
        )
      }
      {
        // Need to do HTTP get reqs for profie/id/items
          userId && currentUser._id === userId && (
              <>
                <ProfileNavLink
                    active={active}
                    href={"/profile/" + userId + "/settings"}
                    title="Settings"
                />
              </>
          )
      }
    </nav>
  );
};

export default ProfileNav;
