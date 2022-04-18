let allBoxes = document.getElementsByClassName("box");



startGame();

function startGame(){
    mark_O();
}


function mark_X(){
    for(let j =0; j<allBoxes.length;j++){
        allBoxes[j].addEventListener('click',function(){
            if(allBoxes[j].textContent === ''){
                allBoxes[j].textContent = 'X';
            }else{
                alert("Foul");
            }
            
        })
    }
}

function mark_O(){
    for(let j =0; j<allBoxes.length;j++){
        allBoxes[j].addEventListener('click',function(){
            if(allBoxes[j].textContent === ''){
                allBoxes[j].textContent = 'O';
            }else{
                alert("Foul");
            }
            
        })
    }
}





var x_marks = []; 
for(let i=0;i<allBoxes.length;i++){
    
    if(allBoxes[i].textContent === 'X'){
        x_marks.push(true);
    }else{
        x_marks.push(false);
    }
}


// Horizontal
win_condition1 = (x_marks[0] && x_marks[1]) && (x_marks[1] && x_marks[2]);
win_condition2 = (x_marks[3] && x_marks[4]) && (x_marks[4] && x_marks[5]);
win_condition3 = (x_marks[6] && x_marks[7]) && (x_marks[7] && x_marks[8]);

// vertical
win_condition4 = (x_marks[0] && x_marks[3]) && (x_marks[3] && x_marks[6]);
win_condition5 = (x_marks[1] && x_marks[4]) && (x_marks[4] && x_marks[7]);
win_condition6 = (x_marks[2] && x_marks[5]) && (x_marks[5] && x_marks[8]);

//diagonal
win_condition7 = (x_marks[0] && x_marks[4]) && (x_marks[4] && x_marks[8]);
win_condition8 = (x_marks[2] && x_marks[4]) && (x_marks[4] && x_marks[6]);



if(win_condition1 || win_condition2 || win_condition3 || win_condition4 || win_condition5 || win_condition6 || win_condition7 || win_condition8){
    result = "x win's"
}else{
    result = "O win's"
}

console.log(result);