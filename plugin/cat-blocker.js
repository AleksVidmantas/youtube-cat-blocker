

console.log("test000000000");

var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.status);



console.log('OPENED', xhr.status);
if ("withCredentials" in xhr) {
	console.log("CORS supported");
	xhr.open('GET', 'https://xhr.spec.whatwg.org/', true);
	console.log("openbed>");
}else{
	console.log("Sh*t");
}

// Response handlers.
xhr.onload = function() {
	console.log("testonload");
    var text = xhr.responseText;
    
    alert('Response from CORS request to ' + text);
  };

xhr.onerror = function() {
alert('Woops, there was an error making the request.: ' + xhr.statusText);
};

xhr.send();






