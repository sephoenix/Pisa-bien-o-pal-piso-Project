// x, y, width, heght, color, status
// _drawStep()

class Step {
    constructor (x, y, width, height, color, stat){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.stat = stat;
    }
    
    _drawStep(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}