function setup(){
    canvas =    createCanvas(550,550);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,550);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function draw(){
    background('#F0F8FF');
}

function modelLoaded(){
    console.log("MODEL LOADED!");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    }
}