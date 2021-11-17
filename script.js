
const dispTotalCost = document.getElementById("totalCost");
const dispTotalTip = document.getElementById("totalTip");
const clearBtn = document.getElementById("clearBtn");
clearBtn.style.display = "none";


const calcTip = function(event) {
	let costOfMeal = parseInt(document.getElementById("costMeal").value);
	let tipPercentage = parseInt(document.getElementById("tip").value);
	let tipAmount = Math.round(((costOfMeal * (tipPercentage / 100)) + Number.EPSILON) * 100) / 100;
	let costPlusTip = Math.round(((costOfMeal + tipAmount) + Number.EPSILON) * 100) / 100;
	dispTotalTip.innerHTML = "The tip amount is:" + " " + "$" + tipAmount;
	dispTotalCost.innerHTML = "The total cost (including tip) is:" + " " + "$" + costPlusTip;

	clearButton();
	event.preventDefault();

}

function clearButton() {
	clearBtn.style.display = "inline-block";	
  	clearBtn.addEventListener("click", resetContent); 	
};

function resetContent() {
	clearBtn.style.display = "none";
	dispTotalCost.innerHTML = "";
	dispTotalTip.innerHTML = "";
	document.getElementById("costMeal").value = "";
	document.getElementById("tip").value = "";	
};


