var fahrenheitToCelsiusMain = function (tempInFarenheit) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var tempInCelcius = ((tempInFarenheit - 32) * 5) / 9;
  return tempInCelcius;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calculateTotalFuelCost = function (distanceInMiles) {
  // Some code that calculates total fuel cost
  var fuelCost = (distanceInMiles / 9) * 2.2;
  return fuelCost;
};

var roadTripCostBaseMain = function (distanceInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  // var distanceInMiles, fuelCost;
  var distanceInMiles = convertKmToMiles(distanceInKm);
  var totalFuelCost = calculateTotalFuelCost(distanceInMiles);
  //var myOutputValue = "hello world";
  return totalFuelCost;
};

var calculateTotalFuelCostForComfortable = function (
  distanceInMiles,
  costPerLitreOfFuel
) {
  // Some code that calculates total fuel cost
  //var costPerLitreOfFuel = 2.0;
  var fuelCostForComfortable = (distanceInMiles / 9) * costPerLitreOfFuel;
  return fuelCostForComfortable;
};

var roadTripCostComfortableMain = function (distanceInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var distanceInMiles = convertKmToMiles(distanceInKm);
  var costPerLitreOfFuelViaTrain = 2.0;
  var totalFuelCostForComforatble = calculateTotalFuelCostForComfortable(
    distanceInMiles,
    costPerLitreOfFuelViaTrain
  );
  return totalFuelCostForComforatble;
};

// ice machine program
var gramToPound = function (massInGram) {
  var massInPound = massInGram / 454;
  return massInPound;
};

var calculateIceCubeMass = function (noOfGuest) {
  var massOfIceCube = 1.5;
  var iceCubePerDrink = 4;
  var noOfDrink = 2;
  var totalIceCubeMass =
    noOfGuest * noOfDrink * iceCubePerDrink * massOfIceCube;
  return totalIceCubeMass;
};

var iceMachineMain = function (noOfGuest) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var totalIceCubeMassInGram = calculateIceCubeMass(noOfGuest);
  var totalIceCubeMassInPound = gramToPound(totalIceCubeMassInGram);
  var rateOfIce = 5;
  var duration = totalIceCubeMassInPound / rateOfIce;
  // .toFixed(2) limits the number of decimal places to 2.
  return duration.toFixed(2);
};

// beer order program

var calculateDays = function () {
  var totalDaysPerQuarter = 365 / 4;
  return totalDaysPerQuarter;
};

var calculateBeerMass = function (noOfCustomer) {
  var pintPerCustomerVisit = 2;
  var pintPerHalfBarrel = 124;
  var totalBeerMass = (noOfCustomer * pintPerCustomerVisit) / pintPerHalfBarrel;
  return totalBeerMass;
};

var beerOrderMain = function (noOfCustomer) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var totalBeerMass = calculateBeerMass(noOfCustomer);
  var totalBeerMassPerQuarter = totalBeerMass * calculateDays();
  return totalBeerMassPerQuarter;
};

// cellular data program
var roundUpData = function (dataUsed) {
  var dataRange = Math.ceil(dataUsed);
  return dataRange;
};

var calculateNoOfDataPlan = function (dataUsed) {
  var dataPlanSize = 50;
  var noOfDataPlan = dataUsed / dataPlanSize;
  var noOfDataPlanRoundUp = Math.ceil(noOfDataPlan);
  return noOfDataPlanRoundUp;
};

var cellularDataMain = function (dataUsed) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var dataToClosestGB = roundUpData(dataUsed);
  var noOfDataPlan = calculateNoOfDataPlan(dataToClosestGB);
  var costPerDataPlan = 19.99;
  var costOfPlan = costPerDataPlan * noOfDataPlan;
  var costPerGB = costOfPlan / dataToClosestGB;
  return costPerGB.toFixed(2);
};
