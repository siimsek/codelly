var exec = require('child_process').exec;
var fs = require('fs');
var cuid = require('cuid');
var colors = require('colors');

exports.stats = false;

exports.compileKotlin = function (envData, code, fn) {
    var filename = cuid.slug();
    path = './temp/';

    fs.writeFile(path + filename + '.kt', code, function (err) {
        if (exports.stats) {
            if (err)
                console.log('ERROR: '.red + err);
            else
                console.log('INFO: '.green + filename + '.kt created');
        }
        if (!err) {
            if (envData.OS === "windows") {
                var command = 'cd ' + path + ' & kotlinc ' + filename + '.kt -include-runtime -d ' + filename + '.jar & java -jar ' + filename + '.jar';
            }
            else if (envData.OS === "linux") {
                var command = 'cd ' + path + ' && kotlinc ' + filename + '.kt -include-runtime -d ' + filename + '.jar && java -jar ' + filename + '.jar';
            }

            exec(command, function (error, stdout, stderr) {
                if (error) {
                    if (error.toString().indexOf('Error: stdout maxBuffer exceeded.') != -1) {
                        var out = { error: 'Error: stdout maxBuffer exceeded. You might have initialized an infinite loop.' };
                        fn(out);
                    }
                    else {
                        if (exports.stats) {
                            console.log('INFO: '.green + filename + '.kt contained an error while executing');
                        }
                        var out = { error: stderr };
                        fn(out);
                    }
                }
                else {
                    if (exports.stats) {
                        console.log('INFO: '.green + filename + '.kt successfully executed !');
                    }
                    var out = { output: stdout };
                    fn(out);
                }
            });
        }
    });
}

exports.compileKotlinWithInput = function (envData, code, input, fn) {
    var filename = cuid.slug();
    path = './temp/';

    fs.writeFile(path + filename + '.kt', code, function (err) {
        if (exports.stats) {
            if (err)
                console.log('ERROR: '.red + err);
            else
                console.log('INFO: '.green + filename + '.kt created');
        }
        if (!err) {
            fs.writeFile(path + filename + 'input.txt', input, function (err) {
                if (exports.stats) {
                    if (err)
                        console.log('ERROR: '.red + err);
                    else
                        console.log('INFO: '.green + filename + 'input.txt created');
                }
                if (!err) {
                    if (envData.OS === "windows") {
                        var command = 'cd ' + path + ' & kotlinc ' + filename + '.kt -include-runtime -d ' + filename + '.jar & java -jar ' + filename + '.jar < ' + filename + 'input.txt';
                    }
                    else if (envData.OS === "linux") {
                        var command = 'cd ' + path + ' && kotlinc ' + filename + '.kt -include-runtime -d ' + filename + '.jar && java -jar ' + filename + '.jar < ' + filename + 'input.txt';
                    }
                    exec(command, function (error, stdout, stderr) {
                        if (error) {
                            if (error.toString().indexOf('Error: stdout maxBuffer exceeded.') != -1) {
                                var out = { error: 'Error: stdout maxBuffer exceeded. You might have initialized an infinite loop.' };
                                fn(out);
                            }
                            else {
                                if (exports.stats) {
                                    console.log('INFO: '.green + filename + '.kt contained an error while executing');
                                }
                                var out = { error: stderr };
                                fn(out);
                            }
                        }
                        else {
                            if (exports.stats) {
                                console.log('INFO: '.green + filename + '.kt successfully executed !');
                            }
                            var out = { output: stdout };
                            fn(out);
                        }
                    });
                }
            });
        }
    });
} 