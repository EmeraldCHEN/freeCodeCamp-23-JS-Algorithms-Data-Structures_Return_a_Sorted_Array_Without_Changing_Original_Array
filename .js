var globalArray = [0, 3, 2, 1];

function nonMutatingSort(arr) { 

    return arr.slice(0).sort((a,b) =>a - b);
    
}
console.log(nonMutatingSort(globalArray));
console.log(globalArray);


function nonMutatingSort(arr) {

     let newArr = [];
     return newArr.concat(arr).sort((a,b) => a-b);
     
}
