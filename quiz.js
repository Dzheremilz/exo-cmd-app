const readlineSync = require('readline-sync')
const quizz = [['Le C++ est un:', 'langage', 'compilateur', true, false],
['TypeScript est une évolution de Javascript:', 'Vrai', 'Faux', true, false],
['Lire les cours avant de faire les exercices est inutile:', 'Vrai', 'Faux', false, true],
['react.js a été developpé par Google:', 'Vrai', 'Faux', false, true],
['Ethereum est une blockchain publique:', 'Vrai', 'Faux', true, false]
]

let answer = 0

console.log('Répondez aux questions avec 1 ou 2. Arrêtez le programme avec 0\n')
for (let i = 0; i < quizz.length; i++) {
  let question = readlineSync.keyIn(`Question ${i + 1}: ${quizz[i][0]}\n1: ${quizz[i][1]}\n2: ${quizz[i][2]}\n`, { hideEchoBack: true, mask: '', limit: '$<0-2>' })
  question = Number(question)
  if (question === 0) {
    console.log('0: Arret du programme')
    process.exit(0)
  }
  if (quizz[i][question + 2]) {
    answer += 1
  }
}

console.log(`Vous avez ${answer} ${answer > 1 ? 'bonnes réponses' : 'bonne réponse'}`)