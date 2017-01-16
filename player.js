var lgh;
var lga;

function Player() {
    this.h = 25;
    this.w = 25;
    this.pos = createVector(width / 2, 0);
    this.vel = createVector(0, 0);
    this.applied_forces = gravity.copy();
    this.jumped = false;
    this.isjumping = false;
    this.isglidingL = false;
    this.isglidingR = false;
    this.right = false;
    this.left = false;
    this.max_h_vel = 15;
    this.max_up_vel = -30;
    this.max_down_vel = 60;
    //
    //
    //
    this.update = function () {
        if (this.jumped) {
            console.log(jump_pression);
            if (!this.isjumping && !this.isglidingL && !this.isglidingR) {
                this.vel.y = 0;
                this.applied_forces.y += -gravity.y * 4 * jump_pression;
            }
            else if (this.isglidingL) {
                this.vel.y = 0;
                this.applied_forces.x += gravity.y * 6 * jump_pression;
                this.applied_forces.y += -gravity.y * 4.5 * jump_pression;
            }
            else if (this.isglidingR) {
                this.vel.y = 0;
                this.applied_forces.x += -gravity.y * 6 * jump_pression;
                this.applied_forces.y += -gravity.y * 4.5 * jump_pression;
            }
            this.isjumping = true;
            this.jumped = false;
        }
        if (this.right && right_pression > 5) {
            this.applied_forces.x += 0.8 + lga * 0.5;
            this.isglidingL = false;
        }
        if (this.left && left_pression > 5) {
            this.applied_forces.x += -0.8 + lga * 0.5;
            this.isglidingR = false;
        }
        this.vel.add(this.applied_forces);
        if (!this.isjumping) {
            var h_friction = 0.9;
        }
        else {
            var h_friction = 0.91;
        }
        this.vel.add(this.applied_forces);
        if (!this.isglidingL & !this.isglidingR) {
            var v_friction = 1;
        }
        else {
            if (this.vel.y <= 0) {
                var v_friction = 0.98;
            }
            else {
                var v_friction = 0.7;
            }
        }
        this.vel.x *= h_friction;
        this.vel.y *= v_friction;
        if (this.applied_forces.x == 0 && abs(this.vel.x) < 1) {
            this.vel.x = 0;
        }
        if (this.vel.x > this.max_h_vel) {
            this.vel.x = this.max_h_vel;
        }
        if (this.vel.x < -this.max_h_vel) {
            this.vel.x = -this.max_h_vel;
        }
        if (this.vel.y > this.max_down_vel) {
            this.vel.y = this.max_down_vel;
        }
        if (this.vel.y < this.max_up_vel) {
            this.vel.y = this.max_up_vel;
        }
        this.pos.add(this.vel);
    }
    this.edges = function () {
        lgh = 100000;
        for (var i = 0; i < ground.length - 1; i++) {
            if (this.pos.x >= ground[i].x && this.pos.x < ground[i + 1].x) {
                var temp_dist = sqrt((this.pos.x - ground[i].x) * (this.pos.x - ground[i].x) + (this.pos.y + this.h / 2 - ground[i].y) * (this.pos.y + this.h / 2 - ground[i].y));
                lgh = ground[i].y + temp_dist * sin(ground[i].a);
                lga = ground[i].a;
            }
        }
        if (this.pos.y > lgh - this.h / 2) {
            this.pos.y = lgh - this.h / 2;
            this.vel.y = 0;
            this.isjumping = false;
        }
        else {
            lga = 0;
        }
    }
    this.hits_obs = function (obstacle) {
        var temp_w = 0.5 * (this.w + obstacle.w);
        var temp_h = 0.5 * (this.h + obstacle.h);
        var temp_dx = this.pos.x - obstacle.pos.x;
        var temp_dy = this.pos.y - obstacle.pos.y;
        if (abs(temp_dx) <= temp_w && abs(temp_dy) <= temp_h) {
            // collision!
            if (obstacle.kz) {
                setup();
            }
            else {
                var temp_wy = temp_w * temp_dy;
                var temp_hx = temp_h * temp_dx;
                if (temp_wy > temp_hx) {
                    if (temp_wy > -temp_hx) {
                        // at the bottom
                        this.vel.y = 0;
                        this.pos.y = obstacle.pos.y + obstacle.h / 2 + this.h / 2;
                    }
                    else {
                        // on the right
                        this.vel.x = 0;
                        this.pos.x = obstacle.pos.x - obstacle.w / 2 - this.w / 2;
                        if (this.right) {
                            this.isglidingR = true;
                            cd_glidingR = frameCount;
                        }
                    }
                }
                else {
                    if (temp_wy > -temp_hx) {
                        // on the left
                        this.vel.x = 0;
                        this.pos.x = obstacle.pos.x + obstacle.w / 2 + this.w / 2;
                        if (this.left) {
                            this.isglidingL = true;
                            cd_glidingL = frameCount;
                        }
                    }
                    else {
                        // at the top
                        if (this.applied_forces.y > 0) {
                            this.vel.y = 0;
                            this.pos.y = obstacle.pos.y - obstacle.h / 2 - this.h / 2;
                        }
                        this.isjumping = false;
                    }
                }
            }
        }
    }
    this.render = function () {
        push();
        //        noFill();
        //        stroke(255);
        //        rect(this.pos.x, this.pos.y, this.w, this.h); //HIT BOX
        fill(255, 0, 0);
        noStroke();
        rect(this.pos.x, this.pos.y - 2.5, this.w, this.h - 5);
        rect(this.pos.x - this.w / 2 + 4, this.pos.y + 9, 8, 5);
        rect(this.pos.x + this.w / 2 - 4, this.pos.y + 9, 8, 5);
        if (this.right) {
            rect(this.pos.x - this.w / 2 - 1, this.pos.y + 2, 2, 8);
            fill(0);
            rect(this.pos.x - this.w / 2 + 6, this.pos.y - 5, 6, 6);
            rect(this.pos.x + this.w / 2 - 4, this.pos.y - 5, 6, 6);
        }
        else if (this.left) {
            rect(this.pos.x + this.w / 2 + 1, this.pos.y + 2, 2, 8);
            fill(0);
            rect(this.pos.x - this.w / 2 + 4, this.pos.y - 5, 6, 6);
            rect(this.pos.x + this.w / 2 - 6, this.pos.y - 5, 6, 6);
        }
        else {
            rect(this.pos.x + this.w / 2 + 2, this.pos.y + 2, 5, 8);
            rect(this.pos.x - this.w / 2 - 2, this.pos.y + 2, 5, 8);
            fill(0);
            rect(this.pos.x - this.w / 2 + 5, this.pos.y - 5, 6, 6);
            rect(this.pos.x + this.w / 2 - 5, this.pos.y - 5, 6, 6);
        }
        pop();
    }
}