alert("Hi");
people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    }
]

const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person)} ` //Yes - you can put a function call inside the tick quotes!
    summary += capitalizeAllFirstLetter(person.profession)
    summary += "from " + capitalize(person.city) + ", "
    summary += capitalize(person.country) + ". "
    summary += capitalize(person.name) + ` loves to say "${capitalize(person.catchphrase)}".`
    return summary
}

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const capitalizeAllFirstLetter = function (str){
    strArray = str.split(" ");
    strResult = "";
    for (i of strArray){
        strResult += capitalize(i) + " "
    }
    return strResult
}

const getAge = function (person) {
    let getAge = ""
    if (person.age < 21) {
        getAge = "underage"
    } else if (person.age > 55) {
        getAge = "55+"
    } else {
        getAge = person.age
    }
    return getAge
}

console.log(getSummary(people_info[0]))
console.log(getSummary(people_info[1]))
console.log(getSummary(people_info[2]))