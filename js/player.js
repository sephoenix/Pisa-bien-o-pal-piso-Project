class Player {
    constructor (x, y, width, height, color, stat){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stat = stat;
    //this.intervalId = undefined;
    }

    _moveRight() {
        if (this.x === 350){
            this.x = this.x;
        } else if ( this.y >= 90 && this.y < 630){
            this.x = this.x + 280;
            this.y = this.y + 70;
        } else if ( this.x === 70 && this.y < 630){
            this.x = this.x + 70;
            this.y = this.y + 70
        } 
        else {
            this.x = this.x + 140;
            this.y = this.y + 70;
        }
    }

    _moveLeft() {
        if(this.x === 70){
            this.y = this.y;
        } else if ( this.y >= 90 && this.y < 630){
            this.x = this.x - 280;
            this.y = this.y + 70;
        } else if (this.x === 350 && this.y < 630){
            this.x = -70;
            this.y = +70;
        } else {
        this.x = this.x - 140;
        this.y = this.y + 70;
        }
    }

    _moveDown() {
        if (this.x === 210 && this.y === 20){
            this.y ===this.y
        } else if ( this.y === 650){
            this.y = this.y;
        } else {
        this.y = this.y + 70;
        }
    }

/*     stop(){
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
    } */
}