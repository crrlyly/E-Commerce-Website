import Home from "./pages/Home.jsx";
import Fake from "./pages/Fake.jsx";
import Welcome from "./pages/Welcome.jsx";
import SignIn from "./pages/SignIn.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import Profile from "./pages/Profile.jsx";
// import LookBook from "./pages/Lookbook.jsx";
import Checkout from "./pages/Checkout.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fake" element={<Fake />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/lookbook" element={<LookBook />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/editprofile" element={<EditProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
