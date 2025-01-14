var angle = 0;
var turntableRadius = 100;
function draw(){
    translate(width / 2, height / 2);
    rotate(angle);

    // Draw the turntable
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, turntableRadius * 2, turntableRadius * 2);

    // Draw the LP disc
    fill(0);
    noStroke();
    ellipse(0, 0, turntableRadius * 0.8, turntableRadius * 0.8);
}

