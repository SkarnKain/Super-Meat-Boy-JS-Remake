function Obstacle(pos, h, w, kz) {
    this.h = h;
    this.w = w;
    this.pos = pos;
    this.kz = kz;
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
        if (this.kz) {
            fill(255, 0, 0)
        }
        else {
            fill(255);
            stroke(255);
        }
        rect(this.pos.x, this.pos.y, this.w, this.h);
        pop();
    }
}