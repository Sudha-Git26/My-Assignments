//var --> keyword to declare a variable
// let and const --> other keywords

var product="mobile"  //declaration
var product="laptop"   //redeclarion or reinitialization is allowed

console.log(product);          //laptop
console.log(typeof product);    //string

//let allows reassignment but redeclaration is not allowed

let quantity=1
   // let quantity=2 (redeclaration is not allowed)

  // quantity = 4 (reassignment is allowed)

  quantity = 5

  console.log(quantity);          //5
console.log(typeof quantity);     //number