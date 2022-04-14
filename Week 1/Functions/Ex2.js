function isEven(number){
    return ! (number % 2)
}

function printOdd(arr) {
    for (i of arr)
    if (!isEven(i)) {
        console.log(i);
    }
}

let arr = [1 ,2 ,3, 4, 5]
printOdd(arr)