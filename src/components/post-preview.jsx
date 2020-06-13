import React from "react";
import { Link } from "gatsby";

const PostPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>read &rarr;</Link>
  </article>
);

export default PostPreview;
