"use strict";
class Animal {
    printName() {
        console.log(`hello ${this.getName()}`);
    }
}
class Clock extends Animal {
    getName() {
        return '123';
    }
}
new Clock().printName();
//# sourceMappingURL=pattern.js.map