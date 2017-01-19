function Saw(spos, size, epos, fr) {
    this.spos = spos;
    this.size = size;
    this.pos = spos.copy();
    var change = false;
    var change_fc = frameCount;
    if (epos) {
        this.epos = epos;
        this.cycle = fr;
        var saw_velx = 2 * (this.epos.x - this.spos.x) / this.cycle;
        var saw_vely = 2 * (this.epos.y - this.spos.y) / this.cycle;
    }
    var lgh = 10000;
    var temp_move = 0;
    //
    //
    this.update = function () {
        if (epos) {
            if ((this.pos.x == this.epos.x && this.pos.y == this.epos.y) || (this.pos.x == this.spos.x && this.pos.y == this.spos.y) && frameCount > change_fc + 10) {
                change = true;
                change_fc = frameCount;
                saw_velx *= -1;
                saw_vely *= -1;
            }
            this.pos.x += saw_velx;
            this.pos.y += saw_vely;
        }
    }
    this.render = function () {
        push();
        noStroke();
        temp_rot = (frameCount / 20) % TWO_PI;
        fill(100);
        translate(this.pos.x, this.pos.y);
        beginShape();
        var temp_cd = 1;
        var i = 0;
        while (i < TWO_PI) {
            var temp_rad = this.size / 2;
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
            var temp_rad = this.size / 2;
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
        ellipse(0, 0, this.size * 7 / 10);
        fill(150);
        ellipse(0, 0, this.size * 4.5 / 10);
        fill(175);
        ellipse(0, 0, this.size * 4 / 10);
        fill(150);
        ellipse(0, 0, this.size * 2.5 / 10);
        fill(100);
        ellipse(0, 0, this.size * 2 / 10);
        pop();
    }
}