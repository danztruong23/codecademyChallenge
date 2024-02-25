// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, dnaBases) {
  return {
    number,
    dnaBases,
    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dnaBases.length);
      let mutatedBase = returnRandBase();

      //console.log(randomIndex);
      //console.log(this.dnaBases[randomIndex])
      //console.log(mutatedBase)
      while (this.dnaBases[randomIndex] === mutatedBase) {
        mutatedBase = returnRandBase();
      }
      //console.log(mutatedBase)
      this.dnaBases[randomIndex] = mutatedBase;
      return this.dnaBases;
    },
    compareDNA(otherPAequor) {
        let count = 0;
        for (let i = 0; i < this.dnaBases.length; i++) {
          if (this.dnaBases[i] === otherPAequor.dnaBases[i]) {
            count += 1;
          }
        }
        commonPercentage = count / this.dnaBases.length * 100;
        //console.log(commonPercentage);
        console.log(`specimen #${this.number} and specimen #${otherPAequor.number} have ${commonPercentage.toFixed(2)}% DNA in common`)
    },
    willLikelySurvive() {
        let countCOrG = 0;
        this.dnaBases.forEach((dnaBase) => {
            if ((dnaBase === 'C') || (dnaBase === 'G')) {
                countCOrG += 1
            }
        })
        return ((countCOrG / this.dnaBases.length * 100) >= 60) ? true : false;
    },
    complementStrand() {
        return this.dnaBases.map((x) => {
            if (x === 'A') {
                return 'T';
            } else if (x === 'T') {
                return 'A';
            } else if (x === 'C') {
                return 'G';
            } else if (x === 'G') {
                return 'C';
            }
        })
    }
  };
}

let pAequor1 = pAequorFactory(1, mockUpStrand());
console.log(pAequor1.dnaBases);
console.log(pAequor1.mutate());

let pAequor2 = pAequorFactory(2, mockUpStrand());
console.log(pAequor2.dnaBases);

pAequor1.compareDNA(pAequor2);

console.log(pAequor1.willLikelySurvive());
console.log(pAequor2.willLikelySurvive());

console.log(pAequor1.complementStrand());

// Create 30 instances of pAequor that can survive in their natural environment
function create30Survivals() {
    let survivals = [];
    let count = 0;
    let i = 1;
    while (count < 30) {
        let pAequor = pAequorFactory(i, mockUpStrand());
        i += 1;
        if (pAequor.willLikelySurvive() === true) {
            survivals.push(pAequor);
            count += 1
        }
    }
    return survivals;
}

console.log(create30Survivals())

let survivalsArr = create30Survivals();
survivalsArr.forEach(pAequor => console.log(pAequor.number + ' : ' + pAequor.dnaBases));
