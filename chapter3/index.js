// MINIMUM
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
const min = (a, b) => {
console.log(Math.min(a,b))
}
min(1, 100)

// Recursion
// We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
 const isEven = (n) =>{
    n = Math.abs(n)
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
 }
console.log(isEven(47))


// Bean Counting
function countBs(string, count){
    let foundItem = 0;
    for(let i = 0; i < string.length; i++){
     if(string[i]=== count){
        foundItem++;
     }
    }
    return foundItem;
}
console.log(countBs("hello", "l"));