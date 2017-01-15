var player;
var obsctacles = [];
var gravity;
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam;
var ground = [];

function setup() {
    createCanvas(1200, 800);
    gravity = createVector(0, 0.5);
    rectMode(CENTER);
    player = new Player();
    vel_cam = 0;
    pos_cam = player.pos.x - width / 2;
    ground[0] = new G_point(-100, height - 50, 100, 0, 100, 0);
    for (var i = 1; i < 50; i++) {
        var rand_d = random(50, 200);
        var rand_a = random(-PI / 16, PI / 16);
        ground[i] = new G_point(ground[i - 1].x, ground[i - 1].y, ground[i - 1].d, ground[i - 1].a, rand_d, rand_a);
    }
    for (var i = 0; i < 4; i++) {
        obs_x = (i + 2) * 500;
        obsctacles[i] = new Obstacle(createVector(obs_x, 100));
    }
}

function draw() {
    background(0);
    stroke(150, 100, 50);
    translate_cam();
    ground_render();
    player.edges();
    for (var i = 0; i < obsctacles.length; i++) {
        obsctacles[i].render();
        player.hits_obs(obsctacles[i]);
    }
    player.update();
    player.render();
}

function translate_cam() {
    if (!player.right && !player.left) {
        strength_cam = 0.01;
        drag_cam = 0.05;
        target_cam = player.pos.x - width / 2;
    }
    else if (player.right) {
        strength_cam = 0.05;
        drag_cam = 0.2;
        target_cam = player.pos.x - width / 2 + width / 4;
    }
    else if (player.left) {
        strength_cam = 0.05;
        drag_cam = 0.2;
        target_cam = player.pos.x - width / 2 - width / 4;
    }
    force_cam = (target_cam - pos_cam) * strength_cam;
    vel_cam *= drag_cam;
    vel_cam += force_cam;
    pos_cam += vel_cam;
    translate(-pos_cam, 0);
}