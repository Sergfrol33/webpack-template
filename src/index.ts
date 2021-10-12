interface ICat {
    name: string
    gender: string
    age: number
    weight: number
    color: string
    meow(): void
    eat(food:string): void

}

class Cat implements ICat {
    name: string
    gender: string
    age: number
    weight: number
    color: string

    constructor(name: string, gender: string, age: number, weight: number, color: string) {
        this.name = name
        this.gender = gender
        this.age = age
        this.weight = weight
        this.color = color
    }
    meow() {
        console.log('meow')
    }
    eat(food: string) {
        console.log(`eat ${food}`)
    }
}
const sam = new Cat('Sam','male',2,15,'black')
sam.eat('meat')