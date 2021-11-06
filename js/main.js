document.addEventListener('DOMContentLoaded', function () {

function pisaBienGame(){
    let canvas = document.querySelector('#pisaBien');
    const ctx = canvas.getContext('2d'); 
    const game = new Game(ctx);
    game.start();  
    //start();
}

    // FUNCION NUEVA QUE: startGame() 1. ESCONDA LOS ELEMENTOS DEL SPLASH SCREEN
    // 2. MUESTRE LOS ELEMENTOS DEL CANVAS
    // 3. pisaBienGame.start()

function startGame(){
    const vamohAJugar = document.querySelector('#prePlay');
    vamohAJugar.addEventListener('click', function(){
        let intro = document.querySelector('#intro');
        intro.classList.add('hide');
        const game = document.getElementById('game');
        game.classList.remove('hide');
        game.classList.add('mostrar');
        pisaBienGame()
      })
    }
startGame();
})