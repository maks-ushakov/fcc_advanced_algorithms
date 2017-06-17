function pairwise(arr, arg) {
	var usedIndexes = [];
	var i;
	arr.forEach(function (el, index) {
		for( i = 0; i < index ; i++ ) {
			if( el + arr[i] === arg && usedIndexes.indexOf(i) === -1 ) {
				usedIndexes = usedIndexes.concat([i, index]);
				break;
			}
		}
	});
	// sum all found indexes;
  return usedIndexes.reduce(function(acc, curr) { return acc + curr;}, 0);
}

