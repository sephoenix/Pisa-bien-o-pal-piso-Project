class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.player = new Player(210, 20, 50, 50, "green");
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

    _checkSteps(){
        for (let i = 0; i < this.steps.length; i++){
            if (this.player.x === this.steps[i].x && this.player.y === this.steps[i].y && this.steps[i].stat === false){
                this.player.stat = 'dead';
                console.log(this.player.stat);
            }
        }
    }

    _drawTime() {
        let time = window.setTimeout(timer,10000);
        function timer(){
            console.log('You died');
        }
        this.ctx.font = "30px verdana";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(time, 5, 30);
    }

    _clean(){
        this.ctx.clearRect(0, 0, 500, 800);
    }
    
    _assignControls (){
        document.addEventListener('keydown', (event) => {
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
        this._checkSteps();
        this._drawTime();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
    
    start (){
        this._assignControls();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
}
// definir stat = 'dead' para que oculte pantalla y muestre gameOVer