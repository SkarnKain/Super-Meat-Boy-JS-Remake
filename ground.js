function G_point(ori_x, ori_y, ori_d, ori_a, dist, angle) {
    this.d = dist;
    this.a = angle;
    this.x = ori_x + ori_d * cos(ori_a);
    this.y = ori_y + ori_d * sin(ori_a);
}

function ground_render() {
//    stroke(150, 100, 50);
//    for (var i = 0; i < ground.length - 1; i++) {
//        line(ground[i].x, ground[i].y, ground[i + 1].x, ground[i + 1].y);
//    }
    noStroke();
    fill(150, 100, 50);
    beginShape();
    vertex(ground[0].x, 10000);
    for (var i = 0; i < ground.length; i++) {
        vertex(ground[i].x, ground[i].y);
    }
    vertex(ground[ground.length - 1].x, 10000);
    endShape(CLOSE);
}