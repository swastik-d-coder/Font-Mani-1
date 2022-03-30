leftWristX=0;
rightWrist=0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{ 
    console.log('PoseNet Is Initialized!');
 }

 function gotPoses(results) {
    if(results.lenght > 0) {
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;


difference = floor(leftWristX - rightWristX);
  
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference );
    
    }
}

function draw() {
    document.getElementById("font-size") .innerHTML = "Size of the text will be = " + difference + "px";
  
    background("#6C91C2");
 textSize(difference);
 fill("#000000");
 text('Swastik', 50, 400);
}
