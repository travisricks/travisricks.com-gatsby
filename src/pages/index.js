import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import usePosts from "../hooks/usePosts";
import PostPreview from "../components/post-preview";

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <div>Hello there, Frontend Masters!</div>
        <Link to="/about/">Learn about me &rarr;</Link>

        <h2>Read my Blog</h2>
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
