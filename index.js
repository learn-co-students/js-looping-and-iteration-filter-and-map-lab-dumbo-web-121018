// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => {
    return driver.name;
  });
}

function exactMatch(drivers, match) {
  return drivers.filter(driver => {
    let comparison = false;
    for (const key in match) {
      comparison = driver[key] === match[key];
    }
    return comparison;
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(driver => {
    return driver.name;
  });
}
