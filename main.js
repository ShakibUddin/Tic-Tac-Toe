const boardDiv = document.getElementById("board");
const cellDiv = document.getElementsByClassName("cell");
let someoneWon = false;
var mouseClick = 0;
const symbol = document.createElement("div");

for (let i = 0; i < 9; ++i) {
    cellDiv[i].addEventListener("click", function clickEvent(event) {
        ++mouseClick;
        cellDiv[i].innerHTML = applySymbol().outerHTML;
        cellDiv[i].removeEventListener("click", clickEvent);
        checkResult();
    });
}

function applySymbol() {
    if (mouseClick % 2 == 0) {
        symbol.innerHTML = "<h2>O</h2>";
        symbol.style.color = "black";
    }
    else {
        symbol.innerHTML = "<h2>X</h2>";
        symbol.style.color = "red";
    }
    return symbol;
}

function checkResult(){
    //check diagonally
    if(cellDiv[0].innerText === "X" && cellDiv[4].innerText === "X" && cellDiv[8].innerText === "X" 
    || cellDiv[2].innerText === "X" && cellDiv[4].innerText === "X" && cellDiv[6].innerText === "X"){
        alert("X has won");
        someoneWon = true;
        window.location.reload();
    }
    //check diagonally
    else if(cellDiv[0].innerText === "O" && cellDiv[4].innerText === "O" && cellDiv[8].innerText === "O" || 
    cellDiv[2].innerText === "O" && cellDiv[4].innerText === "O" && cellDiv[6].innerText === "O"){
        alert("O has won");
        someoneWon = true;
        window.location.reload();
    }
    else{
        //check rows
        for(let i=0;i<9;i+=3){
            if(cellDiv[i].innerText === "X" && cellDiv[i+1].innerText === "X" && cellDiv[i+2].innerText === "X"){
                alert("X has won");
                someoneWon = true;
                window.location.reload();
            }
            else if(cellDiv[i].innerText === "O" && cellDiv[i+1].innerText === "O" && cellDiv[i+2].innerText === "O"){
                alert("O has won");
                someoneWon = true;
                window.location.reload();
            }
        }
        //check columns
        for(let i=0;i<3;++i){
            if(cellDiv[i].innerText === "X" && cellDiv[i+3].innerText === "X" && cellDiv[i+6].innerText === "X"){
                alert("X has won");
                someoneWon = true;
                window.location.reload();
            }
            else if(cellDiv[i].innerText === "O" && cellDiv[i+3].innerText === "O" && cellDiv[i+6].innerText === "O"){
                alert("O has won");
                someoneWon = true;
                window.location.reload();
            }
        }
    }
    if(mouseClick === 9 && !someoneWon){
        alert("Cats game!");
        window.location.reload();
    }
}