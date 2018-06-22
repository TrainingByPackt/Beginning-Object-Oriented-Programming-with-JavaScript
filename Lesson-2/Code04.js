var greeting = "Good morning";
var displayGreeting;
 
function greets(person) {
    var fullName = person.name + " " + person.surname;
	return function () { 
    	console.log(greeting + " " + fullName);
    }
}
 
displayGreeting = greets({name: "John", surname: "Smith"});

displayGreeting();