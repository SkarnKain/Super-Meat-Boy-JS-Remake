function preload() {
    //music = loadSound('sounds/Forest Funk.wav');
    for (var i = 0; i <= 7; i++) {
        sd_meat_death[i] = loadSound('sounds/meat_death' + i + '.wav');
    }
    for (var i = 0; i <= 4; i++) {
        sd_meat_jump[i] = loadSound('sounds/meat_jump' + i + '.wav');
    }
    for (var i = 0; i <= 1; i++) {
        sd_meat_landing[i] = loadSound('sounds/meat_landing' + i + '.wav');
    }
}