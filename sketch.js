console.log('curves');


function setup() {
  createCanvas(1080, 720);
  background(100);
  noLoop();

}




function draw() {

  let step = 45;
  strokeWeight(1);


  //create several curvesS

  for (let i = 0; i < 20; i++) {

    //overly canvas with see-through rectangle
    blendMode(MULTIPLY);///makes the image darker
    noStroke();
    fill(150, 150, 150, 20);
    rect(0,0,width,height);
    noFill();
    blendMode(BLEND);

    let start_angle = random(-200, 200);

    //thick and thin curves
    for (let p = 0; p < 2; p++) {

      beginShape();

      for (let angle = start_angle; angle <= 360 + start_angle; angle += step) {

         //the thin curve is on top of the thick curve
        let r = 200 + 100 * (noise(angle/10)*2 - 1);
       

        let x = r * cos(angle);
        let y = r * sin(angle);
        //use the  2 + because we want to avoid 0

        strokeWeight(2 + 4*(1 - p));
        stroke( 50 + 200*p, 50 + 100 * p, 50);

       circle (400 + x, 300 - y, 10);
        curveVertex(400 + x, 300 - y, 10);

      }
      endShape();

    }

  }


}


//tutorial by: https://www.youtube.com/watch?v=Qv6bTPDh09w