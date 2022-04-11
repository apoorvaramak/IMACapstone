
let video;
let poseNet;
let poses = [];
let song = [] 
let clicked; 
let points = 0;
let pointCount = false; 
let speed; 
let controller; 
const synth = new Tone.AMSynth().toDestination();
const now = Tone.now()
class Note {
  constructor(x, y, note) {
    this.x = x;
    this.y = y;
    this.note = note; 
    this.clicked = false; 
    //this.active = true; 
  }

  draw() {
    rect(640-this.x, this.y, 45, 15);
    stroke(20);
  }

  update() {
    if (this.active) {
      this.y = this.y - 0.50;
    }
    if(this.y == 0)
      {
        this.active = false; 
      }
    if(this.clicked == true)
      {
        strokeWeight(0); 
        fill('rgba(0,0,0,0)');
        //this.clicked = false; 
      }
    else
      {
        strokeWeight(1); 
        fill(255); 
      }
  }
  click(vectorX, vectorY)
  {
    if(vectorX > 640-this.x && vectorX < 640-this.x+30 && abs(vectorY - 15 - this.y) < 15 && this.y> 100)
    {
        const comp = new Tone.Compressor(-30, 3);
        synth.triggerAttackRelease(this.note, "16n");
        comp.toDestination(); 
        //synth.triggerRelease(now+1); 
        this.clicked = true;
      pointCount = true; 
        
    }
  }
}

//end Note class 

function setup() {  
  bg = loadImage('guitarrockband.png');
  // buttonEasy = createButton('easy');
  // buttonMedium = createButton('medium');
  // buttonHard = createButton('hard');
  buttonOne = createButton('nose');
  buttonTwo = createButton('wrist');
  createCanvas(640, 480);
  button = createButton('Twinkle Twinkle Little Star');
  button2 = createButton('Mary Had a Little Lamb'); 
  
  button.mousePressed(twinkle);
  button2.mousePressed(mary); 
  
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  
  
  
  video.hide();
}

function twinkle(){
  noteOne = new Note(85, height, "D4");
  noteTwo = new Note(85, height, "D4");
  noteThree = new Note(425, height, "A5");
  noteFour = new Note(425, height, "A5"); 
  
  noteFive = new Note(510, height, "B5");
  noteSix = new Note(510, height, "B5");
  noteSeven = new Note(425, height, "A5");
  
  noteEight = new Note(425, height, "A5");
  noteNine = new Note(340, height, "G4");
  noteTen = new Note(340, height, "G4");
  
  noteEleven = new Note(255, height, "F#4");
  noteTwelve = new Note(255, height, "F#4");
  noteThirteen = new Note(170, height, "E4");
  
  noteFourteen = new Note(170, height, "E4");
  noteFifteen = new Note(85, height, "D4");
  noteSixteen = new Note(85, height, "D4");
  
  song.push(noteOne); 
  song.push(noteTwo); 
  song.push(noteThree); 
  song.push(noteFour); 
  song.push(noteFive); 
  song.push(noteSix); 
  song.push(noteSeven); 
  song.push(noteEight); 
  song.push(noteNine); 
  song.push(noteTen); 
  song.push(noteEleven); 
  song.push(noteTwelve); 
  song.push(noteThirteen); 
  song.push(noteFourteen); 
  song.push(noteFifteen); 
  song.push(noteSixteen); 
}

function mary()
{
  noteOne = new Note(520, height, "E5");
  noteTwo = new Note(370, height, "D5");
  noteThree = new Note(220, height, "C5");
  noteFour = new Note(370, height, "D5"); 
  
  noteFive = new Note(520, height, "E5");
  noteSix = new Note(520, height, "E5");
  noteSeven = new Note(520, height, "E5");
  
  noteEight = new Note(370, height, "D5");
  noteNine = new Note(370, height, "D5");
  noteTen = new Note(370, height, "D5");
  
  noteEleven = new Note(370, height, "D5");
  noteTwelve = new Note(520, height, "E5");
  noteThirteen = new Note(520, height, "E5");
  
  noteFourteen = new Note(520, height, "E5");
  noteFifteen = new Note(370, height, "D5");
  noteSixteen = new Note(220, height, "C5");
  noteSeventeen = new Note(370, height, "D5"); 
  
  noteEighteen = new Note(520, height, "E5");
  noteNineteen = new Note(520, height, "E5");
  noteTwenty = new Note(520, height, "E5");
  noteTwentyOne = new Note(520, height, "E5");
  
  noteTwentyTwo = new Note(370, height, "D5");
  noteTwentyThree = new Note(370, height, "D5");
  noteTwentyFour = new Note(520, height, "E5");
  noteTwentyFive = new Note(370, height, "D5");
  
  noteTwentySix = new Note(220, height, "C5");
  
  song.push(noteOne); 
  song.push(noteTwo); 
  song.push(noteThree); 
  song.push(noteFour); 
  song.push(noteFive); 
  song.push(noteSix); 
  song.push(noteSeven); 
  song.push(noteEight); 
  song.push(noteNine); 
  song.push(noteTen); 
  song.push(noteEleven); 
  song.push(noteTwelve); 
  song.push(noteThirteen); 
  song.push(noteFourteen); 
  song.push(noteFifteen); 
  song.push(noteSixteen); 
  song.push(noteSeventeen); 
  song.push(noteEighteen); 
  song.push(noteNineteen); 
  song.push(noteTwenty); 
  song.push(noteTwentyOne); 
  song.push(noteTwentyTwo); 
  song.push(noteTwentyThree); 
  song.push(noteTwentyFour); 
  song.push(noteTwentyFive); 
  song.push(noteTwentySix); 
}
function modelReady() {
  select('#status').html('Model Loaded');
}

// function easy(){
//   speed = 3000; 
// }

// function medium(){
//   speed = 2000;
// }

// function hard(){
//   speed = 1500;
// }

function controllerOne(){
  controller = true;
}

function controllerTwo(){
  controller = false;
}
function draw() {
  image(bg, 0, 0, width, height);  
  if(millis() > 7500)
 {
  push(); 
  translate(width,0);
  scale(-1, 1);
  image(video, 0, 0, width, height);

   
   // buttonEasy.mousePressed(easy);
   // buttonMedium.mousePressed(medium);
   // buttonHard.mousePressed(hard);
   buttonOne.mousePressed(controllerOne);
   buttonTwo.mousePressed(controllerTwo);
  
  for(var i = 0; i < song.length; i++)
    {
      if(millis() > (2000 * i) + 12500)
        {
          song[i].active = true;
          song[i].update(); 
          song[i].draw(); 
          //console.log("note "+ i);
          song[i].update(); 
        }
    }
  if(pointCount == true){
    points++; 
    pointCount = false; 
  }
  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {

    let pose = poses[0].pose;

    // Create a pink ellipse for the nose
    fill(213, 0, 143);
    if(!controller){
      let wristR = pose["rightWrist"];
      let wristL = pose["leftWrist"];
      ellipse(wristR.x, wristR.y, 20);
       ellipse(wristL.x, wristL.y, 20);
      
      
       // let eyeRight = ellipse(pose.rightEye.x, pose.rightEye.y, 20);
       // let eyeLeft = ellipse(pose.leftEye.x, pose.leftEye.y, 20);
      for(var j = 0; j < song.length; j++)
      {
        song[j].click(wristR.x, wristR.y);
        song[j].click(wristL.x, wristL.y);
      } 
      pop();
    }
    else{
    let nose = pose['nose'];
    ellipse(nose.x, nose.y, 20, 20);
    let eyeR = pose.rightEye;
    let eyeL = pose.leftEye;
    let distance = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    v1 = createVector(5000/distance * ((nose.x-320)/20), 20);
    line(nose.x, nose.y, nose.x + v1.x, nose.y + v1.y); 
    ellipse(nose.x + v1.x, nose.y + v1.y, 20, 20); 
    for(var j = 0; j < song.length; j++)
      {
        song[j].click(nose.x + v1.x, nose.y + v1.y);
      }
  pop(); 
    }
    
    textSize(32);
    fill(213, 0, 143);
    text("points: " + points, 280, 40)
    
  }
 }
    
}
