var fs = require('fs');

module.exports = {
	pwd: function() {
		process.stdout.write(process.env.PWD);
		process.stdout.write("prompt > ");
	},
	ls: function() {
		fs.readdir('.', function(err, files) {
  						if (err) throw err;
  						files.forEach(function(file) {
    					process.stdout.write(file.toString() + "        ");
  						})
  		process.stdout.write("\nprompt > ");
		});
		//process.stdout.write(files.join("        "));
	},
	cat: function(input) {
		input.forEach(function(el) {
				fs.readFile(el, function(err, data) {
							if (err) throw err;
							process.stdout.write(data);
				});
		});
		//process.stdout.flush();
  		process.stdout.write("\nprompt > ");
	},
	head: function(input) {
		fs.readFile(input, function(err, data) {
							if (err) throw err;
							data = data.toString().split('\n').slice(0, 5).join('\n');
							process.stdout.write(data);
							process.stdout.write("\nprompt > ");
		});
	},
	tail: function(input) {
		fs.readFile(input, function(err, data) {
							if (err) throw err;
							data = data.toString().split('\n').slice(-5).join('\n');
							process.stdout.write(data);
							process.stdout.write("\nprompt > ");
		});

	}
}

