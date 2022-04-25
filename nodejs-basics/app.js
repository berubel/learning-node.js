//Node is a runtime enviroment for executing javascript codes
function sayHello(name){
    console.log("Hello " + name)
}
sayHello('Gabriele')

//Node Module System
// os|fs|events|http

//Globals can be acessed via window object

//global objects
//console.log() 
//setTimeout(); // call a functions after a delay
//clearTimeout(); 
//setInterval(); //repeatdly call a function after a given delay
//clearInterval() //stop function from being called repeatedly

var message = ''; //that's not global
//console.log(global.message) -> return undefined on console. The variables and functions are not global objects

//Modules
/* Modules are the js files, if u can use a element of another module u can must import them
    Every node application has at least one file or one module (main).
    These variables and functions defined in that file are scoped to that module, they are not
    avaliable outside the module
 */
console.log(module);

//Loading a module
//Use const is a best practice for modules, cuz modifications can give errors in executation time
const log = require('./logger'); // "./" indicates the current folder
console.log(log);

log('message');


//Path Module
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

//OS Module
const os = require('os');
var totalMem = os.totalmem()
var  freeMem = os.freemem()

//console.log("Total Memory: " + totalMem);
//console.log("Free Memory: " + freeMem);

//Template String
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMem}`); //feature that dont need concatenate
console.log(`Free Memory: ${freeMem}`);

//File System Module

//Sync read directory
const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files); //show the files on the path

//Async read directory
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log("Result", files);
});

//Event == A signal that something has happened

//const EventEmitter =  require('events'); //it's a class (first letter is upper case)
//const emitter = new EventEmitter(); //instance == object;

const Logger = require('./logger');
const logger = new Logger();

//Register a listener = that will be called when the message log event is raised
//emitter.on('messageLogged', function(arg){ // e, eventArg
logger.on('messageLogged', (arg) =>{ //"=> arrow, e6 feature"
    console.log('Listener called', arg);
});

logger.log('message')
//Raise logging (data: message)

//HTTP Module

const http = require('http');

const server = http.createServer(function(res, res){
    if(req.url =='/'){
        res.write("Hello world");
        res.end();
    }
});

if(req.url === '/api/courses'){ //returns a list of course of the database
    res.write(JSON.stringify([1,2,3]));
    res.end();
}

server.listen(3000);

console.log("Listening on port 3000...")