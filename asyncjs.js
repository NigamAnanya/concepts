// Async Js

console.log("Ananya completed Xth");
function add(){
  let a=10;
  let b=20;
  const c = a+b;
  return c;
}

const async_func = async() => {
  let ans = await add()
  console.log(ans)
}

async_func()

console.log("Ananya completed XIIth");
console.log("Hi I am Ananya");
