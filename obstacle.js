function Obstacle(pos, h, w, type) {
    this.h = h;
    this.w = w;
    this.pos = pos;
    this.type = type;
    var lgh = 10000;
    while (this.pos.y <= lgh - this.h / 2) {
        for (var i = 0; i < ground.length; i++) {
            if (this.pos.x >= ground[i].x) {
                var temp_dist = sqrt((this.pos.x - ground[i].x) * (this.pos.x - ground[i].x) + (this.pos.y + this.h / 2 - ground[i].y) * (this.pos.y + this.h / 2 - ground[i].y));
                lgh = ground[i].y + temp_dist * sin(ground[i].a);
            }
        }
        this.pos.y += 1;
    }
    this.render = function () {
        push();
        if (this.type == "bg") {
            noStroke();
            fill(255, 140, 190);
            translate(this.pos.x, this.pos.y);
            rect(0, -2.5, this.w, this.h - 5); //body
            rect(-this.w / 2 + 4, 9, 8, 5); //left leg
            rect(+this.w / 2 - 4, 9, 8, 5); //right leg
            rect(-this.w / 2 - 2, -10, 7, 8); //left arm
            rect(this.w / 2 + 2, -10, 7, 8); //right arm
            fill(0);
            rect(-this.w / 2 + 5, -5, 6, 6); //left eye
            rect(this.w / 2 - 5, -5, 6, 6); //right eye
        }
        else if (this.type == "kz") {
            fill(255, 0, 0);
            rect(this.pos.x, this.pos.y, this.w, this.h);
        }
        else {
            fill(255);
            stroke(255);
            rect(this.pos.x, this.pos.y, this.w, this.h);
        }
        pop();
    }
}