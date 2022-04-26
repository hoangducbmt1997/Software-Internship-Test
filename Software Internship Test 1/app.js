/**
 * PHẦN 1: THUẬT TOÁN
 */

// ----------------------BÀI 1:-----------------------------------
// declare array input and you can change input here
var input1 = [14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22];

//quick sort up ascending
function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (array[j] >= pivot) {
            i++;
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}

function quickSort(array, low, high) {
    if (low < high) {
        var pi = partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

function findMax5(array) {
    //sort
    quickSort(array, 0, array.length - 1);
    for (let i = 0; i < 5; i++) {
        console.log(array[i]);
    }
}
// call funciton
findMax5(input1);



// ----------------------BÀI 2:-----------------------------------
// declare array input and you can change input here
var input2 = [false, "up", "down", "left", "right", true, false];

//quick sort up ascending
function partition(array, low, high) {
    var pivot = array[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (array[j] >= pivot) {
            i++;
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    return i + 1;
}

function quickSort(array, low, high) {
    if (low < high) {
        var pi = partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
}

// find frequent
function findFrequent(array) {
    let count;
    let result;
    let max = 0;
    // sort array
    quickSort(array, 0, array.length - 1);
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == array[i + 1]) {
            count++;
            if (count > max) {
                max = count;
                result = array[i];
            }
        } else {
            count = 1;
        }
    }
    return result;
}
// call function
console.log(findFrequent(input2));