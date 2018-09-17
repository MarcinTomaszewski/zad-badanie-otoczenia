var fs = require('fs');
var colors = require('colors');

function readAndWriteContent() {
    fs.readdir('../NODE-badamy-otoczenie-praca-z-plikami', 'utf-8', function(err, data) {
        fs.writeFile('./text.txt', data, function (err){
            if(err) throw err;
            console.log('The file has been save.'.rainbow);
            //console.log(data);
        });
    });
}

readAndWriteContent();






