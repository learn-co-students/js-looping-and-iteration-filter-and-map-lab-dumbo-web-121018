// Code your solution here:
function driversWithRevenueOver(array, rev){
  return array.filter(function(item){
    return item.revenue > rev;
  })
}

function driverNamesWithRevenueOver(array, rev){
  return driversWithRevenueOver(array, rev)
  .map(function(item){
    return item.name;
  })
}

function exactMatch(array, match){
  return array.filter(function(item){
    return item[Object.keys(match)[0]] === Object.values(match)[0];
  })
}

function exactMatchToList(array, match){
  return exactMatch(array, match)
  .map(function(item){
    return item.name;
  })
}
