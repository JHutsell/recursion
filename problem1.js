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
    let result;
    if (array.length === 0) return null;
    if (array.length === 1) return array[0]; 

    let poppedElement = array.pop();
    result = poppedElement * productOfArray(array);
    return result;
}