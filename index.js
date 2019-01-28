// Code your solution here:

function driversWithRevenueOver(array, revenue) {
  return array.filter(object => object.revenue > revenue);
};

function driverNamesWithRevenueOver(array, revenue) {
  const newArray = driversWithRevenueOver(array, revenue);
  const result = [];
  for (const element of newArray) {
    result.push(element.name);
  };
  return result;
};

function exactMatch(array, object) {
  const result = [];
  for (const element of array){
    const findKey = Object.keys(element);
    const searchKey = Object.keys(object);
    for (i = 0; i < findKey.length; i++) {
      if (findKey[i] === searchKey[0]) {
        if (element[findKey[i]] === object[findKey[i]]){
          const obj = Object.assign({}, element);
          result.push(obj);
        }
      }
    };
  };
  return result;
};

function exactMatchToList(array, object) {
  const query = exactMatch(array, object);
  const result = [];
  for (const element of query) {
    result.push(element.name);
  }
  return result;
};
