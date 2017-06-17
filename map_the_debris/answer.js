function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(function(item) {
    return {name: item.name,
           orbitalPeriod: Math.round (2 * Math.PI * Math.pow( Math.pow(earthRadius + item.avgAlt, 3) / GM, 0.5))};
  });
}
