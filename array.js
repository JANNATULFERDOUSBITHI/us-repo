// let arr = [1,2,3,4,5,6, "rezaul", 8];

// for ( let i = 0; i <= arr.length; i++){
//     let element = arr[i];
//     if(typeof(element) !== "string"){
//         console.log(element);
//     }
// }

// Addition ........

let a = [1,7,5,4,5,6];
let sum = 0;
// using for loop

// for(let i = 0; i < a.length; i++){
//     sum = sum + a[i];
// }
// console.log(sum);

// using foreach loop

// let myFunction = (item) => {
//     sum = sum + item;
    
// }

// a.forEach(myFunction);
// console.log(sum);

// even number using foreach
let myFunction = (item) => {
    if(item % 2 == 0){
        console.log(item);
    }
    
}

a.forEach(myFunction);