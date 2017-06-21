describe ("Symmetric Difference", function () {

	it('sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].', function () {
		expect(sym([1, 2, 3], [5, 2, 1, 4])).to.deep.equal([3, 4 , 5]);
	});

	it('sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.', function () {
		expect(sym([1, 2, 3], [5, 2, 1, 4])).to.have.lengthOf(3);
	});

	it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', function () {
		expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.deep.equal([1, 4, 5]);
	});

	it('sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.', function () {
		expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.have.lengthOf(3);
	});

	it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].', function () {
		expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.deep.equal([1, 4, 5]) ;
	});

	it('sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.', function () {
		expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.have.lengthOf(3);
	});

	it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].', function () {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.deep.equal([2, 3, 4, 6, 7]);
	});

	it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.', function () {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.have.lengthOf(5);
	});

	it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].', function () {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).to.deep.equal([1, 2, 4, 5, 6, 7, 8, 9]);
	});

	it('sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.', function () {
		expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).to.have.lengthOf(8);
	});

});

