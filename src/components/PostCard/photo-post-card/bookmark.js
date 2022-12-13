
const SaveIcons = ({ isSelected, onClick }) => {
    return (
      <div className="save-icon">
<button  className ="save-button" onClick={() => onClick()}>
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 12 12" 
         fill={isSelected ? "red" : "white"}
         className="bx bx-bookmark">
            <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z">
             </path>
     </svg>
</button>
</div>
    )
}
export default SaveIcons ; 