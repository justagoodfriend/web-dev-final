import "./App.css";
import HomePage from "./pages/Homepage";
import SignInModal from "./pages/sign-in-modal"
import SignUpModal from "./pages/sign-up-modal";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import store from "./redux/store";
import { Provider } from "react-redux";

//within this app component I was thinking it should handle the routing information/have react Browser to go to the other pages,

//with each carousel items, they have an id that is used for the buttons, not sure how else to handle creating a general component that
//will map to them so for now I pass a unique id by prop
function App() {
  return(
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="login" element={<SignInModal />}></Route>
        <Route path="register" element={<SignUpModal />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
