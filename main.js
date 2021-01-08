nosex=0;
nosey=0
leftwristx=0;
rightwristx=0;
diffrence=0;

function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,400);
    canvas.position(600,250);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
    
}

function draw(){
    background(34,56,78);
    fill(0,255,127);
    square(nosex,nosey,diffrence);
    document.getElementById("side").innerHTML="The side of the square is "+diffrence+" px";
}

function modelloaded(){
    console.log("model has loaded");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex =results[0].pose.nose.x;
        nosey =results[0].pose.nose.y;

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x
        diffrence=floor(leftwristx-rightwristx);
        console.log(diffrence);
    }
}