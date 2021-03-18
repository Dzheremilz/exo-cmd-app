if (process.argv.length !== 3) {
  console.log('usage: node sayMyName.js \'your name\'')
  process.exit(1)
}

const name = process.argv[2]
console.log(`My name is ${name}`)