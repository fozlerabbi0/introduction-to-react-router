import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";

const Post = () => {

    const posts = useLoaderData()
    return (
        <div>
            <h2>Post: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Posts key={post.id} post={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;