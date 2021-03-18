const readlineSync = require('readline-sync')
const chalk = require('chalk')

const SecretNumber = readlineSync.questionInt('Entrez un nombre secret: ', { hideEchoBack: true, mask: '\u003F' })
console.log(`Devinerez-vous le nombre ${chalk.yellowBright('Secret')}`)

let guess = false

while (!guess) {
  const GuessNumber = readlineSync.questionInt('Entrez un nombre: ')
  if (GuessNumber === SecretNumber) {
    guess = true
  } else if (GuessNumber < SecretNumber) {
    console.log(chalk.redBright('Nombre trop petit'))
  } else {
    console.log(chalk.red('Nombre trop grand'))
  }
}

console.log(chalk.green('Bravo!'))