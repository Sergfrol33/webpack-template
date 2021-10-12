var Cat = /** @class */ (function () {
    function Cat(name, gender, age, weight, color) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.color = color;
    }
    Cat.prototype.meow = function () {
        console.log('meow');
    };
    Cat.prototype.eat = function (food) {
        console.log("eat " + food);
    };
    return Cat;
}());
var sam = new Cat('Sam', 'male', 2, 15, 'black');
sam.eat('meat');
