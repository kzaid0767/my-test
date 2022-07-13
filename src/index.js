import {choice, remove} from './helpers'
import fruits from './foods'

//console.log(fruits)
const drawnFruit = choice(fruits)

console.log(`I'd like one ${drawnFruit}, please`)
console.log(`Here you go: ${drawnFruit}`)
console.log(`delicious! May I have another?`)

remove(fruits,drawnFruit)

console.log(`I'm sorry we are all out. We have ${fruits.length} left`)
console.log(`We have no more ${drawnFruit}`)