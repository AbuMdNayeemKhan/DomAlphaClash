function play(){
    // hide the home screen. to hide the screen add the class hidden to the home section
    let homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    // show the playground
    let playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
}