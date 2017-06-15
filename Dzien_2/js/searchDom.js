//Zadanie1


var menu = document.getElementById("menu");

function getDataInfo(element) {
  var menu2 = [];
  for (var i = 0; i < element.children.length; i++) {
    menu2.push(element.children[i].dataset.info);
  };
  return menu2;
}
console.log(getDataInfo(menu));


//Zadanie2


var mcontainer = document.getElementById("main-contener");
function getElementClass(element) {
  var clsName = element.className.split(" ");
  return clsName;
};
console.log(getElementClass(mcontainer));


//Zadanie3


var pinkColor = document.querySelector(".pink-color");
function getElementText(element) {
  return element.innerText;
};
console.log(getElementText(pinkColor));


//Zadanie4


var obr = document.querySelectorAll(".images");
function getElementAlt(element) {
  var alternative = [];
  element.forEach(function(el) {
    alternative.push(el.getAttribute("alt"));
  });
  return alternative;
};
console.log(getElementAlt(obr));


//Zadanie5


var myLink = document.querySelectorAll(".my-link");
function getElementHref(element) {
  var elHref = [];
  element.forEach(function(el) {
    elHref.push(el.getAttribute("href"));
  });
  return elHref;
};
console.log(getElementHref(myLink));
