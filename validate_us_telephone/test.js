describe ("Validate US Telephone Numbers", function () {

	it('telephoneCheck("555-555-5555") should return a boolean.', function () {
		expect(telephoneCheck("555-555-5555")).to.be.a('boolean');
	});

	it('telephoneCheck("1 555-555-5555") should return true.', function () {
		expect(telephoneCheck("1 555-555-5555")).to.be.true;
	});

	it('telephoneCheck("1 (555) 555-5555") should return true.', function () {
		expect(telephoneCheck("1 (555) 555-5555")).to.be.true;
	});

	it('telephoneCheck("5555555555") should return true.', function () {
		expect(telephoneCheck("5555555555")).to.be.true;
	});

	it('telephoneCheck("555-555-5555") should return true.', function () {
		expect(telephoneCheck("555-555-5555")).to.be.true;
	});

	it('telephoneCheck("(555)555-5555") should return true.', function () {
		expect(telephoneCheck("(555)555-5555")).to.be.true;
	});

	it('telephoneCheck("1(555)555-5555") should return true.', function () {
		expect(telephoneCheck("1(555)555-5555")).to.be.true;
	});

	it('telephoneCheck("555-5555") should return false.', function () {
		expect(telephoneCheck("555-5555")).to.be.false;
	});

	it('telephoneCheck("5555555") should return false.', function () {
		expect(telephoneCheck("5555555")).to.be.false;
	});

	it('telephoneCheck("1 555)555-5555") should return false.', function () {
		expect(telephoneCheck("1 555)555-5555")).to.be.false;
	});

	it('telephoneCheck("1 555 555 5555") should return true.', function () {
		expect(telephoneCheck("1 555 555 5555")).to.be.true;
	});

	it('telephoneCheck("1 456 789 4444") should return true.', function () {
		expect(telephoneCheck("1 456 789 4444")).to.be.true;
	});

	it('telephoneCheck("123**&!!asdf#") should return false.', function () {
		expect(telephoneCheck("123**&!!asdf#")).to.be.false;
	});

	it('telephoneCheck("55555555") should return false.', function () {
		expect(telephoneCheck("55555555")).to.be.false;
	});

	it('telephoneCheck("(6505552368)") should return false', function () {
		expect(telephoneCheck("(6505552368)")).to.be.false;
	});

	it('telephoneCheck("2 (757) 622-7382") should return false.', function () {
		expect(telephoneCheck("2 (757) 622-7382")).to.be.false;
	});

	it('telephoneCheck("0 (757) 622-7382") should return false.', function () {
		expect(telephoneCheck("0 (757) 622-7382")).to.be.false;
	});

	it('telephoneCheck("-1 (757) 622-7382") should return false', function () {
		expect(telephoneCheck("-1 (757) 622-7382")).to.be.false;
	});

	it('telephoneCheck("2 757 622-7382") should return false.', function () {
		expect(telephoneCheck("2 757 622-7382")).to.be.false;
	});

	it('telephoneCheck("10 (757) 622-7382") should return false.', function () {
		expect(telephoneCheck("10 (757) 622-7382")).to.be.false;
	});

	it('telephoneCheck("27576227382") should return false.', function () {
		expect(telephoneCheck("27576227382")).to.be.false});

	it('telephoneCheck("(275)76227382") should return false.', function () {
		expect(telephoneCheck("(275)76227382")).to.be.false;
	});

	it('telephoneCheck("2(757)6227382") should return false.', function () {
		expect(telephoneCheck("2(757)6227382")).to.be.false;
	});

	it('telephoneCheck("2(757)622-7382") should return false.', function () {
		expect(telephoneCheck("2(757)622-7382")).to.be.false;
	});

	it('telephoneCheck("555)-555-5555") should return false.', function () {
		expect(telephoneCheck("555)-555-5555")).to.be.false;
	});

	it('telephoneCheck("(555-555-5555") should return false.', function () {
		expect(telephoneCheck("(555-555-5555")).to.be.false;
	});

	it('telephoneCheck("(555)5(55?)-5555") should return false.', function () {
		expect(telephoneCheck("(555)5(55?)-5555")).to.be.false;
	});

});

