import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillDislike, AiOutlineDislike } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

const PostCard = (props) => {
  const { id, name, location, photo } = props.post;
  const [love, setLove] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handelReactChange = () => {
    setLove(!love);
  };

  const handelDislikeChange = () => {
    setDislike(!dislike);
  };

  return (
    <div className="my-5 bg-black rounded-xl overflow-hidden max-w-lg mx-auto border border-gray-800">
      {/* card header */}
      <div className="flex items-center  px-3 py-2">
        <div className="w-10 h-10 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-full"
            src={photo}
            alt=""
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-white">{name}</h3>
          <p className="text-white font-medium text-sm">{location}</p>
        </div>
      </div>
      {/* card image */}
      <div className="w-full h-full">
        <img className="w-full max-h-[550px] object-cover" src={photo} alt="" />
      </div>
      {/* card body */}
      <div className="border-b border-b-gray-800">
        <button onClick={handelReactChange} className="mx-3">
          {/* {!love ? (
            <FaRegHeart className="text-white text-3xl hover:text-gray-400 transition-all duration-100" />
          ) : (
            
          )} */}

          <FaHeart
            className={`${
              love === true ? "text-red-600 text-3xl" : "text-white text-3xl"
            }`}
          />
        </button>
        <button onClick={handelDislikeChange}>
          {/* {!dislike ? (
            <AiOutlineDislike className="text-white text-3xl hover:text-gray-400 transition-all duration-100" />
          ) : (
            
          )} */}
          <AiFillDislike
            className={`${
              dislike === true ? "text-red-600 text-3xl" : "text-white text-3xl"
            }`}
          />
        </button>
      </div>
      <div className="flex justify-between items-center mx-3 py-2">
        <BsEmojiSmile className="text-white text-3xl font-bold" />
        <input
          className="w-full outline-none text-white bg-black mx-3 py-1 placeholder:text-sm"
          type="text"
          name="comment"
          id=""
          placeholder="Add a comment..."
        />
        <button className="text-blue-500 font-medium">Post</button>
      </div>
    </div>
  );
};

export default PostCard;
