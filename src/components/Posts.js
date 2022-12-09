 
import Post from './Post'
import img1 from './image/post1.jpg'
import img2 from './image/aVbMoW8_460swp.webp'
 
const Posts = ()=>  {
    const datawebsite = [
        {
            name : "yaman ghasan ",
             description : "post 1",
             image:img1
        },
        { 
             name : "ali ali " ,
              description : "post 2 ",
             image:img2 
        },
      
    ];
    return (datawebsite.map( post => {
         return <Post name={post.name} description={post.description} image={post.image} /> })
)};
export default Posts;