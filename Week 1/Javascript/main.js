//This is a training for javascript

/* we can multiline comment like this
here we finish the comment */

//This is how we can out values in the console which can be opened by ctrl + shift + I on CRHOME
    //console.log("Hello, World")

//Varaiables

    //let country = "Jordan"

    //Intialization, defining. We can define a variable and not intialize it
    //let mysteriousCountry

    //camleCase : When we define a variable we make first word lowercase and other word upperCase
    
    //Unintialized variables will have undefined value

    // unDefined and not Defined is different

//Concatenation
    
    //Javascript Concatenate string

//Coercion

    //The automatic conversion of data type, Type conversion is similar to type coercion

//Identifires

    //var , const , let
        //var and let are the same but var is old and should not be used anymore
        //Const is when a variable has constant variable and should be intialized right away

//Operators

    // < , > , <=    , >= , == (For value only) , === (For value and type) ,!=

//Mathematical Operators   
    
    // + , - , * , /
    //Nan : not a number

    //Falsey Expressions
        // 0
        // "" , ''
        // undefined
        // Nan
        // Null
    
//Logical Operators 
    //&& , !! , !

//Logical Statements 
    /* Not likeble to chain if statments try to find a logic to combine in in one statement
    if condition(){
        do something
        else{
            if condition(){

            }
        }
    }
    */

//Promot 

    // x = PROMOT("Enter value of x")

//Array

    // let arrayname = [ "element1" , "element2" , ...]
    // element 1 == arrayname[0]
    // let arraylength = arrayname.length

    //PUSH
        //arrayname.push("NewItem") //will be added to the end

    // spread syntax
        //array1.push(...array2)    //this will merge array2 into array1

    //Splice
        //array.splice(index, howmany, item1, ....., itemX)
            //index: **The position to add/remove items. ** Negative value defines the position from the end of the array.
            //howmany: Number of items to be removed.
            //item1...x: New elements(s) to be added.
    
/*
            const numbers = [1,2,3,4,5,6,7,8,9,10]
            console.log(numbers)
            numbers.splice(1,2)
            console.log(numbers)
            numbers[3]=1
            console.log(numbers)
            numbers.splice(-4)
            console.log(numbers)
            numbers.splice(0,0,0)
            console.log(numbers)
*/

//Object : is a data structure
    /*    
        let person = {
            name: "Yacoub",             //name and occupation are called keys , Yacoub and Engineer are key-values
            occupation: "Engineer"     //key-values can be string, numbers, booleans, arrays an other bojects even functions.
        }

    console.log(person.name)    //This is called dot notation
    console.log(person["occupation"])  //This is called Bracket Notation
    */

//Object properties are the same as keys

/*
let p1 ={
    name: "Person1",
    age: "21",
    city: "btata"
}
let p2 ={
    name: "Person12",
    age: "21",
    city: "btata"
}

if (p1.age == p2.age) {
    if (p1.city == p2.city) {
        console.log("Jill wanted to date Robert")
    }else{
        console.log("Jill wanted to date Robert, but couldn’t")
    }
}
*/

/*
let library= {
    books:
    [
        {
            title : "title1",
            author: "author1"
        },
        {
            title : "title2",
            author: "author2"
        }

    ]
}
*/


/*
//Loops

    //For ... IN
        let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
        // SYNTAX  : FOR ..(Variable).. IN ..(To be looped)..
        for(let companyIndex in companies){
            console.log(companies[companyIndex])
        }

    //For ... of
    for(let company of companies){
        console.log(company)
      }

    // IN vs OF , IN : gives index , OF: gives Element itself

    //While

    while(something){
        do things
    }

    //For i=....

    for (let i=x; i<z; i++){
        dothings()
    }

    */
/*
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let i=0 ; i < names.length ; i++){
    peopleObj={
        name : names[i],
        age : ages[i]
    }
    people.push(peopleObj)
}

console.log(people);
*/



//let arr2 = [5, 6, 7, 8, 9] 
//let arr3 = [arr1, ...arr2]
//console.log(arr3);

// const adder = function(arr1 , ...arr2){
//     for (i=0 ; i<arr2.length ; i++){
//         arr1.push(arr2[i])
//     }
//     return arr1
// }


// let arr1 = [0, 1, 2, 3, 4]
//console.log(adder(arr1 , 5 , 6 , 7, 8))






// const splice = function(arr1 , ...arr2){
//     //First we create the new array of parameters
//     //console.log("arr1 Input" , arr1);
//     //console.log("arr2" , arr2);
//     let deleted = arr1.splice(...arr2);
//     //console.log("arr1 Result" , arr1);
//     //console.log("deleted" , deleted);
//     return deleted
// }

// // returns an empty array when no elements are deleted
// arr = [1,2,3]
// deleted = splice(arr,1,0,5); 
// console.log(deleted); //should be []        