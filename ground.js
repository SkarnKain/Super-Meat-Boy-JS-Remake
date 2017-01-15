function G_point(ori_x, ori_y, ori_d, ori_a, dist, angle) {
    this.d = dist;
    this.a = angle;
    this.x = ori_x + ori_d * cos(ori_a);
    this.y = ori_y + ori_d * sin(ori_a);
}

function ground_render() {
    for (var i = 0; i < ground.length - 1; i++) {
        line(ground[i].x, ground[i].y, ground[i + 1].x, ground[i + 1].y);
    }
}