const dropdowns=document.querySelectorAll('.Dropdown');
dropdowns.forEach(Dropdown=>{
const select=Dropdown.querySelector('.select');
const caret=Dropdown.querySelector('.caret');
const menu=Dropdown.querySelector('.menu');
const options=Dropdown.querySelectorAll('.menu li');
const selected=Dropdown.querySelector('.test');
select.addEventListener('click', () =>{
 
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
})
options.forEach(option => {
  option.addEventListener('click',() => {
     test.innerText = option.innerText;
     select.classList.remove('select-clicked');
     caret.classList.remove('caret-rotate');
     menu.classList.remove('menu-open');
     options.forEach(option => {
       option.classList.remove('active');
     });
option.classList.add('active');
  });
 });
});
