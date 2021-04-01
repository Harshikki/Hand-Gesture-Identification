prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 350,
    image_format: "jpg",
    jpg_quality: 90
});

camera = document.getElementById("camera").innerHTML;
Webcam.attach('#camera');

function takeGesture(){
    Webcam.snap(function(data_uri) { 
    document.getElementById("gestureResult").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/q6SqDpGsA/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}