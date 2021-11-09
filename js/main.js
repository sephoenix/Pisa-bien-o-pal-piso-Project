document.addEventListener('DOMContentLoaded', function () {

function pisaBienGame(){
    let canvas = document.querySelector('#pisaBien');
    const ctx = canvas.getContext('2d'); 
    const game = new Game(
        {
            ctx: ctx,
            player: new Player(210, 20, 50, 50, "green"),
        },
        gameOver);
    game.start();
    }

function daleGame(){
    const dale = document.querySelector('#dale');
    dale.addEventListener('click', function(){
        dale.classList.add('hide');
        pisaBienGame();
    })
}
    
function startGame(){
    const vamohAJugar = document.querySelector('#prePlay');
    vamohAJugar.addEventListener('click', function(){
        let intro = document.querySelector('#intro');
        intro.classList.add('hide');
        const game = document.getElementById('game');
        game.classList.remove('hide');
        //game.classList.add('mostrar');
        daleGame()
      })
    }

    function gameOver(){
        console.log("gameover")
        let gameOver = document.querySelector('#gameOver');
        let canvas = document.querySelector('#pisaBien');
        canvas.classList.remove('mostrar');
        gameOver.classList.remove('hide');
        //gameOver.classList.add('mostrar');
    }

    function victory(){
        let win = document.querySelector('#win');
        let canvas = document.querySelector('#pisaBien');
        canvas.classList.remove('mostrar');
        win.classList.remove('hide');
        win.classList.add('mostrar');
    }

startGame();
})