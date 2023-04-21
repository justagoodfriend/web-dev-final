import { useEffect } from "react";
import { profileThunk } from "../ApiClient/authThunks";
import { useDispatch } from "react-redux";

//children is whatever is inside the body
// A, what does this do. B, this seems like a hook, so needs to follow syntax (useCurentUserContext)
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
