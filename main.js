x = 0;
y = 0;

drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "The system is hearing you";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech was translated to: " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "I'm drawing a circle";
        drawCircle = "set"
    }
    if (content == "rect") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "I'm drawing a rectangle";
        drawRect = "set"
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (drawCircle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "The circle were drawn";
        drawCircle = "";
    }
    if (drawRect == "set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "The Rectangle were drawn";
        drawRect = "";
    }
}