var lgh;
var lga;

function Player(init_pos) {
    this.h = 25;
    this.w = 25;
    this.pos = init_pos;
    this.vel = createVector(0, 0);
    this.applied_forces = gravity.copy();
    this.jumped = false;
    this.isonground = false;
    this.isjumping = false;
    this.isglidingL = false;
    this.isglidingR = false;
    this.istouchobst = false;
    this.right = false;
    this.left = false;
    this.max_h_vel = 12;
    this.max_up_vel = -30;
    this.max_down_vel = 60;
    this.dead = false;
    //
    //
    //
    this.update = function () {
        if (this.jumped) {
            if (!this.isjumping && !this.isglidingL && !this.isglidingR) {
                this.vel.y = 0;
                this.applied_forces.y += -gravity.y * 4.2 * jump_pression;
            }
            else if (this.isglidingL) {
                this.vel.y = 0;
                this.applied_forces.x += gravity.y * 3 * jump_pression;
                this.applied_forces.y += -gravity.y * 5 * jump_pression;
                this.max_h_vel = 999;
            }
            else if (this.isglidingR) {
                this.vel.y = 0;
                this.applied_forces.x += -gravity.y * 3 * jump_pression;
                this.applied_forces.y += -gravity.y * 5 * jump_pression;
                this.max_h_vel = 999;
            }
            this.isjumping = true;
            this.jumped = false;
        }
        /* GROUND CONTROLE */
        if (this.right && right_pression > 5 && !this.isglidingR && this.isonground) {
            this.applied_forces.x += 0.9 + lga * 0.5;
            this.isglidingL = false;
        }
        if (this.left && left_pression > 5 && !this.isglidingL && this.isonground) {
            this.applied_forces.x += -0.9 + lga * 0.5;
            this.isglidingR = false;
        }
        /* GROUND CONTROLE */
        //
        /* AIR CONTROLE */
        if (this.right && right_pression > 5 && !this.isglidingR && !this.isonground) {
            this.applied_forces.x += 0.9;
            this.isglidingL = false;
        }
        if (this.left && left_pression > 5 && !this.isglidingL && !this.isonground) {
            this.applied_forces.x += -0.9;
            this.isglidingR = false;
        }
        /* AIR CONTROLE */
        //
        /* AIR CONTROLE */
        this.vel.add(this.applied_forces);
        /* FRICTION */
        if (this.isonground) {
            var h_friction = 0.87;
        }
        else {
            var h_friction = 0.95;
        }
        this.vel.add(this.applied_forces);
        if (!this.isglidingL & !this.isglidingR) {
            var v_friction = 1;
        }
        else {
            if (this.vel.y <= 0) {
                var v_friction = 1;
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
        this.max_h_vel = 13;
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
            this.isonground = true;
        }
        else {
            lga = 0;
        }
        if (this.pos.y < level_begin.y - 50 || this.pos.y > level_end.y + 50 || this.pos.x < level_begin.x - 50 || this.pos.x > level_end.x + 50) {
            this.dead = true;
            sd_meat_death[floor(random(0, sd_meat_death.length))].play();
            setup();
        }
    }
    this.hits_obs = function (obstacle) {
        var temp_w = 0.5 * (this.w + obstacle.w);
        var temp_h = 0.5 * (this.h + obstacle.h);
        var temp_dx = this.pos.x - obstacle.pos.x;
        var temp_dy = this.pos.y - obstacle.pos.y;
        if (abs(temp_dx) <= temp_w && abs(temp_dy) <= temp_h) {
            // collision!
            if (obstacle.type == "bg") {
                level += 1;
                setup();
            }
            if (obstacle.type == "spikes") {
                this.dead = true;
                sd_meat_death[floor(random(0, sd_meat_death.length))].play();
                setup();
            }
            else {
                this.istouchobst = true;
                var temp_wy = temp_w * temp_dy;
                var temp_hx1 = temp_h * (temp_dx - 1);
                var temp_hx2 = temp_h * (temp_dx + 1);
                if (temp_wy > temp_hx1) {
                    if (temp_wy > -temp_hx1) {
                        // at the bottom
                        this.vel.y = 0;
                        this.pos.y = obstacle.pos.y + obstacle.h / 2 + this.h / 2;
                    }
                    else {
                        // on the right
                        this.vel.x = 0;
                        this.pos.x = obstacle.pos.x - obstacle.w / 2 - this.w / 2;
                        if (!this.isonground) {
                            this.isglidingR = true;
                            cd_glidingR = frameCount;
                        }
                    }
                }
                else {
                    if (temp_wy > -temp_hx2) {
                        // on the left
                        this.vel.x = 0;
                        this.pos.x = obstacle.pos.x + obstacle.w / 2 + this.w / 2;
                        if (!this.isonground) {
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
                        this.isonground = true;
                    }
                }
            }
        }
    }
    this.hits_saw = function (saw) {
        var temp_dx = abs(saw.pos.x - this.pos.x) - this.w / 2;
        var temp_dy = abs(saw.pos.y - this.pos.y) - this.h / 2;
        if (temp_dx * temp_dx + temp_dy * temp_dy <= ((saw.w / 2) * (saw.w / 2))) {
            this.dead = true;
            sd_meat_death[floor(random(0, sd_meat_death.length))].play();
            setup();
        }
    }
    this.render = function () {
        push();
        //        noFill();
        //        stroke(255);
        //        rect(this.pos.x, this.pos.y, this.w, this.h); //HIT BOX
        translate(this.pos.x, this.pos.y);
        fill(255, 0, 0);
        noStroke();
        if (this.right && !this.isglidingL && !this.isglidingR && !this.isjumping) { // Running to the right
            rotate(PI / 16);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 10); //left leg
            rect(this.w / 2 - 6, 9, 8, 5); //right leg
            rect(-this.w / 2 - 1, 2, 2, 8); //arm
            fill(0);
            rect(this.w / 2 - 6, -5, 6, 6); //eye
            fill(200);
            rect(this.w / 2 - 4, 2, 8, 3); //mouth
        }
        else if (this.left && !this.isglidingL && !this.isglidingR && !this.isjumping) { // Running to the left
            rotate(-PI / 16);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 6, 9, 8, 5); //left leg
            rect(this.w / 2 - 4, 9, 8, 10); //right leg
            rect(this.w / 2 + 1, 2, 2, 8); //arm
            fill(0);
            rect(-this.w / 2 + 6, -5, 6, 6); //eye
            fill(200);
            rect(-this.w / 2 + 4, 2, 8, 3); //mouth
        }
        else if (this.isglidingL) { // Glinding on the left
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 8); //left leg
            rect(this.w / 2 - 6, 9, 8, 5); //right leg
            rect(-this.w / 2 + 4, -this.h / 2, 8, 4); //arm
            fill(0);
            rect(this.w / 2 - 6, -5, 6, 6); //eye
            fill(200);
            rect(this.w / 2 - 4, 2, 8, 3); //mouth
        }
        else if (this.isglidingR) { // Glinding on the right
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 6, 9, 8, 5); //left leg
            rect(this.w / 2 - 4, 9, 8, 8); //right leg
            rect(this.w / 2 - 4, -this.h / 2, 8, 4); //arm
            fill(0);
            rect(-this.w / 2 + 6, -5, 6, 6); //eye
            fill(200);
            rect(-this.w / 2 + 4, 2, 8, 3); //mouth
        }
        else if (this.right && this.isjumping) { // Jumping to the right
            rotate(-PI / 20);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 5); //left leg
            rect(this.w / 2 - 6, 9, 8, 5); //right leg
            rect(-this.w / 2 - 1, 2, 2, 8); //arm
            fill(0);
            rect(this.w / 2 - 6, -5, 6, 6); //eye
            fill(200);
            rect(this.w / 2 - 4, 2, 8, 3); //mouth
        }
        else if (this.left && this.isjumping) { // Jumping to the left
            rotate(PI / 20);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 6, 9, 8, 5); //left leg
            rect(this.w / 2 - 4, 9, 8, 5); //right leg
            rect(this.w / 2 + 1, 2, 2, 8); //arm
            fill(0);
            rect(-this.w / 2 + 6, -5, 6, 6); //eye
            fill(200);
            rect(-this.w / 2 + 4, 2, 8, 3); //mouth
        }
        else {
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 5); //left leg
            rect(+this.w / 2 - 4, 9, 8, 5); //right leg
            rect(-this.w / 2 - 2, 2, 5, 8); //left arm
            rect(this.w / 2 + 2, 2, 5, 8); //right arm
            fill(0);
            rect(-this.w / 2 + 5, -5, 6, 6); //left eye
            rect(this.w / 2 - 5, -5, 6, 6); //right eye
        }
        pop();
    }
}