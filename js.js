const array = [1, 1, 1, 1, 1, 1, 1, 3, 5, 5, 5, 6, 9, 11, 11, 11, 11, 11, 11, 11, 11, 13, 13, 13, 17, 17, 17, 17, 17, 17];

function max_sequence(array) {
    let numA, numB, n, index, indexMax, currentNum, currentMax
    let counter = 1;
    let counterMax = 1;

    for (let i = 0; i < array.length; i++) {
        numA = array[i];
        n = i + 1;
        numB = array[n];

        if (numA === numB) {
            counter++;
            if (counter === 2) {
                index = i
                currentNum = numA
            }// End if
        }// End if

        if (numA !== numB) {
            if (counter > counterMax) {
                counterMax = counter;
                indexMax = index;
                currentMax = currentNum;
                console.log(`currentNum: ${currentNum} index ${index} `)
            }
            counter = 1
        }// End if
    }// End for loop

    return 'indexMax: ' + indexMax + ' currentMax: ' + currentMax + ' counterMax: ' + counterMax;
}// End function

window.onload = function () {
    console.log(max_sequence(array));
}
