var player;
var gravity;
var ground = [];
var obstacles = [];
var saws = [];
var bandage_girl;
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam, move_cam, min_cam, max_cam;
var cd_glidingL, cd_glidingR;
var jump_pression, jump_bg, right_pression, right_bg, left_pression, left_bg;
var level = 1;
var level_begin, level_endlevel_begin_time, current_time;
var g_max = 0;
var player_init_pos;
var current_level;
var sd_meat_death = [];
var sd_meat_jump = [];
var sd_meat_landing = [];
var music;
var musicplaying = false;

function setup() {
    if (!musicplaying) {
        //music.loop();
        musicplaying = true;
    }
    obstacles = [];
    ground = [];
    saws = [];
    bandage_girl = null;
    createCanvas(1200, 700);
    frameRate(50);
    gravity = createVector(0, 0.35);
    rectMode(CENTER);
    //
    level = level % 5;
    //
    level = 5;
    current_level = new Level_contructor(level);
    level_begin_time = new Date().getTime();
    player.dead = false;
    init_cam();
}

function draw() {
    current_time = new Date().getTime();
    background(50);
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
    player.isonground = false;
    player.istouchobst = false;
    player.edges();
    for (var i = 0; i < obstacles.length; i++) {
        obstacles[i].render();
        player.hits_obs(obstacles[i]);
    }
    for (var i = 0; i < saws.length; i++) {
        saws[i].update();
        saws[i].render();
        player.hits_saw(saws[i]);
    }
    player.update();
    if (frameCount > cd_glidingL + 20 || !player.istouchobst) {
        player.isglidingL = false;
    }
    if (frameCount > cd_glidingR + 20 || !player.istouchobst) {
        player.isglidingR = false;
    }
    player.render();
    player.applied_forces = gravity.copy();
    fill(255);
    textSize(15);
    textAlign(RIGHT);
    var temp_sec = floor((current_time - level_begin_time) / 1000);
    var temp_millisec = floor((current_time - level_begin_time - temp_sec * 1000) / 10);
    //text(temp_sec + " sec. " + temp_millisec, pos_cam.x + width - 50, -pos_cam.y + height - 50);
    text("posx " + player.pos.x + " - posy " + player.pos.y, pos_cam.x + width - 50, -pos_cam.y + height - 50);
    draw_grid();
}

function draw_grid() {
    stroke(255);
    strokeWeight(1);
    for (i = 0; i <= width / 50; i++) {
        line(pos_cam.x + width - i * 50, -pos_cam.y, pos_cam.x + width - i * 50, -pos_cam.y + height);
    }
    for (i = 0; i <= height / 50; i++) {
        line(pos_cam.x, -pos_cam.y + i * 50, pos_cam.x + width, -pos_cam.y + i * 50);
    }
}