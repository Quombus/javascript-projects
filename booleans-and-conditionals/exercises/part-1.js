// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinsReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinsReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus){
    console.log("Crew Ready");
}else {
   console.log("Crew Not Ready");
}

if (computerStatusCode === 200){
   console.log("Please Stand By. Computer is Rebooting")
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online");
} else {
   console.log("Alert! Computer Offline")
}

if (shuttleSpeed > 17500){
   console.log("ALERT! Escape velocity reached");
} else if (shuttleSpeed < 8000){
   console.log("ALERT! Cannot maintain orbit!");
} else {
   console.log("Stable Speed");
}

