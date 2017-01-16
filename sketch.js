var player;
var gravity;
var obstacles = [];
var ground = [];
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam, move_cam;
var cd_glidingL, cd_glidingR;
var jump_pression, jump_bg, right_pression, right_bg, left_pression, left_bg;
var prev_pos_x;

function setup() {
    createCanvas(1200, 600);
    gravity = createVector(0, 0.5);
    rectMode(CENTER);
    player = new Player();
    init_cam();
    ground[0] = new G_point(-100, height - 50, 100, 0, 100, 0);
    for (var i = 1; i < 50; i++) {
        var rand_d = random(50, 200);
        var rand_a = random(-PI / 6, PI / 6);
        ground[i] = new G_point(ground[i - 1].x, ground[i - 1].y, ground[i - 1].d, ground[i - 1].a, rand_d, rand_a);
    }
    for (var i = 0; i < 4; i++) {
        obs_x = (i + 2) * 700;
        obstacles[i] = new Obstacle(createVector(obs_x, 100), 500, 75, "pl");
    }
    for (var i = 4; i < 8; i++) {
        obs_x = 350 + (i - 2) * 700;
        obstacles[i] = new Obstacle(createVector(obs_x, 100), 75, 700, "kz");
    }
    obstacles[8] = new Obstacle(createVector(5000, 100), 25, 25, "bg");
}

function draw() {
    background(50);
    stroke(150, 100, 50);
    translate_cam();
    ground_render();
    //
    //
    jump_pression = frameCount - jump_bg;
    left_pression = frameCount - left_bg;
    right_pression = frameCount - right_bg;
    if (jump_pression >= 5) {
        player.jumped = true;
        jump_bg = Infinity;
    }
    //
    //
    player.update();
    if (frameCount > cd_glidingL + 20 || player.pos.x != prev_pos_x) {
        player.isglidingL = false;
    }
    if (frameCount > cd_glidingR + 20 || player.pos.x != prev_pos_x) {
        player.isglidingR = false;
    }
    player.isonground = false;
    player.edges();
    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].render();
        player.hits_obs(obstacles[i]);
    }
    player.render();
    player.applied_forces = gravity.copy();
    prev_pos_x = player.pos.x;
}