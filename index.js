var fs = require('fs');
var colors = require('colors');

function readAndWriteContent() {
    fs.readdir('./', 'utf-8', function(err, data) {       //sprawdza zawartość katalogu
        fs.writeFile('./text.txt', data, function (err){        //writeFile() zastępuje  lub tworzy nowy plik jeśli podany nie istnieje
            if(err) throw err;
            console.log('The file has been save.'.rainbow);
        });
    });
}

readAndWriteContent();






