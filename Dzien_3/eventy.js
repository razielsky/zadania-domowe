document.addEventListener("DOMContentLoaded", function() {
function pokaz() {
if (this.nextElementSibling.style.display === 'none') {
this.nextElementSibling.style.display = 'block';
} else {
this.nextElementSibling.style.display = 'none';
}
}

var parents = document.querySelectorAll("a");

var children = document.querySelectorAll(".content")



parents[0].addEventListener("click", pokaz);

parents[1].addEventListener("mouseenter", function () {
this.nextElementSibling.style.display = "block";
})

parents[1].addEventListener("mouseleave", function () {
this.nextElementSibling.style.display = "none";
})

});

// document.addEventListener("DOMContentLoaded", function(){
//
// var link1 = document.querySelectorAll("a")[0];
// var link2 = document.querySelectorAll("a")[1];
//
// link1.addEventListener("click", function(){
// var tresc1 = document.querySelector("a + div");
// tresc1.classList.toggle("content");
// })
//
// link2.addEventListener("mouseenter", function(){
// var tresc2 = document.querySelectorAll("article")[1].querySelector("div");
// tresc2.classList.toggle("content");
// })
//
// link2.addEventListener("mouseleave", function(){
// var tresc2 = document.querySelectorAll("article")[1].querySelector("div");
// tresc2.classList.toggle("content");
// })
//
//
// });
