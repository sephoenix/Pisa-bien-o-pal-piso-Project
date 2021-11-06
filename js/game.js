class Game {
    constructor(ctx) {
        this.ctx = ctx;
        //this.body = options.body;
        this.player = new Player(10, 10, 20, 20, "red");
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

    // _drawSteps(){
       
    //     this.steps = steps;
    //     //return this.steps;
    // }

    _clean(){
        this.ctx.clearRect(0, 0, 500, 960);
    }
    
    _assignControls (){
        document.addEventListener('keydown', (event) => {
            console.log(event);
            switch(event.code){
                case "ArrowRight":
                    this.player._moveRight();
                    break;
                case "ArrowLeft":
                    this.player._moveLeft();
                    break;
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
            //this.steps[i]._drawSteps();
        }
}

        // genera diversos const step1 = new Step(10, 30, true)
        // this.steps.push(step1)
        // this.steps[i]._drawStep();
        
        /*_assignControls(){
            // Teclas izq drch this.player.moveRight()
        }
        */
        /*start (){
            this.player._drawPlayer();
            _drawSteps();
            // request animation frame
        }
    */


