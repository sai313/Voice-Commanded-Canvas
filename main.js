x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";

function setup() {
    canvas = createCanvas(900,600);
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognised as - "+content;
    if (content == "circle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing Circle";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle";
        draw_rectangle = "set";
    }
}

function draw() {
    if (draw_circle == "set") {
        radius = document.getElementById("input").value;
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is Drawn";
        draw_circle = "";
    }
    if (draw_rectangle == "set") {
        side = document.getElementById("input").value;
        rect(x,y,side,50);
        document.getElementById("status").innerHTML = "Rectangle is Drawn";
        draw_rectangle = "";
    }
}