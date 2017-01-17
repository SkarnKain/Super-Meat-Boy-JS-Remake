function Obstacle(pos, h, w, type) {
    this.h = h;
    this.w = w;
    this.pos = pos;
    this.type = type;
    var lgh = 10000;
    var temp_move = 0;
//    if (this.type != "saw") {
//        while (this.pos.y <= lgh - this.h / 2) {
//            for (var i = 0; i < ground.length; i++) {
//                if (this.pos.x >= ground[i].x) {
//                    var temp_dist = sqrt((this.pos.x - ground[i].x) * (this.pos.x - ground[i].x) + (this.pos.y + this.h / 2 - ground[i].y) * (this.pos.y + this.h / 2 - ground[i].y));
//                    lgh = ground[i].y + temp_dist * sin(ground[i].a);
//                }
//            }
//            this.pos.y += 1;
//        }
//    }
//    if (this.type == "pl") {
//        this.pos.y += 100;
//    }
    //
    //
    this.render = function () {
        push();
        noStroke();
        if (this.type == "bg") {
            if (frameCount / 120 == round(frameCount / 120)) {
                temp_move += 1;
            }
            temp_move = temp_move % 2;
            fill(255, 140, 190);
            translate(this.pos.x, this.pos.y);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 5); //left leg
            rect(+this.w / 2 - 4, 9, 8, 5); //right leg
            if (temp_move == 0) {
                rect(-this.w / 2 - 2, -10, 7, 8); //left arm
                rect(this.w / 2 + 2, -10, 7, 8); //right arm
            }
            else {
                rect(-this.w / 2 - 2, -2, 7, 8); //left arm
                rect(this.w / 2 + 2, -2, 7, 8); //right arm
            }
            fill(0);
            rect(-this.w / 2 + 5, -5, 6, 6); //left eye
            rect(this.w / 2 - 5, -5, 6, 6); //right eye
        }
        else if (this.type == "spikes") {
            fill(100);
            translate(this.pos.x, this.pos.y);
            beginShape();
            vertex(-this.w / 2, this.h / 2);
            vertex(-this.w / 2, 0);
            var temp_cd = 1;
            var i = -this.w / 2 + this.w / 50;
            while (i < this.w / 2) {
                if (temp_cd % 2 == 1) {
                    vertex(i, -this.h / 2);
                }
                else {
                    vertex(i, 0);
                }
                i += this.w / 50;
                temp_cd += 1;
            }
            vertex(this.w / 2, 0);
            vertex(this.w / 2, this.h / 2);
            endShape(CLOSE);
        }
        else if (this.type == "saw") {
            temp_rot = (frameCount / 20) % TWO_PI;
            fill(100);
            translate(this.pos.x, this.pos.y);
            beginShape();
            var temp_cd = 1;
            var i = 0;
            while (i < TWO_PI) {
                var temp_rad = this.w / 2;
                if (temp_cd % 2 == 1) {
                    var temp_x = temp_rad * cos(i + temp_rot);
                    var temp_y = temp_rad * sin(i + temp_rot);
                    vertex(temp_x, temp_y);
                }
                else {
                    var temp_x = 7.5 / 10 * temp_rad * cos(i + temp_rot);
                    var temp_y = 7.5 / 10 * temp_rad * sin(i + temp_rot);
                    vertex(temp_x, temp_y);
                }
                i += PI / 15;
                temp_cd += 1;
            }
            endShape(CLOSE);
            temp_rot += PI / 15;
            fill(150);
            beginShape();
            var temp_cd = 1;
            var i = 0;
            while (i < TWO_PI) {
                var temp_rad = this.w / 2;
                if (temp_cd % 2 == 1) {
                    var temp_x = temp_rad * cos(i + temp_rot);
                    var temp_y = temp_rad * sin(i + temp_rot);
                    vertex(temp_x, temp_y);
                }
                else {
                    var temp_x = 7.5 / 10 * temp_rad * cos(i + temp_rot);
                    var temp_y = 7.5 / 10 * temp_rad * sin(i + temp_rot);
                    vertex(temp_x, temp_y);
                }
                i += PI / 15;
                temp_cd += 1;
            }
            endShape(CLOSE);
            fill(125);
            ellipse(0, 0, this.w * 7 / 10);
            fill(150);
            ellipse(0, 0, this.w * 4.5 / 10);
            fill(175);
            ellipse(0, 0, this.w * 4 / 10);
            fill(150);
            ellipse(0, 0, this.w * 2.5 / 10);
            fill(100);
            ellipse(0, 0, this.w * 2 / 10);
        }
        else {
            fill(150, 100, 50);
            rect(this.pos.x, this.pos.y, this.w, this.h);
        }
        pop();
    }
}