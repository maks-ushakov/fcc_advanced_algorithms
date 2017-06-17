describe ("Inventory Update", function () {

	var currInventory;

	beforeEach(function () {
		currInventory = [
			[21, "Bowling Ball"],
			[2, "Dirty Sock"],
			[1, "Hair Pin"],
			[5, "Microphone"]
		];

	});

	it('The function updateInventory should return an array.', function () {
		expect(updateInventory([[1,"abc"]],[[2, "cde"]])).to.be.instanceof(Array);
	});

	it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length should return an array with a length of 6.', function () {
			var newInventory = [
			[2, "Hair Pin"],
			[3, "Half-Eaten Apple"],
			[67, "Bowling Ball"],
			[7, "Toothpaste"]
		];
		expect(updateInventory(currInventory, newInventory).length).to.equal(6);
		expect(updateInventory(currInventory, newInventory)).to.be.instanceof(Array);
	});

	it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].', function () {
		var newInventory = [
			[2, "Hair Pin"],
			[3, "Half-Eaten Apple"],
			[67, "Bowling Ball"],
			[7, "Toothpaste"]
		];
		var resultArray = [
			[88, "Bowling Ball"],
			[2, "Dirty Sock"],
			[3, "Hair Pin"],
			[3, "Half-Eaten Apple"],
			[5, "Microphone"],
			[7, "Toothpaste"]
		];

		expect(updateInventory(currInventory, newInventory)).to.deep.equal(resultArray);
	});

	it('updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].', function () {
		expect(updateInventory(currInventory, [])).to.deep.equal(currInventory);
	});

	it('updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].', function () {
		var newInventory =  [
			[2, "Hair Pin"],
			[3, "Half-Eaten Apple"],
			[67, "Bowling Ball"],
			[7, "Toothpaste"]
		];
		var result = [
			[67, "Bowling Ball"],
			[2, "Hair Pin"],
			[3, "Half-Eaten Apple"],
			[7, "Toothpaste"]
		];

		expect(updateInventory([], newInventory)).to.deep.equal(result);
	});

	it('updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].', function () {
		var currInventory = [
			[0, "Bowling Ball"],
			[0, "Dirty Sock"],
			[0, "Hair Pin"],
			[0, "Microphone"]
		];
		var newInventory = [
			[1, "Hair Pin"],
			[1, "Half-Eaten Apple"],
			[1, "Bowling Ball"],
			[1, "Toothpaste"]
		];
		var result = [
			[1, "Bowling Ball"],
			[0, "Dirty Sock"],
			[1, "Hair Pin"],
			[1, "Half-Eaten Apple"],
			[0, "Microphone"],
			[1, "Toothpaste"]
		];

		expect(updateInventory(currInventory, newInventory)).to.deep.equal(result);
	});


});

