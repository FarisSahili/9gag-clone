 
import PostCard from './postcard/PostCard'
import img1 from './image/post1.jpg'
import img2 from './image/aVbMoW8_460swp.webp'
import img3 from './image/axo1R8Y_460swp.webp'
import img4 from './image/awZXdxy_460swp (1).webp'
import img5 from './image/az2XRZj_461swp.webp'
import img6 from './image/avQORnq_460swp.webp'


const Posts = ()=>  {
    const datawebsite = [
        {
             
            name : "gager name ",
             description : "funny",
             image:img1,
             time:1,
             type1:"life",
             type2:"Happy",
             up:389,
             down:30,
             commt:12,
        },
        { 
             name : "ali ali " ,
              description : "hahahahahah",
             image:img2,
             time:8,
             type1:"Funny",
             type2:"nope",
             up:110,
             down:10,
             commt:102,
        },
        { 
            name : "atti18" ,
             description : "Should focus more on football than on dancing ",
            image:img3,
            time:3,
            type1:"Elon Musk",
            type2:"hollywood",
            up:939,
             down:20,
             commt:4,
       },
       { 
        name : "high_guh" ,
         description : "Where the meme?",
        image:img4,
        time:5,
        type1:"scream",
        type2:"nope",
        up:100.0,
        down:308,
        commt:112,
   },
   { 
    name : "meducation" ,
     description : "I do as the heart says",
    image:img5,
    time:3,
    type1:"Funny",
    type2:"nope",
    up:900,
      down:84,
         commt:115,
},
{ 
    name : "gamingod" ,
     description : "Oh ok",
    image:img6,
    time:1,
    type1:"Funny",
    type2:"Latest News",
    up:143,
     down:21,
    commt:4,

},

    ];
    return (
        <>
         { datawebsite.map((post) => { return <PostCard key={post.name} name={post.name} description={post.description} image={post.image} 
         type1={post.type1} type2={post.type2}
         up={post.up} down={post.down} commt={post.commt} time={post.time}
         /> })}
        </>
    )}    
export default Posts;