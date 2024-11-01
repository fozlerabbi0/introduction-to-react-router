
const Posts = ({posts}) => {
    const {id, title} = posts;
    return (
        <div>
            <h2>Posts of id: {id}</h2>
        </div>
    );
};

export default Posts;