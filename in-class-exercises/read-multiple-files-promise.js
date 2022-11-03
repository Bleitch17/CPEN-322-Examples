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

fileNames = ["example.txt", "example2.txt"];
promises = [];

var multipleReads = Promise.all([
    myReadFile("example.txt"),
    myReadFile("example2.txt")
]);
multipleReads.then(
    (results) => {
        var content = "";
        for (var r of results) {
            content += r;
        }
        fs.writeFile("read-multiple-files-promise-output1.txt", content, (err) => {
            if (err) console.log(err);
        });
    },
    (err) => {
        console.log(err);
    }
);

for (var fname of fileNames) {
    promises.push(myReadFile(fname));
}

for (var p of promises) {
    p.then(
        (result) => {
            fs.appendFile("read-multiple-files-promise-output2.txt", result, (err) => {
                if (err) console.log(err);
            })
        }
    );
}