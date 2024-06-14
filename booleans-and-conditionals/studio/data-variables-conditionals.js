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




console.log(date);
console.log(time);
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Astronaut Count: " + astronautCount + ". Too many fellas on the ship.");
} else {
     let astroCount = true;
    console.log("Astronaut Count: " + astronautCount + ". We have the appropriate amount of astronauts!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus) {
     let astroStat = true;
    console.log("Astronaut Status: " + astronautStatus + ". Astronauts are good to go!");
} else {
    console.log("Astronaut Status: " + astronautStatus + ". Not all astronauts are good to go.");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    console.log("Total Mass: " + totalMassKg + ". The mass is too darn high.");
} else {
    let mass = true;
console.log("Total Mass: " + totalMassKg + ". We have an acceptable mass!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
     let temp = true;
console.log("Fuel Temperature: " + fuelTempCelsius +". Just the right temperature!");
} else {
    console.log("Fuel Temperature: " + fuelTempCelsius + ". Temps are all whack.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
     let fuel = true;
    console.log("Fuel Level: " + fuelLevel + ". We have enough juice!")
} else {
    console.log("Fuel Level: " + fuelLevel + ". Not enough juice.");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
     let weather = true;
    console.log("Weather Status: " + weatherStatus +". Weather is acceptable for launch!");
} else {
    console.log("Weather Status: " + weatherStatus +". Weather conditions are not suitable for take-off.");
}
// Verify shuttle launch can proceed based on above conditions
if (!(weather && fuel && mass && temp && astroStat && astroCount)) {
    prepareForLiftOff === false;
    console.log("NOT clear to launch.")
}

if (prepareForLiftOff === true){
    console.log("Clear to launch! Have a safe trip!");
}
