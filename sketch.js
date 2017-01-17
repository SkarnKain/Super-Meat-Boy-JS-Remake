var player;
var gravity;
var obstacles = [];
var ground = [];
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam, move_cam;
var cd_glidingL, cd_glidingR;
var jump_pression, jump_bg, right_pression, right_bg, left_pression, left_bg;
var prev_pos_x;
var level_begin, level_end;
var g_max = 0;
var player_init_pos;
var current_level;
var level_begin_time, current_time;

function setup() {
    createCanvas(1200, 700);
    gravity = createVector(0, 0.5);
    rectMode(CENTER);
    current_level = new Level_contructor(3);
    player = new Player(player_init_pos);
    init_cam();
    level_begin_time = new Date().getTime();
}

function draw() {
    //frameRate(20);
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
        player.hits_saw(obstacles[i]);
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
    prev_pos_x = player.pos.x;
    fill(255);
    textSize(15);
    textAlign(RIGHT);
    var temp_sec = floor((current_time - level_begin_time) / 1000);
    var temp_millisec = floor((current_time - level_begin_time - temp_sec * 1000) / 10);
    text(temp_sec + " sec. " + temp_millisec, pos_cam.x + width - 50, pos_cam.y + height - 50);
}