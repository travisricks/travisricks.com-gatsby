import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const PostPreview = ({ post }) => (
  <article className="flex">
    <Link className="w-1/6" to={post.slug}>
      {post.image ? (
        <Image fluid={post.image.sharp.fluid} alt={post.title} />
      ) : (
        ""
      )}
    </Link>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <Link to={post.slug}>read &rarr;</Link>
    </div>
  </article>
);

export default PostPreview;
