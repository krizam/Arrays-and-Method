//For a given array with marks of the students [85,97,44,37,76,60].Find the average marks of the entire class
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum += val;
}
let avg =sum/marks.length;
console.log("Avg",avg);

// For given array with a price of five items  [250 ,645,300,900,50].Al item  havr an offer  of 10% off on them . Change the  array to store final price after  applyind offer

 let items=[250,645,300,900,50]
 for(i=0; i<items.length; i++){
    let offer = items[i]/10;
    items[i]-= offer;

 }
 console.log(items);

// Lecture 4:
// Arrays

// Array indices
// let marks=[10,20,30,40,45]
// marks[0];

// Array value change indices
// marks[0]=55

// Important Notes // Interview Questions
// Strings are inmutable( We can't change as according to particular indexss)
// Array Mutable(Can be changeable)

// Loop over Array
// Loop>>>>iterable(string collection of characters)  objects (Collection of Key Pairs) arrays(Collections of Items)
// for loop : Length 
// starting from 0  when we are using it for string array
// Length = how many characters are there in array
// for of
// for in loop
// most prefered for off
// array methods
// array methos must start with small letters 





