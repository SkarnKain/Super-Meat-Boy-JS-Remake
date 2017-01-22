var player; /* Single variable to store Player object */
var gravity; /* Single vector to store gravity */
var ground = []; /* Array of ground points objects */
var obstacles = []; /* Array of obstacles objects */
var saws = []; /* Array of saws objects */
var bandage_girl; /* NOT YET USED - Single variable to store Bandage Girl object */
var strength_cam, drag_cam, target_cam, force_cam, vel_cam, pos_cam, move_cam, min_cam, max_cam; /* Camera variables */
var cd_glidingL, cd_glidingR; /* Countdowns to stop gliding if keys are released */
var jump_pression; /* Store number of frames the jump key was pressed */
var jump_bg; /* Store framecount when the jump key was pressed */
var right_pression, left_pression; /* Store number of frames the right/left key was pressed */
var right_bg, left_bg; /* Store framecount when right/left key was pressed */
var level = 1; /* Level counter */
var level_begin, level_end; /* Single vectors to store positions of level beginning and end */
var level_begin_time; /* Store time when the current level began */
var current_time; /* Store current time */
var g_max = 0; /* For random ground generator ONLY - Store maximum ground height */
var player_init_pos; /* Single vectors to store SMB spawn position */
var current_level; /* Store level counter */
var sd_meat_death = []; /* Array of death sounds */
var sd_meat_jump = []; /* Array of jump sounds */
var sd_meat_landing = []; /* Array of landing sounds */
var music; /* Store music - Not used due to performance issues */
var musicplaying = false; /* True if music is already playing */
var lv_scl = 1; /* Level display scaling */
var bl_scl = 30; /* Bloc scaling - For level construction purpose */
var loc_medx, loc_medy; /* To store local middle of the screen taking into account level scaling */

function setup() {
    if (!musicplaying) {
        //music.loop();
        musicplaying = true;
    }
    obstacles = [];
    ground = [];
    saws = [];
    bandage_girl = null;
    createCanvas(1200, 690);
    frameRate(50);
    gravity = createVector(0, 0.2);
    rectMode(CENTER);
    //
    level = level % 10;
    //
    //level = 5;
    current_level = new Level_contructor(level);
    level_begin_time = new Date().getTime();
    player.dead = false;
    init_cam();
}

function draw() {
    scale(lv_scl);
    current_time = new Date().getTime();
    background(50);
    translate_cam();
    ground_render();
    jump_pression = frameCount - jump_bg;
    left_pression = frameCount - left_bg;
    right_pression = frameCount - right_bg;
    if (jump_pression >= 5) {
        player.jumped = true;
        jump_bg = Infinity;
    }
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
    textSize(12);
    textAlign(LEFT);
    text("Level " + level, pos_cam.x - loc_medx + 25, pos_cam.y + loc_medy - 25);
    textAlign(RIGHT);
    var temp_sec = floor((current_time - level_begin_time) / 1000);
    var temp_millisec = floor((current_time - level_begin_time - temp_sec * 1000) / 10);
    text(temp_sec + " sec. " + temp_millisec, pos_cam.x + loc_medx - 25, pos_cam.y + loc_medy - 25);
    //draw_grid();
}

function draw_grid() {
    stroke(255);
    strokeWeight(1);
    for (i = 0; i <= width / bl_scl; i++) {
        line(pos_cam.x - width / 2 + i * bl_scl + width % bl_scl / 2, pos_cam.y - height / 2, pos_cam.x - width / 2 + i * bl_scl + width % bl_scl / 2, pos_cam.y + height / 2);
    }
    for (i = 0; i <= height / bl_scl; i++) {
        line(pos_cam.x - width / 2, pos_cam.y - height / 2 + i * bl_scl - height % bl_scl / 2, pos_cam.x + width / 2, pos_cam.y - height / 2 + i * bl_scl - height % bl_scl / 2);
    }
}