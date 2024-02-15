function play(){
    // hide the home screen. to hide the screen add the class hidden to the home section
    let homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    // show the playground
    let playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame();
}

function getARandomAlphabet(){
    let alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    let alphabets = alphabetString.split('');
    let randomNumber = Math.random() * 25;
    let index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
};

function setBackgroundColor(alphabet){
    const element = document.getElementById(alphabet);
    element.classList.add('bg-orange-400');
};

function removeBackgroundColorById(alphabet){
    const element = document.getElementById(alphabet);
    element.classList.remove('bg-orange-400');
}

function continueGame(){
    // step 1: generate a new number
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerHTML = alphabet;
    setBackgroundColor(alphabet);
}

function handleKeyboardKeyUpEvent(e){
    const playerPressed = e.key;
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // cheack right or wrong pressed
    if(playerPressed === expectedAlphabet){
        //update the score
        //1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        //2. increase the score by 1.
        const newScore = currentScore + 1;

        //3. show the update score
        currentScoreElement.innerText = newScore

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed you lossed a life');
        //1. get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //2. reduce the life count
        const newLife = currentLife - 1;
        //3. display the update life count
        currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);