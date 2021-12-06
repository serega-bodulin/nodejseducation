const readline = require('readline');
const { stdin, stdout } = require('process');

const a = readline.createInterface({
  input: stdin,
  output: stdout
});

a.on('line', line => {
    console.log(line.toString().split('').reverse().join(''));
    a.close();
});