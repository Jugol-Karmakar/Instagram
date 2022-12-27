import React from "react";
import boy from "../images/boy.jpg";
import PostCard from "./PostCard";

const PostCards = () => {
  const posts = [
    {
      id: 1,
      name: "Jack Mack",
      location: "Galaxy Apartment,bandra,mumbai",
      photo: boy,
    },
    {
      id: 2,
      name: "Jack Mack",
      location: "Galaxy Apartment,bandra,mumbai",
      photo: boy,
    },
    {
      id: 3,
      name: "Jack Mack",
      location: "Galaxy Apartment,bandra,mumbai",
      photo: boy,
    },
  ];
  return (
    <div>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostCards;
