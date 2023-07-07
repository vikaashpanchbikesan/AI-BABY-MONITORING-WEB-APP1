status = "";
object = [];

function preload() {
    audio = loadSound("alert_alarm.wav");
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(380, 380);
    canvas.center();
}
function draw() {
    if (status != "person") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Baby Found" + objects.length;
            audio.stop();
        }
    }
    else {
        document.getElementById("number_of_objects").innerHTML = "Person Not Found" + objects.length;
        audio.play();
    }

}