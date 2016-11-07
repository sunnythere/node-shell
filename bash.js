var commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
  	commands['pwd']();
  } else if (cmd === 'date') {
  	var date = new Date();
  	process.stdout.write(date.toUTCString());
  	process.stdout.write("prompt > ");
  } else if (cmd === 'ls') {
  	commands['ls']();
  } else {
  	var inputs = cmd.split(' ');
  	var first = inputs.shift();
  	if (first === 'echo') {
  		if (inputs[0] === '$PATH') process.stdout.write(process.env.PATH);
  		else process.stdout.write(inputs.join(' '));
  		process.stdout.write("\nprompt > ");
  	} else if (first === 'cat') {
  		commands['cat'](inputs);
  	} else if (first === 'head') {
  		commands['head'](inputs[0]);
  	} else if (first === 'tail') {
  		commands['tail'](inputs[0]);
  	}

  }


});
