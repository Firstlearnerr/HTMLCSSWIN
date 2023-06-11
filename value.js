
$(document).ready(function (event) {
    $('#Q1').click(function () {
         $('#Q1 .add').toggle();
         $('#Q1 .remove').toggle();
         $('#Q1 #answer').slideToggle();
     });
    $('#Q2').click(function(){
         $('#Q2 .add').toggle();
         $('#Q2 .remove').toggle();
         $('#Q2 #answer').slideToggle();
      });
      
       $('#Q3').click(function(){
         $('#Q3 .add').toggle();
         $('#Q3 .remove').toggle();
         $('#Q3 #answer').slideToggle();
       });
    $('#Q4').click(function(){
         $('#Q4 .add').toggle();
         $('#Q4 .remove').toggle();
         $('#Q4 #answer').slideToggle();
       });
            
    $('#Q5').click(function(){
         $('#Q5 .add').toggle();
         $('#Q5 .remove').toggle();
         $('#Q5 #answer').slideToggle();
       });
            });
 let mainNav = document.getElementById("js-menu");
 let navBarToggle = document.getElementById("js-navbar-toggle");
 navBarToggle.addEventListener("click", function () {
   // $("#js-menu").slideToggle(400);
   mainNav.classList.toggle("active");
 });
 
 const mobileMenu = document.querySelector(".material-symbols-outlined");
 mobileMenu.addEventListener("click", function () {
   mobileMenu.classList.toggle("open");
 });
 
 const navli = document.querySelector(".main-nav");
 const navbarli = document.querySelector(".nav-links > a");
 navli.addEventListener("click", function () {
   navbarli.classList.toggle("hide");
 });
 