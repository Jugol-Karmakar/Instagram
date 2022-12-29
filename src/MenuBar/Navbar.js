import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { BiMessageSquareAdd } from "react-icons/bi";
import PostCreateModel from "../components/PostCreateModel";
import { useState } from "react";

const MenuBar = () => {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="bg-[#000] border-r border-r-gray-800">
      <nav className="flex flex-col p-5 fixed">
        <div className="pb-3 pt-0 mb-2">
          <h2 className="text-white text-2xl font-CarterOne">Mocospace</h2>
        </div>
        {/* Frigoo */}
        <div className="text-white flex flex-col">
          <Link to="/" className="flex flex-row items-center text-lg py-2 my-2">
            <AiFillHome className="text-2xl mr-3" /> Home
          </Link>
          <Link to="/" className="flex flex-row items-center text-lg py-3 my-2">
            <GoSearch className="text-2xl mr-3" /> Search
          </Link>
          <Link
            to="/explore"
            className="flex flex-row items-center text-lg py-3 my-2"
          >
            <MdOutlineExplore className="text-2xl mr-3" /> Explore
          </Link>
          <Link
            to="/messages"
            className="flex flex-row items-center text-lg py-3 my-2"
          >
            <RiMessengerLine className="text-2xl mr-3" /> Message
          </Link>
          <Link to="/" className="flex flex-row items-center text-lg py-3 my-2">
            <FaRegHeart className="text-2xl mr-3" /> Notification
          </Link>

          <button
            onClick={() => setOpenModel(true)}
            className="flex flex-row items-center text-lg py-3 my-2"
          >
            <BiMessageSquareAdd className="text-2xl mr-3" /> Create
          </button>
          <PostCreateModel
            onClose={() => setOpenModel(false)}
            open={openModel}
          />

          <Link
            to="/profile"
            className="flex flex-row items-center text-lg py-3 my-2"
          >
            <FaUserCircle className="text-2xl mr-3" /> Profile
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
