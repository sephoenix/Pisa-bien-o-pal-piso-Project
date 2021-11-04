document.addEventListener('DOMContentLoaded', function () {
    let game;

function splashSCreen(){
    let intro = document.getElementById('intro');
}

function newGame () {
    let canvas = document.querySelector('#pisaBien');
    const ctx = canvas.getContext('2d');
}

    // FUNCION NUEVA QUE: startGame() 1. ESCONDA LOS ELEMENTOS DEL SPLASH SCREEN
    // 2. MUESTRE LOS ELEMENTOS DEL CANVAS
    // 3. pisaBienGame.start()

     function startGame(){
        const vamohAJugar = document.querySelector('#prePlay');
        vamohAJugar.addEventListener('click', function(){
            intro.classList.add('hide');
            const game = document.getElementById('game');
            game.classList.remove('hide');
            game.classList.add('mostrar');
            
            newGame()
        })
    }
    startGame();
    splashSCreen();
})