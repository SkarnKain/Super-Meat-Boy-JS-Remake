function keyReleased() {
    if (key == " " && jump_bg != Infinity) {
        jump_pression = frameCount - jump_bg;
        player.jumped = true;
        //jump_bg = Infinity;
    }
    else if (keyCode == RIGHT_ARROW) {
        player.right = false;
    }
    else if (keyCode == LEFT_ARROW) {
        player.left = false;
    }
    else if (keyCode == DOWN_ARROW) {
        move_cam = 0;
    }
    else if (keyCode == UP_ARROW) {
        move_cam = 0;
    }
}

function keyPressed() {
    if (key == " " && (player.isonground || player.isglidingL || player.isglidingR)) {
        jump_bg = frameCount;
        sd_meat_jump[floor(random(0, sd_meat_jump.length))].play();
    }
    else if (keyCode == RIGHT_ARROW) {
        player.right = true;
        right_bg = frameCount;
    }
    else if (keyCode == LEFT_ARROW) {
        player.left = true;
        left_bg = frameCount;
    }
    else if (keyCode == DOWN_ARROW) {
        move_cam = height / 3;
    }
    else if (keyCode == UP_ARROW) {
        move_cam = -height / 3;
    }
}