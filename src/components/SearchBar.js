

const SearchBar = ({data}) => {


return(
    <div className="search">
        <div className="searchInputs">
           <input type="text" />
           <div className="searchIcon">
              <img alt="aaaaa" />
           </div>
        </div>
  <div className="dataResult">
     {  data.map((value , key) =>{
        return <div>{value.tags} </div>
    })}
  </div>
</div>  
);
}

export default SearchBar