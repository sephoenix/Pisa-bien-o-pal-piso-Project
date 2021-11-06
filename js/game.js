class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(210, 20, 50, 50, "white");
        this.steps = steps;
    }

    _drawPlayer() {
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    _drawSteps(){
        for (let i = 0; i < this.steps.length; i++){
            this.steps[i]._drawStep(this.ctx);
        }
    }

    //_checkSteps


    _clean(){
        this.ctx.clearRect(0, 0, 500, 800);
    }
    
    _assignControls (){
        document.addEventListener('keydown', (event) => {
        //console.log(event);
        switch(event.code){
        case "ArrowRight":
        this.player._moveRight();
        break;
        case "ArrowLeft":
        this.player._moveLeft();
        break;
        case "ArrowDown":
        this.player._moveDown();
        default:
        break;
        }
        });
    }

    _renderGame(){
        this._clean();
        this._drawSteps();
        this._drawPlayer();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
    
    start (){
        this._assignControls();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
}