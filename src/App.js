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
import { UserContext } from "./redux/userContextTest";
import { useState, useMemo } from "react";

//current user:

//within this app component I was thinking it should handle the routing information/have react Browser to go to the other pages,

//with each carousel items, they have an id that is used for the buttons, not sure how else to handle creating a general component that
//will map to them so for now I pass a unique id by prop
function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  //localStorage.clear();

  //localStorage/useContext instead to share between componts:
  return (
    <Provider store={store}>
      <CurrentUserContext>
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" element={<HomePage />}>
                <Route path="/login" element={<SignInModal />} />
                <Route path="register" element={<SignUpModal />} />
              </Route>
              <Route
                path="/profile/:uid"
                element={<ProfilePage active="Reviews" />}
              />
              <Route
                path="/profile/:uid/wishlist"
                element={<ProfilePage active="Wishlist" />}
              />
              <Route
                path="/profile/:uid/settings"
                element={<ProfilePage active="Settings" />}
              />
              <Route
                path="/profile/:uid/items"
                element={<ProfilePage active="Items" />}
              />
              <Route
                path="/profile/:uid/transactions"
                element={<ProfilePage active="Transactions" />}
              />

              <Route path="/search/:query" element={<SearchPage />} />
              <Route
                path="/search/women"
                element={<SearchPage page="Women" />}
              />
              <Route path="/search/men" element={<SearchPage page="Men" />} />
              <Route path="/search/kids" element={<SearchPage page="Kids" />} />
              <Route path="/search/sale" element={<SearchPage page="Sale" />} />
              <Route path="/details/:iid" element={<DetailsPage />} />
            </Routes>
          </UserContext.Provider>
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
