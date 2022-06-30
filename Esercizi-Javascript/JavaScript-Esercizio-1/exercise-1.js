let personName = 'Paul';
function canPlay(surname) {
  if (true) {

    
    personName += `${surname} plays football`; // Argh! personName is not defined
  }
}
canPlay(` Johnson`);
console.log(`${personName} `);