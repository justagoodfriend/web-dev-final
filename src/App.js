import "./App.css";
import HomePage from "./pages/Homepage";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import ProfilePage from "./pages/Profilepage";

//within this app component I was thinking it should handle the routing information/have react Browser to go to the other pages,

//with each carousel items, they have an id that is used for the buttons, not sure how else to handle creating a general component that
//will map to them so for now I pass a unique id by prop
function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*"
                       element={<HomePage/>}/>
                <Route path="/profile"
                       element={<ProfilePage active="Reviews"/>}/>
                <Route path="/profile/wishlist"
                       element={<ProfilePage active="Wishlist"/>}/>
                <Route path="/profile/settings"
                       element={<ProfilePage active="Settings"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

