// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = "80.7";
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%"
let weatherStatus = "clear";
let prepareForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    prepareForLiftOff = false;
    console.log("Too many fellas on the ship.");
} else {
    console.log("We have the appropriate amount of astronauts!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus) {
    prepareForLiftOff = true;
    console.log("Astronauts are good to go!");
} else {
    prepareForLiftOff = false
    console.log("Not all astronauts are good to go.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    prepareForLiftOff  = false;
    console.log("The mass is too darn high.");
} else {
console.log("We have an acceptable mass!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
prepareForLiftOff = true;
console.log("Just the right temperature!");
} else {
    prepareForLiftOff = false;
    console.log("Temps are all whack.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    prepareForLiftOff = true;
    console.log("We have enough juice!")
} else {
    prepareForLiftOff = false;
    console.log("Not enough juice.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    prepareForLiftOff = true;
    console.log("Weather is acceptable for launch!");
} else {
    prepareForLiftOff = false;
    console.log("Weather conditions are not suitable for take-off.");
}
// Verify shuttle launch can proceed based on above conditions
if (prepareForLiftOff){
    console.log("Clear to launch!");
} else {
    console.log("NOT clear to launch.")
}