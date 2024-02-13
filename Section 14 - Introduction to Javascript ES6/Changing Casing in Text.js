var name = prompt("What is your name?");

var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restName = name.slice(1, name.length);
restName = restName.toLowerCase();

var capitalisedName = upperCaseFirstChar + restName;
alert("Hello, " + capitalisedName + ".");