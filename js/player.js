class Player {
    constructor (x, y, width, height, color){
    //this.life = life;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    }

    _moveRight() {
        this.x = this.x + 1;
    }

    _moveLeft() {
        this.x = this.x - 1;
    }
}    
    // _drawPlayer(ctx)
    // moveRight()
    // moveLeft()
