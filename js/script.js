/*
var string = "Hello";
string += " World";
string = string + " World";
console.log(string + "!");




console.log((5 + 4) / 3);
console.log(undefined / 5);
function test1 (a) {
  console.log( a / 5);
}
test1();




 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");
}






if (x === y) {
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console
  .log("Strict: x='4' is NOT equal to y=4");
}







if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}


if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}






function a() 
{
  return
  { 
    name: "Yaakov"
  };
}

function b() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());



var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


function orderchickenwith(sidedish){
  
  sidedish= sidedish || "whatever";
  console.log("chicken wiht "+ sidedish);
}

orderchickenwith('noodles');
orderchickenwith('');

var x = 10;
if ( (null) || x > 5 ) {
  console.log("Hello");
}


var company= new Object();
company.name= 'google';
company.ceo = new Object();
company.ceo.firstname = "sundar";
company.ceo.favcolor = "orange";
company["stock of the company"]= 1000;

console.log(company);

console.log("Company CEO  name is " + company.ceo.firstname);
console.log(company["name"]);
*/

var facebook = { 
  name:'Facebook',
  ceo:{
    firstname:"mark",
    favcolor:"blue"
  },
  "stock of the compay":120
  
};

console.log(facebook);
