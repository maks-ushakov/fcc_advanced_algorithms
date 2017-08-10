function checkCashRegister(price, cash, cid) {
  var change = [], // Returned change
		isClose = true; // Boolean Close flag

  var coinValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00  
  };

  var rest = cash - price,
		coinName,
		currentChange,
		localClose;

  for( var i = cid.length - 1; i >= 0; i--) {
    coinName = cid[i][0];
	localClose = false;

    if(coinValues[coinName] > rest) continue;
	
    currentChange = Math.floor(rest/coinValues[coinName]) * coinValues[coinName];
	if(cid[i][1] <= currentChange) currentChange = cid[i][1];
	
    // Closed if each cash in drawer equal current change
	if(cid[i][1] === currentChange) {
		localClose = true;
	}
	isClose &= localClose; 

    rest -= currentChange;
	// Fix float value
	rest = Math.round(rest * 100) / 100;

    change.push([coinName, currentChange]);

	if (rest === 0) break;
  }
	if(rest > 0) return "Insufficient Funds";

	if(isClose) return "Closed";
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
