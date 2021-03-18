const readlineSync = require('readline-sync')

if (process.argv.length !== 2) {
  console.log('usage: node majorityTest.js')
  process.exit(1)
}

const lastName = readlineSync.question('May I have your nom? ')
const firstName = readlineSync.question('May I have your Prénom? ')
let age = readlineSync.question('May I have your age? ')

if (isNaN(age)) {
  console.log(`Error: ${age} is not a number.`)
  process.exit(1)
}

age = Number(age)

if (age < 18) {
  console.log(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter`)
}