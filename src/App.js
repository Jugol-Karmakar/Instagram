import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./MenuBar/Navbar";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-[300px_600px_400px_minmax(600px,_1fr)_100px] gap-5">
      <>
        <MenuBar />
      </>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </>
      <div className="border">
        <h2>Side bar</h2>
      </div>
    </div>
  );
}

export default App;
