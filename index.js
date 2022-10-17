const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

let estatus = document.getElementById('status');
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Guess = {
    max: 10,
    attemptsNumber: 0,
    numberDrawn: function randomValue(){
        return Math.round(Math.random()*this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa de n°: ' + value;
};

function handleSubmit(e){
    e.preventDefault();

    let kick = document.getElementById('kick').value;

    if(!kick){
        alert('Digite algum valor');
        return;
    }

    updateAttempt(attempt, ++Guess.attemptsNumber);

    if(numberDrawn == kick){
        estatus.innerHTML = 'Parabens, vc acertou';
        result.style.transition = '0.4s';
        result.status.backgroundColor = 'blue';
        result.style.color = '#fff';
        estatus.style.color = '#fff';
        playAgain();
        clear();
    }else if(numberDrawn > kick){
        estatus.innerHTML = 'O numero é maior';
        estatus.style.color = 'red';
        clear();
    }else if(numberDrawn < kick){
        estatus.innerHTML = 'o numero é menor';
        estatus.style.color = 'red';
        clear();
    }
}

function playAgain(){
    document.getElementById('restart').style.display = flex;

}

function restart(){
    document.location.reload(true);
}

function clear(){
    document.getElementById('kick').value = '';
}