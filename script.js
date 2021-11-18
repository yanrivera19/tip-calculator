/* 
Tip Calculator:

Step 1: Define a variable called dispTotalTip with the selection of a <p> 
element on which the tip amount will be displayed.
Step 2: Define a variable called dispTotalCost with the selection of a <p> 
element on which the total cost of the meal including the tip will be displayed.
Step 3: Define a variable called clearBtn with the selection of a <button> element.
This button will not be displayed for now.
Step 4: Create a function called calcTip that takes in an event as its parameter. This 
function will be executed whenever the user makes a submission. 
Step 5: Use the preventDefault method on the event passed in so that the page doesn't get
redirected whenever the form in our HTML file gets submitted.
Step 6: Define a variable called costOfMeal with the selection of the value submitted on the
input box intended for the cost of the meal.
Step 7: Define a variable called tipPercentage with the selection of the value submitted on the
input box intended for the tip percentage.
Step 8: Define a variable called tipAmount with a mathematical equation that calculates the tip amount
and, if necessary, rounding the amount to the first two decimal places.
Step 8: Define a variable called costPlusTip with a mathematical equation that calculates the total cost
of the meal plus the tip and, if necessary, rounding the amount to the first two decimal places.
Step 9: Display some messages indicating the result of the previous calculations.
Step 10: Display the clearBtn that at the beggining of the program was hidden. This button, whenever clicked,
will execute the resetContent function.
Step 11: Create a function called resetContent. This function will reset the variables to their initial values
and reset the UI to its original condition.
*/

const dispTotalTip = document.getElementById("totalTip");
const dispTotalCost = document.getElementById("totalCost");
const clearBtn = document.getElementById("clearBtn");
clearBtn.style.display = "none";

const calcTip = function(event) {
	event.preventDefault();
	const costOfMeal = parseInt(document.getElementById("costMeal").value);
	const tipPercentage = parseInt(document.getElementById("tip").value);
	const tipAmount = Math.round(((costOfMeal * (tipPercentage / 100)) + Number.EPSILON) * 100) / 100;
	const costPlusTip = Math.round(((costOfMeal + tipAmount) + Number.EPSILON) * 100) / 100;
	dispTotalTip.innerHTML = "The tip amount is:" + " " + "$" + tipAmount;
	dispTotalCost.innerHTML = "The total cost (including tip) is:" + " " + "$" + costPlusTip;
	clearBtn.style.display = "inline-block";	
};

function resetContent() {
	clearBtn.style.display = "none";
	dispTotalCost.innerHTML = "";
	dispTotalTip.innerHTML = "";
	document.getElementById("costMeal").value = "";
	document.getElementById("tip").value = "";	
};


