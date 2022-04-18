const orderList1 = document.getElementById("orderList1")

orderList1.onclick = function(){
    const newListItem = document.createElement("li")
    newListItem.innerHTML = "Hello I am NEW"
    orderList1.appendChild(newListItem)
}

orderList1.onmouseover = function(){
    orderList1.style.backgroundColor = "yellow"
}

orderList1.onmouseleave = function(){
    orderList1.style.backgroundColor = "green"
}