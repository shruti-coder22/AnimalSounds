function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o-8Vgw7lf/", modelReady);
}
 
function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);

        random_num_r = Math.floor(Math.random()*255)+1;
        random_num_g = Math.floor(Math.random()*255)+1;
        random_num_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_num_r + "," + random_num_g + "," + random_num_b + ")";

        document.getElementById("result_label").innerHTML = "I can hear a " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Acuracy = " + (results[0].confidence*100).toFixed(2) + " %";

        img = document.getElementById("ear");




       if (results[0].label == "Dog") {
           img.src = "Dog.png";
       }
       else if (results[0].label == "Cat") {
           img.src = "Cat.png";
       }

       else if (results[0].label == "Bird") {
           img.src = "Bird.png";
       }

       else {
           img.src = "Ear.png";
       }


   }
}
