// Code your solution here:
// .filter() method ==== The method accepts one argument, a callback function that it will invoke with each element in the array.
// For each element passed to the callback, if the callback's return value is truthy, that element is copied into a new array.
// If the callback's return value is falsy, the element is filtered out. After iterating over every element in the collection,
// .filter() returns the new array.
//
// .map method =====.map(), which transforms every element in an array to another value.
// Map also accepts a callback function, and it passes each element successively to the callback:

// returns an array of all matching drivers

// 1- take in two arguments: array of driver objects & # for revenue
// 2- filters through return an array of driver objects with revnue> than the revenue passed in
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}
// returns an array of all matching drivers names as string
// function uses the driver revnue function to map over it/trasnform it
// returns the names of the drivers
function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}
// returns an array of all matching drivers
// matches drivers and their attributes
function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}
// returns an array of names for all matching drivers
// takes the jmatches and transforms array as array of names
function exactMatchToList (drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}
