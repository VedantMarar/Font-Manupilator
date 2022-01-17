nose_x = 0;
nose_y = 0;
rwx = 0;
lwx = 0;
diff = 0;

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
    fill('turquoise');
    textSize(diff);
    text('Anonymous',50,400);
    document.getElementById("square_side").innerHTML ="The font size is" + diff;
}

function modelLoaded(){
    console.log("MODEL LOADED!");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose_x="+nose_x+"nose_y="+nose_y);
    rwx = results[0].pose.rightWrist.x;
    lwx = results[0].pose.leftWrist.x;
    diff =floor(rwx-lwx) 
    console.log("Left wrist x="+lwx+"Right wrist x="+rwx+"The difference="+diff);
    }
}
