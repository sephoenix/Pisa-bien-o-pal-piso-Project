class Game {
    constructor(options) {
        this.ctx = options.ctx;
        this.body = options.body;
        this.player = new Player(30,40,100,100,"green")
        this.steps = [];
    }

    _drawPlayer() {
        this.ctx.fillStyle='red';
        this.ctx.FillRect(10, 10, 20, 20);
    }

    _generateSteps(){
        let steps = [ ];
        const step1 = new Step (20, 20, 20, 20, 'blue', true);
        const step2 = new Step (60, 20, 20, 20, 'red', false);
        const step3 = new Step (20, 90, 20, 20, 'red', false);
        const step4 = new Step (60, 90, 20, 20, 'blue', true);
        const step5 = new Step (20, 130, 20, 20, 'blue', true);
        const step6 = new Step (60, 130, 20, 20, 'red', false);
        const step7 = new Step (20, 160, 20, 20, 'blue', true);
        const step8 = new Step (60, 160, 20, 20, 'red', false);
        const step9 = new Step (20, 190, 20, 20, 'red', false);
        const step10 = new Step (60, 190, 20, 20, 'blue', true);
        const step11 = new Step (20, 220, 20, 20, 'blue', true);
        const step12 = new Step (60, 220, 20, 20, 'red', false);
        const step13 = new Step (20, 250, 20, 20, 'blue', true);
        const step14 = new Step (60, 250, 20, 20, 'red', false);
        const step15 = new Step (20, 280, 20, 20, 'blue', true);
        const step16 = new Step (60, 280, 20, 20, 'red', false);

        steps.push(step1);
        
        steps._drawStep();

        }

        // genera diversos const step1 = new Step(10, 30, true)
        // this.steps.push(step1)
        // this.steps[i]._drawStep();
    }

    _assignControls(){
        // Teclas izq drch this.player.moveRight()
    }

    start(){
        this.player._drawPlayer();
        this._generateSteps();
        // request animation frame
    }
}