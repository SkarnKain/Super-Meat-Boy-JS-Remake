function keyReleased() {
    if (keyCode == RIGHT_ARROW) {
        player.right = false;
    }
    else if (keyCode == LEFT_ARROW) {
        player.left = false;
    }
}

function keyPressed() {
    if (key == " " && !player.isjumping) {
        player.jumped = true;
        player.isjumping = true;
    }
    else if (keyCode == RIGHT_ARROW) {
        player.right = true;
    }
    else if (keyIsPressed === true && keyCode == LEFT_ARROW) {
        player.left = true;
    }
}