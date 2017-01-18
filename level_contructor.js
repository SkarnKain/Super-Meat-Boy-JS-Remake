function Level_contructor(level) {
    var temp;
    this.level = level;
    switch (this.level) {
    case 1:
        level_begin = createVector(0, 0);
        level_end = createVector(width, height);
        player_init_pos = createVector(100, height - 50)
        ground[0] = new G_point(0, height - 50, 0, 0, 300, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 100, -PI / 4);
        ground[2] = new G_point(ground[1].x, ground[1].y, ground[1].d, ground[1].a, 1000, 0);
        ground[3] = new G_point(ground[2].x, ground[2].y, ground[2].d, ground[2].a, 0, 0);
        obstacles[0] = new Obstacle(createVector(0, 0), 100, 10000, "pl");
        obstacles[1] = new Obstacle(createVector(width, 0), 100, 10000, "pl");
        obstacles[2] = new Obstacle(createVector(width, 575), 500, 200, "pl");
        obstacles[3] = new Obstacle(createVector(width / 2 + 50, 375), 300, 100, "pl");
        obstacles[4] = new Obstacle(createVector(width / 2 + 50, 315), 25, 25, "bg");
        break;
    case 2:
        level_begin = createVector(0, 0);
        level_end = createVector(width, height);
        player_init_pos = createVector(240, height - 100)
        ground[0] = new G_point(0, height - 100, 0, 0, 350, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var i = 0;
        obstacles[i++] = new Obstacle(createVector(150, 100), 200, 200, "saw");
        obstacles[i++] = new Obstacle(createVector(width - 150, 100), 200, 200, "saw");
        obstacles[i++] = new Obstacle(createVector(0, 0), 300, 10000, "pl");
        obstacles[i++] = new Obstacle(createVector(width, 0), 300, 10000, "pl");
        obstacles[i++] = new Obstacle(createVector(width, height), 700, 200, "pl");
        obstacles[i++] = new Obstacle(createVector(0, 300), 450, 200, "pl");
        obstacles[i++] = new Obstacle(createVector(width, 300), 450, 200, "pl");
        obstacles[i++] = new Obstacle(createVector(width - 220, height - 112), 25, 25, "bg");
        break;
    case 3:
        level_begin = createVector(0, -1125);
        level_end = createVector(width, height);
        player_init_pos = createVector(350, height - 150);
        ground[0] = new G_point(0, height + 100, 0, 0, 2000, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var i = 0;
        obstacles[i++] = new Obstacle(createVector(600, -1125), 2000, 100, "pl");
        obstacles[i++] = new Obstacle(createVector(275, 500), 100, 100, "pl");
        obstacles[i++] = new Obstacle(createVector(0, 0), 550, 10000, "pl");
        obstacles[i++] = new Obstacle(createVector(1200, 0), 550, 10000, "pl");
        obstacles[i++] = new Obstacle(createVector(275, 400), 1100, 100, "pl");
        obstacles[i++] = new Obstacle(createVector(275 + 425, 325), 250, 250, "pl");
        obstacles[i++] = new Obstacle(createVector(275 + 150, 100), 100, 300, "pl");
        obstacles[i++] = new Obstacle(createVector(925, 25), 1100, 150, "pl");
        obstacles[i++] = new Obstacle(createVector(450, -400), 50, 550, "pl");
        obstacles[i++] = new Obstacle(createVector(600, -425), 50, 600, "pl");
        obstacles[i++] = new Obstacle(createVector(750, -400), 50, 550, "pl");
        obstacles[i++] = new Obstacle(createVector(850, -150), 250, 50, "pl");
        obstacles[i++] = new Obstacle(createVector(600, -875), 250, 100, "pl");
        obstacles[i++] = new Obstacle(createVector(600, 600), 2000, 100, "pl");
        obstacles[i++] = new Obstacle(createVector(600, -937), 25, 25, "bg");
        break;
    default:
        level_begin = createVector(0, -height);
        level_end = createVector(width * 2, height);
        player_init_pos = createVector(width / 2, height - 100)
        ground[0] = new G_point(-100, height - 50, 100, 0, 100, 0);
        for (var i = 1; i < 50; i++) {
            var rand_d = random(50, 200);
            var rand_a = 0;
            if (i > 15) {
                rand_a = random(-PI / 6, PI / 6);
            }
            ground[i] = new G_point(ground[i - 1].x, ground[i - 1].y, ground[i - 1].d, ground[i - 1].a, rand_d, rand_a);
            if (ground[i].y > g_max) {
                g_max = ground[i].y;
            }
        }
        for (var i = 0; i < 4; i++) {
            obs_x = (i + 2) * 700;
            obstacles[i] = new Obstacle(createVector(obs_x, 100), 500, 100, "pl");
        }
        for (var i = 4; i < 8; i++) {
            obs_x = 350 + (i - 2) * 700;
            obstacles[i] = new Obstacle(createVector(obs_x, 100), 75, 700, "spikes");
        }
        obstacles[8] = new Obstacle(createVector(5000, 100), 25, 25, "bg");
        //obstacles[9] = new Obstacle(createVector(100, height - 150), 200, 200, "saw");
        //obstacles[10] = new Obstacle(createVector(1400, height - 100), 200, 200, "saw");
        //obstacles[11] = new Obstacle(createVector(1400, height - 430), 100, 100, "saw");
        //obstacles[12] = new Obstacle(createVector(500, height - 200), 50, 1000, "pl");
        break;
    }
}