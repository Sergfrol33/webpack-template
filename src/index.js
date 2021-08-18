import './style/index.scss'
const elven = {
    leather: 2,
    iron: 1,
    human: true
}
const human = {
    ...elven,
    leather: false
}
console.log(elven)
console.log(human)