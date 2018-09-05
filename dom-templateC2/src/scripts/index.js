import {getId, qryS, crElement} from './helps'

/*============ Dom 4nd Task */

let left = getId('btnleft')
let right = getId('btnright')
let top = getId('btntop')
let down = getId('btnbottom')

let cv = getId('canvas')
let ball = getId('ball')


left.addEventListener('click', function (event) {
    changBall(left)
})
right.addEventListener('click', function (event) {
    changBall(right)
})

top.addEventListener('click', function (event) {
    changBall(top)
})

down.addEventListener('click', function (event) {
    changBall(down)
})

let x = 0
let y = 0

function changBall(ballvalue) {

    if (ballvalue === left) {

        var id = setInterval(leftball, 100)
        function leftball() {
            if (x <= 0) {
                alert("error")
                clearInterval(id)
            } else {
                x = x - 5
                ball.style.left = x + 'px'
            }
        }
    }
    if (ballvalue === right) {
        
        var id = setInterval(rightball, 100)
        function rightball() {
            if (x >= 263) {
                alert("error")
                clearInterval(id)
            } else {
                x = x + 5
                ball.style.left = x + 'px'
            }
        }        
    }
    if (ballvalue === top) {

        var id = setInterval(topball, 100)
        function topball() {
            if (y <= 0) {
                alert("error")
                clearInterval(id)
            } else {
                y = y - 5
                ball.style.top = y + 'px'
            }
        }        
    }
    if (ballvalue === down) {

        var id = setInterval(downball, 100)
        function downball(){
            if (y >= 263) {
                alert("error")
                clearInterval(id)
            } else {
                y = y + 5
                ball.style.top = y + 'px'
            }
        }        
    }
}

