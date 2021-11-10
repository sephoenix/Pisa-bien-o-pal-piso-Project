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
        daleGame()
      })
    }

    function gameOver(){
        let gameOver = document.querySelector('#gameOver');
        let canvas = document.querySelector('#pisaBien');
        canvas.classList.remove('show');
        canvas.classList.add('hide');
        gameOver.classList.remove('hide');
        reload();
    }

    function reload(){
        const reload = document.querySelector('#reload');
        reload.addEventListener('click', function(){
            reload.classList.add('hide');
            const gameOver = document.querySelector('#gameOver');
            gameOver.classList.add('hide');
            gameOver.classList.remove('show');
            daleGame();
        })
    }

    function victory(){
        let win = document.querySelector('#win');
        let canvas = document.querySelector('#pisaBien');
        canvas.classList.remove('show');
        win.classList.remove('hide');
        win.classList.add('show');
    }

startGame();
})