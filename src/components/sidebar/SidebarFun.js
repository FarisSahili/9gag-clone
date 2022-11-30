//import 



//function


function myFunction() {
  const h2 = document.getElementsByClassName("sidebarItem");
  let html = "<p>My new paragraph.</p>";
  h2.insertAdjacentHTML("afterend", html);
}


//export

export default myFunction