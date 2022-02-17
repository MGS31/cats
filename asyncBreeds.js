const fs = require('fs');

const breedDetailsFromFile = function(breed, fn) {
  console.log('breedDetailsFromFile: calling readFile... ');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) fn(data);
  });
};

const printCatBreed = breed => {console.log('Return Value: ', breed)};

breedDetailsFromFile('Bombay' ,printCatBreed);