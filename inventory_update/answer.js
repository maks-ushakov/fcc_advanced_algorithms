function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
	arr2.forEach(function(item) {
		
		var current = arr1.find(function(el) { return el[1] == item[1];});
		if(typeof(current) !== 'undefined') {
			current[0] += item[0];
		} else {
			arr1.push(item);
		}

	});

	//	 alphabetical order by item
    return arr1.sort(function(item1, item2) {
		return item1[1] > item2[1];
	});
}
