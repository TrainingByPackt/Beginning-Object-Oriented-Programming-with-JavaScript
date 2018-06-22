var person = {name: "John", surname: "Smith"};

Object.preventExtensions(person);

person.age = 32;

console.log(person.age);		//result: undefined

if (Object.isExtensible(person)) {
  person.age = 32;
}
