import React from "react";
import PostsF from "./posts";
import { useSelector } from "react-redux";
import { postsSelector } from "../../../redax/postsRuducer";

export default function MapPosts() {
  const post = useSelector(postsSelector);
  return (
    <div>
      {post.map((user, i) => {
        return <PostsF post={user} key={i} />;
      })}
    </div>
  );
}
