mustache_x=0
mustache_y=0
noseY=0
function preload() {
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")   
}
function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    function gotPoses(results)
    {
        if(results.length > 0)
        {
            console.log(results);
            console.log("nose x= " + results[0].pose.nose.x);
            console.log("nose y= " + results[0].pose.nose.y);
        }
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache,mustache_x,mustache_y,60,40);
}
function take_snapshot(){
    save('myFilterImage.png');
}
function modelLoaded() {
    console.log('PoeseNet is Initializing');
}
function gotPose(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex: "+results[0].pose.nose.x);
        mustache_x=results[0].pose.net.x=30;
        console.log("nosey: "+results[0].pose.nose.y);
        mustache_yresults[0].pose.net.y;
    }
}