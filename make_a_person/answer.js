var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var _firstName, _lastName;
    this.getFullName = function() {
      return _firstName + " " + _lastName;
    };
  
    this.getFirstName = function() {
      return _firstName;
    };
  
    this.getLastName = function() {
      return _lastName;
    };
  
    this.setFirstName = function(first) {
      _firstName = first;
    };
  
    this.setLastName = function(last) {
      _lastName = last;
    };
  
    this.setFullName = function (firstAndLast) {
      var names = firstAndLast.split(" ");
      _firstName = names[0];
      _lastName = names[1];
    };
  
    this.setFullName(firstAndLast);
    return firstAndLast;
};
