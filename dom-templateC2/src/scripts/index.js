import {getId, qryS, crElement} from './helps'

/*============ Dom 4nd Task */

let left = getId('btnleft')
let right = getId('btnright')
let top = getId('btntop')
let down = getId('btnbottom')

let cv = getId('canvas')
let ball = getId('ball')
var id = null

left.addEventListener('click', function (event) {
    clearInterval(id)
    changBall(left)
})
right.addEventListener('click', function (event) {
    clearInterval(id)
    changBall(right)

})

top.addEventListener('click', function (event) {
    clearInterval(id)
    changBall(top)
})

down.addEventListener('click', function (event) {
    clearInterval(id)
    changBall(down)    
})

let x = 0
let y = 0

function changBall(ballvalue) {

    if (ballvalue === left) {

        id = setInterval(leftball, 100)
        function leftball() {
            if (x <= 0) {
                alert("Game is over")
                clearInterval(id)
                ball.style.left = 0 + 'px'
                ball.style.top = 0 + 'px'
            } else {
                x = x - 5
                ball.style.left = x + 'px'
            }
        }
    }
    if (ballvalue === right) {
        
        id = setInterval(rightball, 100)
        function rightball() {
            if (x >= 263) {
                alert("Game is over")
                clearInterval(id)
                ball.style.left = 0 + 'px'
                ball.style.top = 0 + 'px'
            } else {
                x = x + 5
                ball.style.left = x + 'px'
            }
        }        
    }
    if (ballvalue === top) {

        id = setInterval(topball, 100)
        function topball() {
            if (y <= 0) {
                alert("Game is over")
                clearInterval(id)
                ball.style.left = 0 + 'px'
                ball.style.top = 0 + 'px'
            } else {
                y = y - 5
                ball.style.top = y + 'px'
            }
        }        
    }
    if (ballvalue === down) {

        id = setInterval(downball, 100)
        function downball(){
            if (y >= 263) {
                alert("Game is over")
                clearInterval(id)
                ball.style.left = 0 + 'px'
                ball.style.top = 0 + 'px'
            } else {
                y = y + 5
                ball.style.top = y + 'px'
            }
        }        
    }
}

