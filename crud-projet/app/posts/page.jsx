import { resolve } from "styled-jsx/css";
import PostCard from "../../components/PostCard.jsx";

async function loadPosts(){
    const res= await fetch('https://jsonplaceholder.typicode.com/posts');
    const data= await res.json();
    await new Promise((resolve)=>{setTimeout(resolve, 5000)});

    return data;
}


async function PostPages(){

    const posts = await loadPosts();
    console.log(posts);

    return(
        <>
            <div>PostPages</div>
            {
                posts.map((post)=>(<PostCard post={post}/>))
            }
        </>
    );
};

export default PostPages;