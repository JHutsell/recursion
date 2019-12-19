// Calculate value for nth Factorial 

function factorial(num) {
    if (num === 0) return 1;

    return num * factorial(num - 1);
}

// Check all values in an array

function all(array, callback) {
    let copy;
    copy = copy || array.slice();

    if (copy.length === 0) return true;

    let poppedElement = copy.pop();
    let result = callback(poppedElement);

    if (result === false) return false;
    else {
        all(copy, callback)
    }

    return result;
}

// Product of an Array

function productOfArray(array) {
    if (array.length === 0) return null;
    if (array.length === 1) return array[0]; 

    let poppedElement = array.pop();
    return poppedElement * productOfArray(array);
}

// Search JS Object

function contains(object, target) {

    for(let key in object) {
        if (typeof object[key] === 'object') {
            return contains(object[key],target);
        }

        if (object[key] === target) return true
    }
    return false
}