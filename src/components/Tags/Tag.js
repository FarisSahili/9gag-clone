
import './Tag.css';
//function

const TagButton = (props) => {
return (
    <div className='container'>
 <div className='tag1'>
                             <button  className='Tag-Button'  href = "tag-html" >World Cup</button>
                             <button  className='Tag-Button'  href = "tag-html" >Spain</button>  
                              <button  className='Tag-Button'  href = "tag-html">Morocco</button>
                               <button  className='Tag-Button'  href = "tag-html" >Brazil</button>
                                <button  className='Tag-Button'  href = "tag-html" >Jaban</button>
                                <button className='Tag-Button' href = "tag-html">Wednesday</button>
                                <button className='Tag-Button' href = "tag-html">Pokemon</button>
        
                                <button className='Tag-Button' href = "tag-html">Chainsaw man</button>        
                                <button className='Tag-Button' href = "tag-html">Latest news</button>
                                <button className='Tag-Button' href = "tag-html">Most commented</button>
                                <button className='Tag-Button' href = "tag-html">Weekly highlights</button>
                           </div>  
                           </div>  
);
}
// }

//     {tagsData.map ((tag)=>{
//         return<TagButton Key={tag.id} tag_name={tag.tag_name}
//     />
//     })}
    
//Export
export default TagButton;

