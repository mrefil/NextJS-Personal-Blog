import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);
    const postSlug = fileName.replace(/\.md$/, ''); // removes the file extension
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);
    
    const allPosts = postFiles.map(postFiles => {
        return getPostData(postFiles);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.data ? -1 : 1);
    
    return sortedPosts;
    // for (const postFiles of postFiles) {
    //     const postData = getPostData(postFiles);
    // }
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}

