import { Fragment } from "react";
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default HomePage;

// 1) Hero Section      => Present Ourselves
// 2) Featured Posts
