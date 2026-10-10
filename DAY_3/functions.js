function welcome(){
    return "Hello Team" //Return Hello Team
}
console.log(welcome());

let login=()=>{
    console.log("Login is successful")
}
login()

let add3= function(){
    let a =10
    let b=5
    let c=a+5
    return c
}
console.log(add3())

let add1=(a,b)=>a+b;
console.log(add1(2,4))

//callback function - wehen we pass 1 function as an argument to another fucntion