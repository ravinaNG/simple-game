// let circleSize = 25;
// let x = 100;
// let y = 100;

// function setup() {
//     createCanvas(640, 480);
// }

// function draw() {
//     let x = 300; 
//     circle(x, y, circleSize);
//     console.log(1);
//     x+= 1
//     if(x == 1000){
//         break
//     }
// //   y+=1
// }

// just for chake:)

let circleSize = 25;
let x = 0;
let x1 = 0;
let y = 100;
let y2 = 150;
let ball_1_speed = 1;
let ball_2_speed = 2;

function setup() {
  createCanvas(640, 480);
  background(125);
  
}

function draw() {
  frameRate(20); // frameRate is a speed of ball 
  circle(x,y,20);
  circle(x1, y2, 20)
  x+=ball_1_speed
  x1+=ball_2_speed

}