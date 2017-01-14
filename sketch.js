var player;
var obsctacles = [];
var gravity;
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam;

function setup() {
    createCanvas(1200, 400);
    gravity = createVector(0, 0.125);
    rectMode(CENTER);
    player = new Player();
    vel_cam = 0;
    pos_cam = player.pos.x - width / 2;
    for (var i = 0; i < 100; i++) {
        obsctacles[i] = new Obstacle(createVector((i + 2) * 300, height - 25));
    }
}

function draw() {
    background(0);
    player.update();
    player.edges();
    translate_cam();
    player.render();
    for (var i = 0; i < 100; i++) {
        obsctacles[i].render();
    }
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