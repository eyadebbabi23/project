searchForm = document.querySelector('search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
}
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.toggle('active');

}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
 

}
   


window.onscroll =()=>{
    if(window.scrollY >80){
        document.querySelector('.header . header-2').classList.add('active');

    }else{
        document.querySelector('.header . header-2').classList.remove('active');


    }
}
window.onload =()=>{
    if(window.scrollY >80){
        document.querySelector('.header . header-2').classList.add('active');

    }else{
        document.querySelector('.header . header-2').classList.remove('active');
        

    }
}
var myIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); 
  }
  
    

