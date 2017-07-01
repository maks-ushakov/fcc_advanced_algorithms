describe ("No repeats please", function () {

	it('permAlone("aab") should return ', function() {
		expect(permAlone("aab")).to.be.a('number');
	});

	it('permAlone("aab") should return 2', function() {
		expect(permAlone("aab")).to.equal(2);
	});

	it('permAlone("aaa") should return 0', function() {
		expect(permAlone("aaa")).to.equal(0);
	});

	it('permAlone("aabb") should return 8', function() {
		expect(permAlone("aabb")).to.equal(8);
	});

	it('permAlone("abcdefa") should return 3600', function() {
		expect(permAlone("abcdefa")).to.equal(3600);
	});

	it('permAlone("abfdefa") should return 2640', function() {
		expect(permAlone("abfdefa")).to.equal(2640);
	});

	it('permAlone("zzzzzzzz") should return 0', function() {
		expect(permAlone("zzzzzzzz")).to.equal(0);
	});

	it('permAlone("a") should return 1', function() {
		expect(permAlone("a")).to.equal(1);
	});

	it('permAlone("aaab") should return 0', function() {
		expect(permAlone("aaab")).to.equal(0);
	});
	it('permAlone("aaabb") should return 12', function() {
		expect(permAlone("aaabb")).to.equal(12);
	});

});

