describe ("Record Collection", function () {
	var collection;
	before(function () {
		collection = {
			"2548": {
			  "album": "Slippery When Wet",
			  "artist": "Bon Jovi",
			  "tracks": [ 
				"Let It Rock", 
				"You Give Love a Bad Name" 
			  ]
			},
			"2468": {
			  "album": "1999",
			  "artist": "Prince",
			  "tracks": [ 
				"1999", 
				"Little Red Corvette" 
			  ]
			},
			"1245": {
			  "artist": "Robert Palmer",
			  "tracks": [ ]
			},
			"5439": {
			  "album": "ABBA Gold"
			}
		};
	});


	it('After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"', function () {
		updateRecords(collection, 5439, "artist", "ABBA");
		expect(collection[5439]).to.have.property("artist", "ABBA");
	});

	it('After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.', function () {
		updateRecords(collection, 5439, "tracks", "Take a Chance on Me");
		expect(collection[5439].tracks).to.include("Take a Chance on Me");
	});

	it('After updateRecords(2548, "artist", ""), artist should not be set', function () {
		updateRecords(collection,2548, "artist", "");
		expect(collection[2548]).to.not.have.property('artist');
	});

	it('After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.', function () {
		updateRecords(collection, 1245, "tracks", "Addicted to Love");
		expect(collection[1245].tracks).to.include("Addicted to Love");
	});

	it('After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.', function () {
		updateRecords(collection,2468, "tracks", "Free");
		expect(collection[2468].tracks).to.include('1999');
	});

	it('After updateRecords(2548, "tracks", ""), tracks should not be set', function () {
		updateRecords(collection, 2548, "tracks", "");
		expect(collection[2548]).to.not.have.property('tracks');
	});

});

