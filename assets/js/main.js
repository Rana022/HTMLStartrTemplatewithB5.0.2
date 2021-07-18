var menuBtn = document.querySelector('.menu-btn');
var header = document.querySelector('header');
var menuItem = document.querySelector('header ul');

menuBtn.addEventListener('click', function(){
     menuBtn.classList.toggle('active');
     header.classList.toggle('active');
     menuItem.classList.toggle('active');
});