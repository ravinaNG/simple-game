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
let y = 300;

function setup() {
  createCanvas(640, 480);
  background(125);
  
}

function draw() {
  x += 10;
  frameRate(1);
  circle(x,height/2,10);
}