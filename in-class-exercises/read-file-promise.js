var fs = require("fs");
if (! fs) process.exit(1);

function myReadFile(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) { 
                reject( { file: filepath, msg: err } );
            } else {
                resolve(data);
            }
        });
    });
}

myReadFile("example.txt")
.then((result) => console.log(result.length))
.catch((error) => console.log(error));
