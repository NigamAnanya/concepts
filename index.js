// spread operator and destructing
// "breaks the arr into individual elemnets access independently"
arr = [1,3,4]

function avg (a,b,c){
  return (a+b+c/3);
}

// let a= avg(...arr)

let a = [4,7,12,...arr,32]


console.log(a)


let obj1 = {
  name1 : "Ananya",
  age : "21",
  language : "C"
};
let obj2 = {
  ...obj1, language: "C++"
};

console.log(obj2)



// Destructing

let {name1, age, language } = obj1
console.log(name1 , age , language) 