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
    console.log('player pressed: ', playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
    } else {
        console.log('you missed you lossed a life');
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);