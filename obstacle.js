function Obstacle(pos) {
    this.h = 50;
    this.w = 25;
    this.pos = pos;
    //
    //
    //
    this.render = function () {
        push();
        noFill();
        stroke(255, 0, 0);
        rect(this.pos.x, this.pos.y, this.w, this.h);
        pop();
    }
}