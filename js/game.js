class Game {
    constructor(options, callback, victoryCb) {
        this.ctx = options.ctx;
        this.player = options.player;
        this.steps = steps;
        this.cb = callback;
        this.victoryCb = victoryCb;
        this.countdown = 5;
        this.interval;
    }

    _drawPlayer() {
        this.ctx.drawImage(
            playerSprite.sprite,
            playerSprite.x,
            playerSprite.y,
            playerSprite.width,
            playerSprite.height,
            this.player.x,
            this.player.y,
            this.player.width,
            this.player.height
        ); 
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
            }
        }
    }
    
    _setTime(){
        this.interval = setInterval(() => {
            this.countdown = this.countdown - 1;
            }, 1000);
    }

    _victoria(){
        if (this.player.x === 210 && this.player.y === 720){
            this.victoryCb();
            clearInterval(this.interval);
        }
    }

    _finalCountdown() {
        if (this.countdown === 0){
            this.player.stat = 'dead';
            }
    }

    _playerStat(){
        if (this.player.stat === 'dead'){
            this.cb();
        }
    }

    _drawTime() {
        this.ctx.font = "30px verdana";
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(this.countdown, 5, 30);
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
        this._drawTime();
        this._finalCountdown();
        this._checkSteps();
        this._playerStat();
        this._victoria();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
    
    start (){
        this._assignControls();
        this._setTime();
        window.requestAnimationFrame(this._renderGame.bind(this));
        }
}