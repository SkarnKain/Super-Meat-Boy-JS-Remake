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
        obstacles[0] = new Obstacle(createVector(0, 0), 10000, 100, "pl");
        obstacles[1] = new Obstacle(createVector(width, 0), 10000, 100, "pl");
        obstacles[2] = new Obstacle(createVector(width, 575), 200, 500, "pl");
        obstacles[3] = new Obstacle(createVector(width / 2 + 50, 375), 100, 300, "pl");
        obstacles[4] = new Obstacle(createVector(width / 2 + 50, 315), 25, 25, "bg");
        break;
    case "test":
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
        obstacles[9] = new Obstacle(createVector(100, height - 150), 200, 200, "saw");
        obstacles[10] = new Obstacle(createVector(1400, height - 100), 200, 200, "saw");
        obstacles[11] = new Obstacle(createVector(1400, height - 430), 100, 100, "saw");
        //obstacles[12] = new Obstacle(createVector(500, height - 200), 50, 1000, "pl");
        level_begin = createVector(0, height - g_max - 50);
        level_end = createVector(5100, 10000);
        break;
    }
}