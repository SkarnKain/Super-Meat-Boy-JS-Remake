function init_cam() {
    strength_cam = createVector(0, 0);
    drag_cam = createVector(0, 0);
    target_cam = createVector(0, 0);
    force_cam = createVector(0, 0);
    vel_cam = createVector(0, 0);
    pos_cam = createVector(player.pos.x - width / 2, player.pos.y);
    move_cam = 0;
}

function translate_cam() {
    //    if (!player.right && !player.left) {
    //        strength_cam.x = 0.01;
    //        drag_cam.x = 0.05;
    //        target_cam.x = player.pos.x - width / 2;
    //    }
    //    else if (player.right) {
    //        strength_cam.x = 0.05;
    //        drag_cam.x = 0.2;
    //        target_cam.x = player.pos.x - width / 2 + width / 4;
    //    }
    //    else if (player.left) {
    //        strength_cam.x = 0.05;
    //        drag_cam.x = 0.2;
    //        target_cam.x = player.pos.x - width / 2 - width / 4;
    //    }
    strength_cam.x = 0.2;
    drag_cam.x = 0.01;
    target_cam.x = player.pos.x - width / 2;
    force_cam.x = (target_cam.x - pos_cam.x) * strength_cam.x;
    vel_cam.x *= drag_cam.x;
    vel_cam.x += force_cam.x;
    pos_cam.x += vel_cam.x;
    if (pos_cam.x < level_begin.x) {
        pos_cam.x = level_begin.x;
    }
    else if (pos_cam.x > level_end.x - width) {
        pos_cam.x = level_end.x - width;
    }
    //
    strength_cam.y = 0.1;
    drag_cam.y = 0.2;
    target_cam.y = -player.pos.y + height / 2 - move_cam;
    force_cam.y = (target_cam.y - pos_cam.y) * strength_cam.y;
    vel_cam.y *= drag_cam.y;
    vel_cam.y += force_cam.y;
    pos_cam.y += vel_cam.y;
        if (pos_cam.y < level_begin.y) {
        pos_cam.y = level_begin.y;
    }
    else if (pos_cam.y > level_end.y - height) {
        pos_cam.y = level_end.y - height;
    }
    //
    translate(-pos_cam.x, pos_cam.y);
}