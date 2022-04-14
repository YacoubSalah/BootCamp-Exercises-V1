function checkExists( arr , num){
    for(i of arr){
        if (i==num)
            return true;
    }
    return false;
}
arr = [1, 2, 3, 4, 5]
console.log(checkExists(arr, 3));