const readlineSync = require('readline-sync')
const quizz = [['Question 1: Le C++ est un:', '1: langage', '2: compilateur', true, false],
['Question 2: TypeScript est une évolution de Javascript:', '1: Vrai', '2: Faux', true, false],
['Question 3: Lire les cours avant de faire les exercices est inutile:', '1: Vrai', '2: Faux', false, true],
['Question 4: react.js a été developpé par Google:', '1: Vrai', '2: Faux', false, true],
['Question 5: Ethereum est une blockchain publique:', '1: Vrai', '2: Faux', true, false]
]

let answer = 0

console.log('Répondez aux questions avec 1 ou 2. Arrêtez le programme avec 0\n')
for (let i = 0; i < quizz.length; i++) {
  let question = readlineSync.keyIn(`${quizz[i][0]}\n${quizz[i][1]}\n${quizz[i][2]}\n`, { hideEchoBack: true, mask: '', limit: '$<0-2>' })
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