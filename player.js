function Player() {
    var max_vel = 7;
    this.h = 100;
    this.w = 25;
    this.pos = createVector(width / 2, height - this.h / 2);
    this.vel = createVector(0, 0);
    this.applied_forces = gravity.copy();
    this.jumped = false;
    this.isjumping = false;
    this.right = false;
    this.left = false;
    //
    //
    //
    this.update = function () {
        if (this.jumped) {
            player.applied_forces.y += -5;
            this.jumped = false;
        }
        if (this.right) {
            player.applied_forces.x += 0.5;
        }
        if (this.left) {
            player.applied_forces.x += -0.5;
        }
        this.vel.add(this.applied_forces);
        this.vel.x *= 0.93;
        this.applied_forces = gravity.copy();
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        noFill();
        stroke(0, 255, 255);
        rect(this.pos.x, this.pos.y, this.w, this.h); //HIT BOX
        pop();
    }
    this.edges = function () {
        if (this.pos.y > height - this.h / 2) {
            this.pos.y = height - this.h / 2;
            this.vel.y = 0;
            this.isjumping = false;
        }
    }
}