import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./MenuBar/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-[300px_1000px_minmax(600px,_1fr)_100px] gap-5">
      <>
        <MenuBar />
      </>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
