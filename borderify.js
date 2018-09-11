console.log("State test1: " + document.readyState);
if(document.readyState == "complete"){
	
	console.log("2nd run");
	var button = document.getElementById("more");
	button.click();
	console.log("button clicked, if run");
	setTimeout(printCategory, 3000);
}
window.onload = function () { 
	console.log("State: " + document.readyState)
	if(document.readyState){
		var button = document.getElementById("more");
		button.click();
		console.log("button clicked")
		setTimeout(printCategory, 3000);
		
	}
	
	/*
	document.body.style.border = "5px solid red";
	var categoryArr = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string");
	alert("Length " + categoryArr.length)
	alert("cat: " + categoryArr[0])

	

	alert("Length " + categoryArr.length)
	alert("cat: " + categoryArr[0])*/
}

function printCategory() {
	console.log("printCategory called...");
	category = document.getElementById("title");
	console.log("node list " + category.childNodes.length);
	for(i = 0; i < category.childNodes.length; i++){
		console.log("i is " + category.childNodes[i]);
	}
	console.log("Children: " + category.innerHTML);
	//var category = document.getElementById("content").firstChild.firstChild
	//console.log("Found length: " + categoryArr.length);
	//console.log("Category: " + category);
}





