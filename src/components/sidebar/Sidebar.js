//import 


//function
const Sidebar= () =>{


    return(
<div>
      <section className="9gagSection">
      <header> 
        <h3 className="h3Sections">9GAG</h3> 
      </header>
      <ul className="sidebar-menu">
      <li><a className="label"  href="#"><i className ="icon home"></i>Home</a></li>
      <li><a className="label"  href="#"><i className ="icon trending"></i>Trending</a></li>
      <li><a className="label"  href="#"><i className ="icon fresh"></i>Fresh</a></li>
      <li><a className="label"  href="#"><i className ="icon top"></i>Top</a></li>
     </ul>
     </section>


        <section className="favSection">
        <header> 
          <h3 className="h3Sections">Favorites</h3> 
        </header>
        <ul className="sidebar-menu">
        <li><a className="sidebarItem"  href="#">..</a></li>
       </ul>
       </section>

       
       <section className="recSection">
        <header> 
          <h3 className="h3Sections">Recents</h3> 
        </header>
        <ul className="sidebar-menu">
        <li><a className="sidebarItem"  href="#">..</a></li>
       </ul>
       </section>


       <section className="PopularSection">
        <header> 
          <h3 className="h3Sections">Popular</h3> 
        </header>
        <ul className="sidebar-menu">
        <li><a className="sidebarItem"  href="#">..</a></li>
       </ul>
       </section>

       

       <section className="allSections">
        <header> 
          <h3 className="h3Sections">All Sections</h3> 
        </header>
        <ul className="sidebar-menu">
        <li><a className="sidebarItem"  href="#">..</a></li>
       </ul>
       </section>

       </div>
    )


}

//export 
export default Sidebar
