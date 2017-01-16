var player;
var gravity;
var obsctacles = [];
var ground = [];
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam, move_cam;
var cd_glidingL, cd_glidingR;
var jump_pression, jump_bg, right_pression, right_bg, left_pression, left_bg;

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
        obsctacles[i] = new Obstacle(createVector(obs_x, 100), 500, 75, false);
    }
    for (var i = 4; i < 8; i++) {
        obs_x = 350 + (i - 2) * 700;
        obsctacles[i] = new Obstacle(createVector(obs_x, 100), 75, 700, true);
    }
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
    if (frameCount > cd_glidingL + 20) {
        player.isglidingL = false;
    }
    if (frameCount > cd_glidingR + 20) {
        player.isglidingR = false;
    }
    player.isonground = false;
    player.edges();
    for (var i = 0; i < obsctacles.length; i++) {
        obsctacles[i].render();
        player.hits_obs(obsctacles[i]);
    }
    player.render();
    player.applied_forces = gravity.copy();
    console.log(right_pression, left_pression);
}

function init_cam() {
    strength_cam = createVector(0, 0);
    drag_cam = createVector(0, 0);
    target_cam = createVector(0, 0);
    force_cam = createVector(0, 0);
    vel_cam = createVector(0, 0);
    pos_cam = createVector(player.pos.x - width / 2, player.pos.y - height / 8);
    move_cam = 0;
}

function translate_cam() {
    if (!player.right && !player.left) {
        strength_cam.x = 0.01;
        drag_cam.x = 0.05;
        target_cam.x = player.pos.x - width / 2;
    }
    else if (player.right) {
        strength_cam.x = 0.05;
        drag_cam.x = 0.2;
        target_cam.x = player.pos.x - width / 2 + width / 4;
    }
    else if (player.left) {
        strength_cam.x = 0.05;
        drag_cam.x = 0.2;
        target_cam.x = player.pos.x - width / 2 - width / 4;
    }
    force_cam.x = (target_cam.x - pos_cam.x) * strength_cam.x;
    vel_cam.x *= drag_cam.x;
    vel_cam.x += force_cam.x;
    pos_cam.x += vel_cam.x;
    //
    strength_cam.y = 0.1;
    drag_cam.y = 0.2;
    target_cam.y = -player.pos.y + height / 2 - move_cam;
    force_cam.y = (target_cam.y - pos_cam.y) * strength_cam.y;
    vel_cam.y *= drag_cam.y;
    vel_cam.y += force_cam.y;
    pos_cam.y += vel_cam.y;
    //
    translate(-pos_cam.x, pos_cam.y);
}