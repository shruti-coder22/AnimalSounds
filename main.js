function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o-8Vgw7lf/", modelReady);
}
 
function modelReady() {
    classifier.classify(gotResults);
}
