const fs = require('fs');

function sortJsonFileByName(file_path) {
  fs.readFile(file_path, 'utf-8', (err, data) => {
    if (err) throw err;

    const json = JSON.parse(data);

    const sortedJson = json.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });

    fs.writeFile(file_path, JSON.stringify(sortedJson, null, 2), (err) => {
      if (err) throw err;

      console.log(`Sorted data has been written to ${file_path}.`);
    });
  });
}

sortJsonFileByName('new.json');