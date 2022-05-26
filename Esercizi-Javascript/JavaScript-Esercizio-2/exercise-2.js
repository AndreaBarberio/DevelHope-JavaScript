function canPlay() {
  const personName = 'Paul'; // Ho modificato la variabile in una costante per soddisfare la richiesta

  if (true) {
    personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
  }

  personName += ' plays football';

  console.log(personName);
}

canPlay();