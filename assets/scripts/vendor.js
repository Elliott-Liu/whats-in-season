const searchText = document.getElementById("search-text");
const searchButton = document.getElementById("button-search");
const randomButton = document.getElementById("button-random");
const searchResult = document.getElementById("search-result");
const logMessage = document.getElementById("you-searched");

function outputSearchResult(text) {
	logMessage.textContent = "You searched for: ";
	searchResult.textContent = text;
}

function outputSearchResultNull(text) {
	logMessage.textContent = "You didn't search for anything!";
	searchResult.textContent = null;
}

function outputFeelingLucky(text) {
	logMessage.textContent = text;
	searchResult.textContent = null;
}
