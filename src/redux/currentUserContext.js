import { useEffect } from "react";
import { profileThunk } from "../ApiClient/thunks/authThunks";
import { useDispatch } from "react-redux";

//children is whatever is inside the body
function CurrentUserContext({ children }) {
  const dispatch = useDispatch();
  const getProfile = async () => {
    await dispatch(profileThunk());
    console.log("made it here");
  };

  useEffect(() => {
    getProfile();
  }, []);
  return children;
}
export default CurrentUserContext;
