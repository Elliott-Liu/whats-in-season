let textResult;

function getSearchText() {
	textResult = String(searchText.value);
}

function onSearchButton() {
	getSearchText();
	if (textResult) {
		outputSearchResult(textResult);
	} else if (!textResult) {
		outputSearchResultNull();
	}
	console.log(textResult);
}

function onRandomButton() {
	outputFeelingLucky(`Lucky to have been where I have been...`);
}

searchButton.addEventListener("click", onSearchButton);
randomButton.addEventListener("click", onRandomButton);
