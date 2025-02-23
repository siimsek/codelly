var exec = require('child_process').exec;
var fs = require('fs');
var cuid = require('cuid');
var colors = require('colors');
var cppModule = require('./cppModule.js');
var javaModule = require('./javaModule.js');
var pyModule = require('./pyModule.js');
var csModule = require('./csModule.js');
var vbModule = require('./vbModule.js');
var goModule = require('./goModule.js');
var swiftModule = require('./swiftModule.js');
var rustModule = require('./rustModule.js');
var phpModule = require('./phpModule.js');
var rubyModule = require('./rubyModule.js');
var kotlinModule = require('./kotlinModule.js');
var tsModule = require('./tsModule.js');
var scalaModule = require('./scalaModule.js');
var rModule = require('./rModule.js');
var juliaModule = require('./juliaModule.js');
var perlModule = require('./perlModule.js');
var luaModule = require('./luaModule.js');
var haskellModule = require('./haskellModule.js');

exports.stats = false;

exports.init = function (option) {
	if (option) {
		if (option.stats === true) {
			console.log('Statistics for codelly is on'.green);
			exports.stats = true;
		}
	}
	fs.exists('./temp', function (exists) {
		if (!exists) {
			if (exports.stats) {
				console.log('INFO: '.cyan + 'temp directory created for storing temporary files.'.cyan)
			}
			fs.mkdirSync('./temp');
		}
	});
}

exports.compileCPP = function (envData, code, fn) {
	if (exports.stats)
		cppModule.stats = true;
	cppModule.compileCPP(envData, code, fn);
}

exports.compileCPPWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		cppModule.stats = true;
	cppModule.compileCPPWithInput(envData, code, input, fn);
}


exports.compileJava = function (envData, code, fn) {
	if (exports.stats)
		javaModule.stats = true;
	javaModule.compileJava(envData, code, fn);
}

exports.compileJavaWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		javaModule.stats = true;
	javaModule.compileJavaWithInput(envData, code, input, fn);
}

exports.compilePython = function (envData, code, fn) {
	if (exports.stats)
		pyModule.stats = true;
	pyModule.compilePython(envData, code, fn);
}

exports.compilePythonWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		pyModule.stats = true;
	pyModule.compilePythonWithInput(envData, code, input, fn);

}

exports.compileCS = function (envData, code, fn) {
	if (exports.stats)
		csModule.stats = true;
	csModule.compileCS(envData, code, fn);
}

exports.compileCSWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		csModule.stats = true;
	csModule.compileCSWithInput(envData, code, input, fn);
}

exports.compileVB = function (envData, code, fn) {
	if (exports.stats)
		vbModule.stats = true;
	vbModule.compileVB(envData, code, fn);
}

exports.compileVBWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		vbModule.stats = true;
	vbModule.compileVBWithInput(envData, code, input, fn);
}

exports.compileGO = function (envData, code, fn) {
	if (exports.stats)
		goModule.stats = true;
	goModule.compileGO(envData, code, fn);
}

exports.compileGOWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		goModule.stats = true;
	goModule.compileGOWithInput(envData, code, input, fn);
}

exports.compileSwift = function (envData, code, fn) {
	if (exports.stats)
		swiftModule.stats = true;
	swiftModule.compileSwift(envData, code, fn);
}

exports.compileSwiftWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		swiftModule.stats = true;
	swiftModule.compileSwiftWithInput(envData, code, input, fn);
}

exports.compileRust = function (envData, code, fn) {
	if (exports.stats)
		rustModule.stats = true;
	rustModule.compileRust(envData, code, fn);
}

exports.compileRustWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		rustModule.stats = true;
	rustModule.compileRustWithInput(envData, code, input, fn);
}

exports.compilePHP = function (envData, code, fn) {
	if (exports.stats)
		phpModule.stats = true;
	phpModule.compilePHP(envData, code, fn);
}

exports.compilePHPWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		phpModule.stats = true;
	phpModule.compilePHPWithInput(envData, code, input, fn);
}

exports.compileRuby = function (envData, code, fn) {
	if (exports.stats)
		rubyModule.stats = true;
	rubyModule.compileRuby(envData, code, fn);
}

exports.compileRubyWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		rubyModule.stats = true;
	rubyModule.compileRubyWithInput(envData, code, input, fn);
}

exports.compileKotlin = function (envData, code, fn) {
	if (exports.stats)
		kotlinModule.stats = true;
	kotlinModule.compileKotlin(envData, code, fn);
}

exports.compileKotlinWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		kotlinModule.stats = true;
	kotlinModule.compileKotlinWithInput(envData, code, input, fn);
}

exports.compileTS = function (envData, code, fn) {
	if (exports.stats)
		tsModule.stats = true;
	tsModule.compileTS(envData, code, fn);
}

exports.compileTSWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		tsModule.stats = true;
	tsModule.compileTSWithInput(envData, code, input, fn);
}

exports.compileScala = function (envData, code, fn) {
	if (exports.stats)
		scalaModule.stats = true;
	scalaModule.compileScala(envData, code, fn);
}

exports.compileScalaWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		scalaModule.stats = true;
	scalaModule.compileScalaWithInput(envData, code, input, fn);
}

exports.compileR = function (envData, code, fn) {
	if (exports.stats)
		rModule.stats = true;
	rModule.compileR(envData, code, fn);
}

exports.compileRWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		rModule.stats = true;
	rModule.compileRWithInput(envData, code, input, fn);
}

exports.compileJulia = function (envData, code, fn) {
	if (exports.stats)
		juliaModule.stats = true;
	juliaModule.compileJulia(envData, code, fn);
}

exports.compileJuliaWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		juliaModule.stats = true;
	juliaModule.compileJuliaWithInput(envData, code, input, fn);
}

exports.compilePerl = function (envData, code, fn) {
	if (exports.stats)
		perlModule.stats = true;
	perlModule.compilePerl(envData, code, fn);
}

exports.compilePerlWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		perlModule.stats = true;
	perlModule.compilePerlWithInput(envData, code, input, fn);
}

exports.compileLua = function (envData, code, fn) {
	if (exports.stats)
		luaModule.stats = true;
	luaModule.compileLua(envData, code, fn);
}

exports.compileLuaWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		luaModule.stats = true;
	luaModule.compileLuaWithInput(envData, code, input, fn);
}

exports.compileHaskell = function (envData, code, fn) {
	if (exports.stats)
		haskellModule.stats = true;
	haskellModule.compileHaskell(envData, code, fn);
}

exports.compileHaskellWithInput = function (envData, code, input, fn) {
	if (exports.stats)
		haskellModule.stats = true;
	haskellModule.compileHaskellWithInput(envData, code, input, fn);
}

exports.flushSync = function () {
	path = '	./temp/';
	fs.readdir(path, function (err, files) {
		if (!err) {
			for (var i = 0; i < files.length; i++) {

				fs.unlinkSync(path + files[i]);

			}
		}
	});
}

exports.flush = function (fn) {
	path = './temp/';
	fs.readdir(path, function (err, files) {
		if (!err) {
			for (var i = 0; i < files.length; i++) {

				fs.unlinkSync(path + files[i]);

			}
		}
	});
	fn();
}

exports.fullStat = function (fn) {
	var uptime = process.uptime();


	var cppCount = 0;
	var javaCount = 0;
	var pyCount = 0;
	var rustCount = 0;
	var phpCount = 0;
	var swiftCount = 0;
	var goCount = 0;
	var cCount = 0;
	var csCount = 0;
	var total = 0;

	var files = fs.readdirSync('temp');
	for (var file in files) {
		var stat = fs.statSync('temp/' + files[file]);
		if (stat.isFile()) {
			if (files[file].indexOf('.cpp') !== -1) {
				cppCount++;
			}
			if (files[file].indexOf('.py') !== -1) {
				pyCount++;
			}
			if (files[file].indexOf('.rc') !== -1) {
				rustCount++;
			}
			if (files[file].indexOf('.php') !== -1) {
				phpCount++;
			}
			if (files[file].indexOf('.swift') !== -1) {
				swiftCount++;
			}
			if (files[file].indexOf('.go') !== -1) {
				goCount++;
			}
			if (files[file].indexOf('.c') !== -1) {
				cCount++;
			}
			if (files[file].indexOf('.cs') !== -1) {
				csCount++;
			}
		}
		else {
			javaCount++;
		}
	}

	var jsonData = {
		serverUptime: uptime,
		fileDetails: {
			cpp: cppCount,
			java: javaCount,
			python: pyCount,
			cs: csCount,
			c: cCount,
			go: goCount,
			swift: swiftCount,
			php: phpCount,
			rust: rustCount
		}
	}
	if (exports.stats) {

		var str = "Server Statistics".yellow + "\n"
			+ "Server Uptime : " + uptime + "\n"
			+ "Files on storage :" + "\n"
			+ "CPP files : " + cppCount + "\n"
			+ "Java files : " + javaCount + "\n"
			+ "C files : " + cCount + "\n"
			+ "C# files : " + csCount + "\n"
			+ "Swift files : " + swiftCount + "\n"
			+ "Rust files : " + rustCount + "\n"
			+ "GO files : " + goCount + "\n"
			+ "PHP files : " + phpCount + "\n"
			+ "Python files : " + pyCount;
		console.log(str);
	}
	fn(jsonData);

}
