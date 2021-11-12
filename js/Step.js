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
/*         this.ctx.drawImage(
            stepSprite.sprite,
            stepSprite.x,
            stepSprite.y,
            stepSprite.width,
            stepSprite.height,
            this.step.x,
            this.step.y,
            this.step.width,
            this.step.height
        );  */
                    ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}