// The Range
function range(a, b ){
   let item = []; 

   for(let i =a; i<=b; i++){
    item.push(i);
   }
   return item;
}

console.log(range(1, 10))

// Reverse the Array
function reverseArray(a,b){
    let item = []; 

   for(let i =a; i<=b; i++){
    item.push(i);
   }
   return item.reverse();
}
console.log(reverseArray(1, 10))