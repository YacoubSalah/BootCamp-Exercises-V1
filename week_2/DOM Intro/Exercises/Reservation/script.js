const reservations = {
    bob : {claimed : false},
    ted : {claimed : true}
}

submitButton = document.getElementById("submitButton")
inputField = document.getElementById("inputField")

submitButton.onclick = function (){
    checkReservation(inputField.value)
}

const checkReservation = function(name){
    alert(reservations[name].claimed)
    if (name in reservations) {
/*         if (reservations.getElementByIdname[claimed] == true) {
            alert(name + " has already claimed their reservation")
        }else{
            alert("Welcome " + name + ".")
            name[0] = false
        } */
    }else{
        alert("There is no reservation under the name: " + name + ".")
    }
}