// Code your solution here:
let driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(function (driver) { return driver["revenue"] > revenue });
}

let driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map( x => x["name"]);
}

let exactMatch = (drivers, object) => {
  let key = Object.keys(object)[0];
  return drivers.filter(function (driver) { return driver[key] === object[key]});
}

let exactMatchToList = (drivers, object) => {
  return exactMatch(drivers, object).map(object => object["name"]);
}
