import "./App.css";
import HomePage from "./pages/Homepage";
// import sampledb from "./databaseWishlist.json";
import DetailsPage from "./pages/Detailspage";
import ProfilePage from "./pages/Profilepage";
import SearchPage from "./pages/Searchpage";
import SignInModal from "./pages/sign-in-modal";
import SignUpModal from "./pages/sign-up-modal";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import CurrentUserContext from "./redux/currentUserContext";

//current user:

//within this app component I was thinking it should handle the routing information/have react Browser to go to the other pages,

//with each carousel items, they have an id that is used for the buttons, not sure how else to handle creating a general component that
//will map to them so for now I pass a unique id by prop
function App() {
  return (
    <Provider store={store}>
      <CurrentUserContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route path="/login" element={<SignInModal />} />
              <Route path="register" element={<SignUpModal />} />
            </Route>
            <Route path="/profile" element={<ProfilePage active="Reviews" />} />
            <Route
              path="/profile/wishlist"
              element={<ProfilePage active="Wishlist" />}
            />
            <Route
              path="/profile/settings"
              element={<ProfilePage active="Settings" />}
            />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/search/women" element={<SearchPage page="Women" />} />
            <Route path="/search/men" element={<SearchPage page="Men" />} />
            <Route path="/search/kids" element={<SearchPage page="Kids" />} />
            <Route path="/search/sale" element={<SearchPage page="Sale" />} />
            <Route path="/profile" element={<ProfilePage active="Reviews" />} />
            <Route
              path="/profile/wishlist"
              element={<ProfilePage active="Wishlist" />}
            />
            <Route
              path="/profile/settings"
              element={<ProfilePage active="Settings" />}
            />
            <Route
              path="/details/:iid"
              element={<DetailsPage/>}
            />
          </Routes>
        </BrowserRouter>
      </CurrentUserContext>
    </Provider>
  );
}

/*
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    */

export default App;
