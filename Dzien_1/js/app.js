//Zadanie 1
// function getNumber(num, arr){
//
// 	if (arr.indexOf(num) === 0){
// 		console.log("true");
// 	}
// 	else {
// 		console.log("false");
// 	};
// };


//Zadanie 2


function createIdentityMatrix(rows, cols){

  var a = [];
	var arrrow = [];

  for (var i = 0; i < rows; ++i) {
		arrrow = [];
		for (var k = 0; k < cols; ++k) {
			if (k == i){
				arrrow.push("1");
			}else {
				arrrow.push("0");
			}
		};
		a.push(arrrow);
	};
return a;
};


//Zadanie 3


function Tree(type){
	this.type = type;
};

Tree.prototype.bloom = function(){
	console.log("I am blooming")
};

var oak = new Tree("oak");
var elm = new Tree("elm");


//Dodatkowe1.
//

function addTheSameNumbers(num, arr){

    var suma = null;
    var counter = num;

    for(var i = 0; i < arr.length; ++i) {
        if(arr[i] === counter){
            suma += num;
        }
    };
    return sum;
}


//Dodatkowe2

function factors(x){
    var tab = [];
    for(var i = x; i > 0; --i){
        if(x%i == 0){
          tab.push(i);
      }
    };
  return tab;
};

//Dodatkowe3

function getMissingElement(array){
    for(var i = 0; i < array.length-1; ++i){
      if(array[i+1] - array[i] !== 1){
        console.log(array[i]+1);
    }
  };
};

//Dodatkowe4
//'dziala, ale zwraca ostatnie cyfry w odwrotnej kolejnosci. mozesz spojrzec i ewentualnie powiedziec o co chodzi?'

function getLastNumbers(num, arr){
    var counterr = [];
    if (typeof num !== "number"){
        return [];
        }else{
        arr.reverse();
        for(var i = 0; i < num; i++){
          counterr.push(arr[i]);
          }
        return counterr;
  }
};
