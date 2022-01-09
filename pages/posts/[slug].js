import Head from 'next/head';
import { Fragment } from 'react';
import Comments from '../../components/input/comments';
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name={props.post.title} content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
            <Comments />
        </Fragment>
        
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();
    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map((slug)=> ({params: {slug:slug}})),
        fallback: false
    };
}

export default PostDetailPage;