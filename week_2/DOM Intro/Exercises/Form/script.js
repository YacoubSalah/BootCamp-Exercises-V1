statusField = document.getElementById("statusField")
submitButton = document.getElementById("submitButton")
submitButton.onclick = function submitClicked() {
    statusField.style.color = "black"
    checkName()
    checkSalary()
    checkPhone()
}

nameField = document.getElementById("nameField")
function checkName() {
    currentValue = nameField.value
    if (currentValue.length < 3) {
        alert("Name is not valid")
        statusField.innerHTML = "Name is not valid"
        statusField.style.color = "red"
        return false
    } else {
        return true
    }
}

desiredSalaryField = document.getElementById("desiredSalaryField")
function checkSalary() {
    currentValue = desiredSalaryField.value
    if (currentValue < 10000 || currentValue > 16000) {
        alert("Salary is not reasonable")
        statusField.innerHTML = "Salary is not reasonable"
        statusField.style.color = "red"
        return false
    } else {
        return true
    }
}

phoneField = document.getElementById("phoneField")
function checkPhone() {
    currentValue = phoneField.value
    if (phoneField.length != 10) {
        alert("Phone number is not valid")
        statusField.innerHTML = "Phone number is not valid"
        statusField.style.color = "red"
        return false
    }
}