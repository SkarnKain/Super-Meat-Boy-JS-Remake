function Obstacle(pos) {
    this.h = 100;
    this.w = 25;
    this.pos = pos;
    var lgh = height;
    while (this.pos.y <= lgh - this.h / 2) {
        for (var i = 0; i < ground.length; i++) {
            if (this.pos.x >= ground[i].x) {
                var temp_dist = sqrt((this.pos.x - ground[i].x) * (this.pos.x - ground[i].x) + (this.pos.y + this.h / 2 - ground[i].y) * (this.pos.y + this.h / 2 - ground[i].y));
                lgh = ground[i].y + temp_dist * sin(ground[i].a);
            }
        }
        this.pos.y += 1;
    }
    //    if (this.pos.y > lgh - this.h / 2) {
    //        this.pos.y = lgh - this.h / 2;
    //    }
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