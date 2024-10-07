 /*Create a function removeEgg(foods) that takes an array of strings and returns an array where the string egg is removed  */

function removeEgg(){
        let arr = ['egg', 'tuna', 'pie', 'egg', 'ham'];
    
    // Use filter to create a new array without 'egg'
        arr = arr.filter(function(value2) {
            return value2 !== 'egg';  // Only keep elements that are not 'egg'
    });

    console.log(arr);  // Output: ['tuna', 'pie', 'ham']
}

removeEgg();
