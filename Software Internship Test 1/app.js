/**
 * PHẦN 1: THUẬT TOÁN
 */

// ----------------------BÀI 1:-----------------------------------
// declare array input and you can change input here
var input1 = [14, 12, 38, 17, 10, 36, 12, 29, 45, 34, 48, 22];

//sort up ascending
function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
// find max 5 number
function findMax5(array) {
    sort(input1);
    var output = [];
    for (let i = 0; i < 5; i++) {
        output[i] = array[i];
        console.log(output[i]);
    }
}
// call function
findMax5(input1);

// ----------------------BÀI 2:-----------------------------------
// declare array input and you can change input here
var input2 = [false, "up", "down", "left", "right", true, false];

//sort up ascending
function sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
// find frequent
function findFrequent(array) {
    let count;
    let result;
    let max = 0;

    // sort array
    sort(array);
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