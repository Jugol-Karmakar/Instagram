import React from "react";
import PostCards from "../components/PostCards";

const Home = () => {
  return (
    <div className="grid grid-cols-[600px_400px_minmax(600px,_1fr)_100px] gap-5">
      <>
        <PostCards />
      </>
      <div className="border">
        <h2>Side bar</h2>
      </div>
    </div>
  );
};

export default Home;
