class Player {
    constructor (x, y, width, height, color, stat){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.stat = stat;
    }

    _moveRight() {
        if (this.x === 350){
            this.x = this.x;
        } else if ( this.y >= 90){
            this.x = this.x + 280;
            this.y = this.y + 70;
        } else {
            this.x = this.x + 140;
            this.y = this.y + 70;
        }
    }

    _moveLeft() {
        if(this.x === 70){
            this.y = this.y;
        } else if ( this.y >= 90){
            this.x = this.x - 280;
            this.y = this.y + 70;
        } else {
        this.x = this.x - 140;
        this.y = this.y + 70;
        }
    }

    _moveDown() {
      this.y = this.y + 70;
    }
}    
// falta bloquear bajar en el punto inicial