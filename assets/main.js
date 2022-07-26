const resetBtn = document.querySelector('.reset-btn')
const closeBtns = document.querySelectorAll('.close-btn')
const modal = document.querySelector('.modal')
const winBox = document.querySelector('.win-box')
const tieBox = document.querySelector('.tie-box')
const winnerText = document.querySelector('.winner-text')

resetBtn.addEventListener('click', function() {
    resetGame()
})

const col = document.querySelectorAll('.col')
let arr = new Array(9).fill(null)
console.log(arr)
let a = 'O';
function changeTurn() {
    if(a == 'O'){
        return a = 'X'
    }
    else {
        return a = 'O'
    }
}
let checkWinner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let result

for(let i = 0 ; i < col.length ; i++){
    col[i].addEventListener('click', ()=> {
        if(result){
            return
        }
        if(!arr[col[i].getAttribute('value')]){
            col[i].innerText = a
            arr[col[i].getAttribute('value')] = a
            changeTurn();
            result = checkWin()
        }
    })
}

function checkWin() {
    for(let i = 0; i < checkWinner.length; i++){
        let index1 = checkWinner[i][0]
        let index2 = checkWinner[i][1]
        let index3 = checkWinner[i][2]
        if(arr[index1] && arr[index1] == arr[index2] && arr[index1] == arr[index3] ){
            winnerText.innerText = `Player ${arr[index1]} is the winner`
            modal.classList.add('flex')
            winBox.classList.add('flex')
            resetGame()
            return true
        }
    }
    for(let i = 0 ; i <arr.length ; i++){
        if(arr[i] == null)return false
    }
    modal.classList.add('flex')
    tieBox.classList.add('flex')
    resetGame()
}

function resetGame() {
    a = 'O'
    arr = new Array(9).fill(null)
    for(let i = 0 ; i < col.length ; i++){
        col[i].innerText = ""
    }
    result = false
}

for(let i in closeBtns){
    closeBtns[i].onclick = function() {
        winBox.classList.remove('flex')
        tieBox.classList.remove('flex')
        modal.classList.remove('flex')
        resetGame()
    }
}


