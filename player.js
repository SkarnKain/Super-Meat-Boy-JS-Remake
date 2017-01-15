function Player() {
    this.h = 75;
    this.w = 25;
    this.pos = createVector(width / 2, 0);
    this.vel = createVector(0, 0);
    this.applied_forces = gravity.copy();
    this.jumped = false;
    this.isjumping = false;
    this.right = false;
    this.left = false;
    this.max_h_vel = 15;
    //
    //
    //
    this.update = function () {
        if (this.jumped) {
            this.applied_forces.y += -gravity.y * 40;
            this.jumped = false;
        }
        if (this.right) {
            this.applied_forces.x += 0.75;
        }
        if (this.left) {
            this.applied_forces.x += -0.75;
        }
        this.vel.add(this.applied_forces);
        if (!this.isjumping) {
            var h_friction = 0.95;
        }
        else {
            var h_friction = 0.96;
        }
        this.vel.x *= h_friction;
        this.applied_forces = gravity.copy();
        if (this.vel.x > this.max_h_vel) {
            this.vel.x = this.max_h_vel;
        }
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
        var lgh = 0;
        for (var i = 0; i < ground.length - 1; i++) {
            if (this.pos.x >= ground[i].x && this.pos.x < ground[i + 1].x) {
                var temp_dist = sqrt((this.pos.x - ground[i].x) * (this.pos.x - ground[i].x) + (this.pos.y + this.h / 2 - ground[i].y) * (this.pos.y + this.h / 2 - ground[i].y));
                lgh = ground[i].y + temp_dist * sin(ground[i].a);
            }
        }
        if (this.pos.y > lgh - this.h / 2) {
            this.pos.y = lgh - this.h / 2;
            this.vel.y = 0;
            this.isjumping = false;
        }
    }
    this.hits_obs = function (obstacle) {
        if (this.pos.x + this.w / 2 >= obstacle.pos.x - obstacle.w / 2 && this.pos.x - this.w / 2 <= obstacle.pos.x + obstacle.w / 2) {
            if (this.pos.y + this.w / 2 >= obstacle.pos.y - obstacle.h / 2 && this.pos.y - this.w / 2 <= obstacle.pos.y + obstacle.h / 2) {
                this.pos.y -= this.vel.y;
                this.vel.y = 0;
                this.applied_forces.y *= -1;
                console.log("XXX");
                var fut_x = this.pos.x + this.vel.x;
                var fut_y = this.pos.y + this.vel.y;
                if (fut_x + this.w / 2 >= obstacle.pos.x - obstacle.w / 2 && fut_x - this.w / 2 <= obstacle.pos.x + obstacle.w / 2) {
                    if (fut_y + this.w / 2 >= obstacle.pos.y - obstacle.h / 2 && fut_y - this.w / 2 <= obstacle.pos.y + obstacle.h / 2) {
                        this.applied_forces.y *= -1;
                        this.vel.x = 0;
                        this.applied_forces.x *= -1;
                    }
                }
            }
        }
    }
}