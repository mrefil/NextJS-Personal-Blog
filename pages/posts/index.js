import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name='description' content='all posts' />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
        
    )
}

export default AllPostsPage;

export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        },
        revalidate: 3600
    }
}

