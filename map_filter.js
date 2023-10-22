let a = [1,2,3,4,5];
// let a2 = values.map((value)=>{
//   return value + 6
// })

// console.log(a2)



// let a2 = a.filter((value)=>{
//   return value<3;
// })

// console.log(a2)



let a4 = a.reduce((val1, val2)=>{
  return val1+val2;
})

//console.log(a4)



let arr = [1,2,3,7,9]
let a2 = arr.map((array2)=>{
  return array2
})
a2 = a2.filter((array3)=>{
  return array3>3
})
console.log(a2)