// Notre fonction ShowStars
const showStars = (nbStars, char) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(char.repeat(i))
  }
}

// Notre fonction reverseShowStars
const reverseShowStars = (nbStars, char) => {
  for (let i = nbStars; i > 0; i--) {
    console.log(char.repeat(i))
  }
}

// verifie qu'il n'y a que 2 arguments ou que le 3eme est bien l'option '-r'
if (process.argv.length !== 4 && !(process.argv.length === 5 && process.argv[4] === '-r')) {
  console.log('usage: node pyramid.js number char optionel:\'-r\'')
  process.exit(1)
}

// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

if (process.argv[3].length !== 1) {
  console.log(`Error: ${process.argv[3]} only accept 1 character`)
  process.exit(1)
}

const nbStars = Number(process.argv[2])
const char = process.argv[3]

if (process.argv[4] === '-r') {
  reverseShowStars(nbStars, char)
} else {
  showStars(nbStars, char)
}