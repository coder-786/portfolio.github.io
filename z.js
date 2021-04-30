var a = Person('a');
var b = new Person('b');
var c = Person;
function Person(name) {
     this.first_name = name;
}

console.log(a.first_name);
console.log(b.first_name);
console.log(c.first_name);