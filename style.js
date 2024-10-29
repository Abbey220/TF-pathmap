function sendTowhatsapp(){
    let number = "+2348119765511"

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
    +"Name :" +name+"%0a"
    +"Email : " +email+"%0a"
    +"Message :"+message+"%0a%0a";

    window.open(url, '_blank').focus();
}
let navbar = document.querySelector('.nav_menu');

document.querySelector('#menu-btn').onclick = () =>{
      navbar.classList.toggle('active');
}
window.onscroll = () =>{
  navbar.classList.remove('active');
}
