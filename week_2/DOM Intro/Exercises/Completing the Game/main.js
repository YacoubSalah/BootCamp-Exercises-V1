const ball = document.getElementById("block")

const upBotton = document.getElementById("up")
upBotton.onclick = function () {
    let currentTop = (parseInt(ball.style.top) || 0)
    if (currentTop > 15) {
        ball.style.top = (currentTop - 15) + "px"
    }
}

const downBotton = document.getElementById("down")
downBotton.onclick = function () {
    let currentTop = (parseInt(ball.style.top) || 0)
    if (currentTop < 405) {
        ball.style.top = (currentTop + 15) + "px"
    }
}

const rightBotton = document.getElementById("right")
rightBotton.onclick = function () {
    let currentLeft = (parseInt(ball.style.left) || 0)
    if (currentLeft < 405) {
        ball.style.left = (currentLeft + 15) + "px"
    }
}

const leftBotton = document.getElementById("left")
leftBotton.onclick = function () {
    let currentLeft = (parseInt(ball.style.left) || 0)
    if (currentLeft > 15) {
        ball.style.left = (currentLeft - 15) + "px"
    }
}