function Level_contructor(level) {
    var temp;
    this.level = level;
    switch (this.level) {
    case 1:
        bl_scl = 35;
        level_begin = createVector(0, 2 * bl_scl);
        level_end = createVector(30 * bl_scl, -16 * bl_scl);
        lv_scl = width / level_end.x;
        player_init_pos = createVector(4 * bl_scl, -1 * bl_scl);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, 0, 0, 0, 8 * bl_scl, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, sqrt(2 * sq(bl_scl)), -PI / 4);
        ground[2] = new G_point(ground[1].x, ground[1].y, ground[1].d, ground[1].a, 1000, 0);
        ground[3] = new G_point(ground[2].x, ground[2].y, ground[2].d, ground[2].a, 0, 0);
        obstacles[0] = new Obstacle(createVector(0, 0), 4 * bl_scl, 10000, "pl");
        obstacles[1] = new Obstacle(createVector(30 * bl_scl, 0), 4 * bl_scl, 10000, "pl");
        obstacles[2] = new Obstacle(createVector(25.5 * bl_scl, -2 * bl_scl), 5 * bl_scl, 3 * bl_scl, "pl");
        obstacles[3] = new Obstacle(createVector(14.5 * bl_scl, -6 * bl_scl), 7 * bl_scl, 2 * bl_scl, "pl");
        obstacles[4] = new Obstacle(createVector(14.5 * bl_scl, -7 * bl_scl - 11), 25, 25, "bg");
        //saws[0] = new Saw(createVector(100, 500), 100, createVector(100, 200), 120);
        break;
    case 2:
        level_begin = createVector(0, height);
        level_end = createVector(width, 0);
        lv_scl = width / level_end.x;
        player_init_pos = createVector(240, height - 100);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, height - 100, 0, 0, 350, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        saws[sc++] = new Saw(createVector(150, 100), 200);
        saws[sc++] = new Saw(createVector(width - 150, 100), 200);
        obstacles[oc++] = new Obstacle(createVector(0, 0), 300, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(width, 0), 300, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(width, height), 700, 200, "pl");
        obstacles[oc++] = new Obstacle(createVector(0, 300), 450, 200, "pl");
        obstacles[oc++] = new Obstacle(createVector(width, 300), 450, 200, "pl");
        obstacles[oc++] = new Obstacle(createVector(width - 220, height - 112), 25, 25, "bg");
        break;
    case 3:
        level_begin = createVector(0, height);
        level_end = createVector(width, -1125);
        player_init_pos = createVector(350, height - 150);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, height + 100, 0, 0, 2000, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(600, -1125), 2000, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(275, 500), 100, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(0, 0), 550, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(1200, 0), 550, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(275, 400), 1100, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(275 + 425, 325), 250, 250, "pl");
        obstacles[oc++] = new Obstacle(createVector(275 + 150, 100), 100, 300, "pl");
        obstacles[oc++] = new Obstacle(createVector(925, 25), 1100, 150, "pl");
        obstacles[oc++] = new Obstacle(createVector(450, -400), 50, 550, "pl");
        obstacles[oc++] = new Obstacle(createVector(600, -425), 50, 600, "pl");
        obstacles[oc++] = new Obstacle(createVector(750, -400), 50, 550, "pl");
        obstacles[oc++] = new Obstacle(createVector(850, -150), 250, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(600, -875), 250, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(600, 600), 2000, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(600, -937), 25, 25, "bg");
        saws[sc++] = new Saw(createVector(300, 700), 100);
        saws[sc++] = new Saw(createVector(400, 710), 100);
        saws[sc++] = new Saw(createVector(500, 700), 100);
        saws[sc++] = new Saw(createVector(600, 710), 100);
        saws[sc++] = new Saw(createVector(700, 700), 100);
        saws[sc++] = new Saw(createVector(800, 710), 100);
        saws[sc++] = new Saw(createVector(900, 700), 100);
        break;
    case 4:
        bl_scl = 30;
        level_begin = createVector(0, height);
        level_end = createVector(width * 2, 0);
        player_init_pos = createVector(100, height - 50);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, 650, 0, 0, 2000, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        obstacles[oc++] = new Obstacle(createVector(0, 0), 100, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(width * 2, 0), 100, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 625), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 625), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 575), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 525), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 475), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 425), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 375), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width / 2, 325), 50, 50, "pl");
        obstacles[oc++] = new Obstacle(createVector(width * 3 / 2 + 50, 375), 300, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(width * 3 / 2 + 50, 315), 25, 25, "bg");
        break;
    case 5:
        bl_scl = 30;
        lv_scl = 1;
        level_begin = createVector(-8 * bl_scl, 1 * bl_scl);
        level_end = createVector(32 * bl_scl, -23 * bl_scl);
        player_init_pos = createVector(6.5 * bl_scl, -1 * bl_scl);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, 0, 0, 0, 24 * bl_scl, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(-2 * bl_scl, -11 * bl_scl), 14 * bl_scl, 24 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(26 * bl_scl, -11 * bl_scl), 14 * bl_scl, 24 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(10 * bl_scl, -4 * bl_scl), 10 * bl_scl, 2 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(14 * bl_scl, -10 * bl_scl), 10 * bl_scl, 2 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(10 * bl_scl, -15.5 * bl_scl), 10 * bl_scl, 3 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(12 * bl_scl, -23 * bl_scl), 20 * bl_scl, 4 * bl_scl, "pl");
        saws[sc++] = new Saw(createVector(13 * bl_scl, -4.6 * bl_scl), 2 * bl_scl);
        saws[sc++] = new Saw(createVector(17 * bl_scl, -10.6 * bl_scl), 2 * bl_scl);
        saws[sc++] = new Saw(createVector(12 * bl_scl, -17 * bl_scl), 4 * bl_scl)
        obstacles[oc++] = new Obstacle(createVector(6.5 * bl_scl, -17.35 * bl_scl), 25, 25, "bg");
        break;
    case 6:
        bl_scl = 30;
        lv_scl = 1.3;
        level_begin = createVector(-1 * bl_scl, 0);
        level_end = createVector(31 * bl_scl, -18 * bl_scl);
        player_init_pos = createVector(2 * bl_scl, -3.5 * bl_scl);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, -3 * bl_scl, 0, 0, 3 * bl_scl, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(0, -11 * bl_scl), 2 * bl_scl, 24 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(30 * bl_scl, -11 * bl_scl), 2 * bl_scl, 24 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(15 * bl_scl, -7 * bl_scl), 4 * bl_scl, 8 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(30 * bl_scl, 0 * bl_scl), 6 * bl_scl, 6 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(0 * bl_scl, -18 * bl_scl), 10 * bl_scl, 6 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(30 * bl_scl, -18 * bl_scl), 10 * bl_scl, 6 * bl_scl, "pl");
        saws[sc++] = new Saw(createVector(7 * bl_scl, -18 * bl_scl), 4 * bl_scl);
        saws[sc++] = new Saw(createVector(23 * bl_scl, -18 * bl_scl), 4 * bl_scl);
        saws[sc++] = new Saw(createVector(4 * bl_scl, 0 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(6.5 * bl_scl, -0.5 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(9 * bl_scl, 0 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(11.5 * bl_scl, -0.5 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(14 * bl_scl, 0 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(16.5 * bl_scl, -0.5 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(19 * bl_scl, 0 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(21.5 * bl_scl, -0.5 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(24 * bl_scl, 0 * bl_scl), 3 * bl_scl);
        saws[sc++] = new Saw(createVector(26.5 * bl_scl, -0.5 * bl_scl), 3 * bl_scl);
        obstacles[oc++] = new Obstacle(createVector(28 * bl_scl, -3.4 * bl_scl), 25, 25, "bg");
        break;
    case 7:
        bl_scl = 30;
        lv_scl = 1;
        level_begin = createVector(-1 * bl_scl, 0);
        level_end = createVector(39 * bl_scl, -27 * bl_scl);
        player_init_pos = createVector(9 * bl_scl, -2.5 * bl_scl);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, -2 * bl_scl, 0, 0, 11 * bl_scl, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(0, -20 * bl_scl), 16 * bl_scl, 40 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(14.5 * bl_scl, -14.5 * bl_scl), 3 * bl_scl, 13 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(18.5 * bl_scl, -8.5 * bl_scl), 9 * bl_scl, 1 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(20 * bl_scl, -17.12 * bl_scl), 6 * bl_scl, 1 / 3 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(22.5 * bl_scl, -13.12 * bl_scl), 1 * bl_scl, 8.24 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(18 * bl_scl, -13.12 * bl_scl), 6 * bl_scl, 1 / 3 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(0 * bl_scl, -27 * bl_scl), 34 * bl_scl, 2 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(0 * bl_scl, -27 * bl_scl), 30 * bl_scl, 4 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(0 * bl_scl, -27 * bl_scl), 24 * bl_scl, 6 * bl_scl, "pl");
        obstacles[oc++] = new Obstacle(createVector(0 * bl_scl, -27 * bl_scl), 18 * bl_scl, 8 * bl_scl, "pl");
        saws[sc++] = new Saw(createVector(7.8 * bl_scl, -7.5 * bl_scl), 2.5 * bl_scl, createVector(7.8 * bl_scl, -12.5 * bl_scl), 240);
        saws[sc++] = new Saw(createVector(13.2 * bl_scl, -14.5 * bl_scl), 2.5 * bl_scl, createVector(13.2 * bl_scl, -19.5 * bl_scl), 240);
        saws[sc++] = new Saw(createVector(20 * bl_scl, -13.12 * bl_scl), 2 * bl_scl, createVector(16 * bl_scl, -13.12 * bl_scl), 240);
        obstacles[oc++] = new Obstacle(createVector(16.5 * bl_scl, -9.37 * bl_scl), 25, 25, "bg");
        break;
    case 8:
        lv_scl = 1;
        player_init_pos = createVector(100, -20);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, -100, 0, 0, 11 * bl_scl, 0);
        for (i = 1; i < 50; i++) {
            ground[i] = new G_point(ground[i - 1].x, ground[i - 1].y, ground[i - 1].d, ground[i - 1].a, 100, map(i, 0, 50, 0, -PI * 35 / 100));
        }
        for (i = 50; i < 80; i++) {
            ground[i] = new G_point(ground[i - 1].x, ground[i - 1].y, ground[i - 1].d, ground[i - 1].a, 50, map(i, 50, 80, -PI * 35 / 100, 0));
        }
        ground[80] = new G_point(ground[79].x, ground[79].y, ground[79].d, ground[79].a, 200, 0);
        ground[81] = new G_point(ground[80].x, ground[80].y, ground[80].d, ground[80].a, 0, 0);
        var oc = 0;
        var sc = 0;
        for (var i = 0; i < 10; i++) {
            var sawx = i * ground[ground.length - 1].x / 10 + 10;
            for (var j = 0; j < ground.length; j++) {
                if (sawx >= ground[j].x) {
                    var temp_dist = ground[j].x - sawx;
                    var lgh = ground[j].y + temp_dist * sin(ground[j].a);
                }
            }
            saws[sc++] = new Saw(createVector(sawx, lgh + 100), 120, createVector(sawx, lgh - 200), 240);
        }
        obstacles[oc++] = new Obstacle(createVector(ground[80].x + 100, ground[80].y - 12), 25, 25, "bg");
        level_begin = createVector(0, 0);
        level_end = createVector(ground[81].x + 300, ground[81].y - 200);
        break;
    case 9:
        level_begin = createVector(0, 0);
        level_end = createVector(2000, -690);
        lv_scl = -height / level_end.y;
        player_init_pos = createVector(100, -75);
        player = new Player(player_init_pos);
        ground[0] = new G_point(0, -50, 0, 0, 200, 0);
        ground[1] = new G_point(ground[0].x, ground[0].y, ground[0].d, ground[0].a, 0, 0);
        var oc = 0;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(0, 0), 100, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(2000, 0), 100, 10000, "pl");
        obstacles[oc++] = new Obstacle(createVector(1000, -690), 2000, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(2000, 0), 400, 100, "pl");
        obstacles[oc++] = new Obstacle(createVector(500, 0), 50, 500, "pl");
        obstacles[oc++] = new Obstacle(createVector(500, -690), 50, 500, "pl");
        obstacles[oc++] = new Obstacle(createVector(1000, -345), 50, 300, "pl");
        obstacles[oc++] = new Obstacle(createVector(1500, 0), 50, 500, "pl");
        obstacles[oc++] = new Obstacle(createVector(1500, -690), 50, 500, "pl");
        saws[sc++] = new Saw(createVector(500, -250), 65);
        saws[sc++] = new Saw(createVector(500, -440), 65);
        saws[sc++] = new Saw(createVector(1000, -345 + 150), 65);
        saws[sc++] = new Saw(createVector(1000, -345 - 150), 65);
        saws[sc++] = new Saw(createVector(1500, -250), 65);
        saws[sc++] = new Saw(createVector(1500, -440), 65);
        obstacles[oc++] = new Obstacle(createVector(1900, -61), 25, 25, "bg");
        break;
    default:
        lv_scl = 0.8;
        bl_scl = 50;
        player_init_pos = createVector(300, height - 75);
        player = new Player(player_init_pos);
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
            obstacles[i] = new Obstacle(createVector(obs_x, 100), 100, 500, "pl");
        }
        for (var i = 4; i < 8; i++) {
            obs_x = 350 + (i - 2) * 700;
            obstacles[i] = new Obstacle(createVector(obs_x, 100), 700, 75, "spikes");
        }
        var oc = 8;
        var sc = 0;
        obstacles[oc++] = new Obstacle(createVector(600, 625), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 575), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 525), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 475), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 425), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 375), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(600, 325), 50, 50, "pl1");
        obstacles[oc++] = new Obstacle(createVector(5000, 100), 25, 25, "bg");
        saws[sc++] = new Saw(createVector(100, height - 150), 200);
        saws[sc++] = new Saw(createVector(1400, height - 75), 150);
        saws[sc++] = new Saw(createVector(1400, height - 430), 100);
        //obstacles[12] = new Obstacle(createVector(500, height - 200), 50, 1000, "pl");
        level_begin = createVector(-100, g_max);
        level_end = createVector(5100, g_max - 1500);
        break;
    }
}