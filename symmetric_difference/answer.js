function sym(args) {
  
  return Array.prototype.reduce.call(arguments, function(acc, curr) {
    return diff(acc, uniq(curr));
  }, []).sort(function (x,y) { return x - y; });
  
  /* Return only uniq values of array
  */
  function uniq (arr) {
    var result = [];
    arr.forEach(function(item) {
      if(result.indexOf(item) === -1) {
        result.push(item);
      }
    });
    return result;
  }
  
  /* Return symmetric difference of two array */
  function diff(arr1, arr2) {
    return arr1.filter(isNotInArray(arr2))
            .concat(arr2.filter(isNotInArray(arr1)));
  }
  

  function isNotInArray (arr) {
    return function (item) {
      return arr.indexOf(item) === -1;
    };
    
  }
}
