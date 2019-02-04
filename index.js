// Code your solution here:
function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  })
}
function driverNamesWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue
  }).map(function(richDriver){
    return richDriver.name
  })
}
function exactMatch(drivers,object){
  return drivers.filter(function(driver){
    let result = false
    for(const key in object){
      result = (driver[key]===object[key])
    }
    return result
  })
}
function exactMatchToList(drivers,object){
  return exactMatch(drivers,object)
    .map(function(driver){
      return driver.name
    })
}
