"use client"
import Link from "next/link";
import { useParams } from "next/navigation";


function PostCard({post}){
    const params = useParams();
    console.log({params});

    return(
        <>
         <div>PostCard</div>
            <Link href={`/posts/${post.id}`}>
                <h3>
                    {post.id}. {post.title}
                </h3>
            </Link>



                
                {/* <div key={post.id}>
                    
                    <h3>{post.id}. {post.title}</h3>
                   
                </div> */}
        </>
    );
}

export default PostCard;