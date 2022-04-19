let playerTurn = document.getElementById('playerTurn');
let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');

let allBoxes = document.getElementsByClassName("box");
let startGameBtn = document.getElementById('startGame');

startGameBtn.addEventListener('click',startGame);

function startGame(){
    Oturn = false;

    if(playerOne.value === '' || playerTwo.value === ''){
        playerOne.style.backgroundColor = 'red';
        playerTwo.style.backgroundColor = 'red';
        return;
    }


    playerOne.style.backgroundColor = 'white';
    playerTwo.style.backgroundColor = 'white';
    playerOne.style.color = 'green';
    playerTwo.style.color = 'green';

    playerTurn.textContent = `${playerOne.value} - X`;;
    for(let j =0; j<allBoxes.length;j++){
        // {once:true} : once item is clicked, function will not run again.
        
        allBoxes[j].addEventListener('click',checkCell, {once:true})
    }
}


function checkCell(e){
    O_mark =  {mark: 'O',color: 'green'}
    X_mark = {mark: 'X',color: 'red'}

    const cellItem = e.target;
    const currentTurn = Oturn? O_mark:X_mark;

    if(currentTurn.mark === 'X'){
        playerTurn.textContent = `${playerTwo.value} - O`;
    }else if(currentTurn.mark === 'O'){
        playerTurn.textContent = `${playerOne.value} - X`;
    }

    cellItem.textContent = currentTurn.mark;
    cellItem.style.color = currentTurn.color;
    let result = evaluate_result();
    
    if(result.condtion === false){
        let winningPlayer = document.getElementById("winningPlayer");
        alert('Stop game');
        winningPlayer.innerText = `${result.status}`
    }
    switch_turns();
    
}


function switch_turns(){
    Oturn = !Oturn;
}


function evaluate_result(){
    var x_marks = []; 
    var o_marks = [];
    for(let i=0;i<allBoxes.length;i++){
        if(allBoxes[i].textContent === 'X'){
            x_marks.push(true);
        }
        else{
            x_marks.push(false);
        }


        if(allBoxes[i].textContent === 'O'){
            o_marks.push(true);
        }
        else{
            o_marks.push(false);
        }
    }


    function checkAll(){
        draw = [];
        for(let i=0; i<allBoxes.length;i++){
            if(allBoxes[i].textContent !== ''){
                draw.push(true);
            }else{
                draw.push(false);
            }
        }
        let res = draw.includes(false);
        return !res;
    }
    
    
    // Horizontal
    win_condition1 = (x_marks[0] && x_marks[1]) && (x_marks[1] && x_marks[2]);
    win_condition1a = (o_marks[0] && o_marks[1]) && (o_marks[1] && o_marks[2]);

    win_condition2 = (x_marks[3] && x_marks[4]) && (x_marks[4] && x_marks[5]);
    win_condition2a = (o_marks[3] && o_marks[4]) && (o_marks[4] && o_marks[5]);

    win_condition3 = (x_marks[6] && x_marks[7]) && (x_marks[7] && x_marks[8]);
    win_condition3a = (o_marks[6] && o_marks[7]) && (o_marks[7] && o_marks[8]);


    // vertical
    win_condition4 = (x_marks[0] && x_marks[3]) && (x_marks[3] && x_marks[6]);
    win_condition4a = (o_marks[0] && o_marks[3]) && (o_marks[3] && o_marks[6]);

    win_condition5 = (x_marks[1] && x_marks[4]) && (x_marks[4] && x_marks[7]);
    win_condition5a = (o_marks[1] && o_marks[4]) && (o_marks[4] && o_marks[7]);

    win_condition6 = (x_marks[2] && x_marks[5]) && (x_marks[5] && x_marks[8]);
    win_condition6a = (o_marks[2] && o_marks[5]) && (o_marks[5] && o_marks[8]);


    //diagonal
    win_condition7 = (x_marks[0] && x_marks[4]) && (x_marks[4] && x_marks[8]);
    win_condition7a = (o_marks[0] && o_marks[4]) && (o_marks[4] && o_marks[8]);

    win_condition8 = (x_marks[2] && x_marks[4]) && (x_marks[4] && x_marks[6]);
    win_condition8a = (o_marks[2] && o_marks[4]) && (o_marks[4] && o_marks[6]);


    if(win_condition1 || win_condition2 || win_condition3 || win_condition4 || win_condition5 || win_condition6 || win_condition7 || win_condition8){
        result =  {status: `${playerOne.value} win's`,condtion: false}
    }
    else if(win_condition1a || win_condition2a || win_condition3a || win_condition4a || win_condition5a || win_condition6a || win_condition7a || win_condition8a){
        result =  {status: `${playerTwo.value} win's`,condtion: false}
    }
    else if(checkAll()){
        result =  {status: "Draw",condtion: false}
    }
    else{
        result =  {status: "Go On",condtion: true}
    }

    return result;
}


