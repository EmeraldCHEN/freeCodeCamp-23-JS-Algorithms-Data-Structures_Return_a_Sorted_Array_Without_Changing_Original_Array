var globalArray = [0, 3, 2, 1];

function nonMutatingSort(arr) { 

    return arr.slice(0).sort((a,b) =>a - b); // Use slice() to duplicate arr firstly
    
}
console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]
console.log(globalArray); // [5, 6, 3, 2, 9]

///////////////////////////////////////////////////////////////////////////////////////////////

function nonMutatingSorting(arr) {

     let newArr = [];
     return newArr.concat(arr).sort((a,b) => a-b); // Concatenate an empty array to the one being sorted as concat returns a new array
     
}
