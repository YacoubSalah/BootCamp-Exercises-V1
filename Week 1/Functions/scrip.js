//Spot Check

let person = {
    name: "Adam",
    speak: function(likedThingy){
        console.log("I like " + likedThingy);
    }
}


// Experiments on call by refference and call by value
/*
let newObj1={
    value:10
}
console.log(newObj1);
let newObj2={
    value:20
}
console.log(newObj2);

newObj2 = newObj1
newObj1.value = 30;
newObj2.value = 40;
console.log(newObj1);
console.log(newObj2);

let newObj1Ref = ""
newObj1Ref = String(newObj1);
console.log(String(newObj1));\
*/