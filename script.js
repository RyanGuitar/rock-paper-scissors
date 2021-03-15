const compSelector = () => {
    let compChoice = ['Rock', 'Paper', 'Scissor'];
    let selector = Math.floor(Math.random()*3);
    return compChoice[selector];
}

const mySelection = (selection) => {
  mySelectionRouter(selection, compSelector())
}

const updateScore = (result) => {
    let you = document.getElementById('you');
    let computer = document.getElementById('computer');
    switch(result){
        case 'Win':
            you.textContent = (parseInt(you.textContent) + 1);
        break;
        case 'Loose':
            computer.textContent = (parseInt(computer.textContent) + 1);
        break;
    }
}

const color = (result) => {
    let resultDisplay = document.querySelector('.text');
    if(result === 'Win'){
      resultDisplay.style.color = 'green';
      updateScore(result);
    }
    if(result === 'Loose'){
      resultDisplay.style.color = 'red'; 
      updateScore(result);
    }
    if(result === 'Draw'){
      resultDisplay.style.color = 'black'; 
    }
}

const displayResult = (result) => {
    let resultDisplay = document.querySelector('.text');
    resultDisplay.style.color = 'black';
    resultDisplay.textContent = '...';
    function display (){
      color(result);
      resultDisplay.textContent = result;
    }
    setTimeout(display, 500);
}

const rock = (computer) => {
    switch(computer) {
        case 'Paper' : displayResult('Loose');
        break;
        case 'Scissor' : displayResult('Win');
    }
}

const paper = (computer) => {
    switch(computer) {
        case 'Scissor' : displayResult('Loose');
        break;
        case 'Rock' : displayResult('Win');
    }
}

const scissor = (computer) => {
    switch(computer) {
        case 'Rock' : displayResult('Loose');
        break;
        case 'Paper' : displayResult('Win');
    }
}

const mySelectionRouter = (me, computer) => {
    if (me === computer){
        displayResult('Draw');
        return;
    } 
    switch(me) {
        case 'Rock': rock(computer);
            break;
        case 'Paper': paper(computer);
            break;
        case 'Scissor': scissor(computer);
    }
}



