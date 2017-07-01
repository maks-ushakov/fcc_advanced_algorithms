function permAlone(str) {
  var chars = str.split('');
  var count = 0;
  
  Array.prototype.swap = function (index1, index2) {
    var temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
    
    return this;
  };
  
  generate(chars.length);
  
  return count;
  
  function generate (n) {
    if(n === 1 && !(/(\w)\1+/.test(chars.join('')))) {
      count++;
    } else {
      for(var i = 0; i < n ; i++) {
        generate(n - 1);
        chars.swap( n % 2 ? 0 : i, n - 1);
      }
    }
  }
  
}
