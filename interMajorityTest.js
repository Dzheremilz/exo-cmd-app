const readlineSync = require('readline-sync')

if (process.argv.length !== 3) {
  console.log('usage: node majorityTest.js Majority')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

const MAJO_RITY = Number(process.argv[2])

const lastName = readlineSync.question('May I have your nom? ')
const firstName = readlineSync.question('May I have your Prénom? ')
let age = readlineSync.question('May I have your age? ')

if (isNaN(age)) {
  console.log(`Error: ${age} is not a number.`)
  process.exit(1)
}

age = Number(age)

if (age < MAJO_RITY) {
  console.log(`Désolé, ${firstName} ${lastName}, vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${firstName} ${lastName}, vous êtes majeur, vous pouvez voter`)
}