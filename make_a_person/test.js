describe ("Make a Person", function () {
	var bob;
	before(function () {
		bob = new Person('Bob Ross');
	});

	it('Object.keys(bob).length should return 6.', function () {
		expect(Object.keys(bob).length).to.equal(6);
	});

	it('bob instanceof Person should return true.', function () {
		expect(bob instanceof Person).to.be.true;
		expect(bob).to.be.instanceof(Person);
	});

	it('bob.firstName should return undefined.', function () {
		expect(bob.firstName).to.be.undefined;
	});

	it('bob.lastName should return undefined.', function () {
		expect(bob.lastName).to.be.undefined;
	});

	it('bob.getFirstName() should return "Bob".', function () {
		expect(bob.getFirstName()).to.equal("Bob");
	});

	it('bob.getLastName() should return "Ross".', function () {
		expect(bob.getLastName()).to.have.string("Ross");
	});

	it('bob.getFullName() should return "Bob Ross".', function () {
		expect(bob.getFullName()).to.equal("Bob Ross");
	});

	it('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', function () {
		bob.setFirstName("Haskell");
		expect(bob.getFullName()).to.equal("Haskell Ross");
	});



	it('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', function () {

		bob.setFirstName("Haskell");
		bob.setLastName('Curry');
		expect(bob.getFullName()).to.equal("Haskell Curry");
	});


	describe("Change Full Name", function () {
		before(function () {
			bob = new Person('Bob Ross');
			bob.setFullName("Haskell Curry");
		});


		it('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").', function () {
			expect(bob.getFullName()).to.equal("Haskell Curry");
		});

		it('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").', function () {
			expect(bob.getFirstName()).to.equal("Haskell");
		});

		it('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', function () {
			expect(bob.getLastName()).to.equal("Curry");
		});
	});

});

