//Creating a module to log messages
//(function (exports, require,  module, __filename, __dirname){ --> Module Wrapper Function

console.log(__filename);
console.log(__dirname);

const EventEmitter =  require('events'); //it's a class (first letter is upper case)
/*const emitter = new EventEmitter(); //instance == object; || Using a no need to have an object when 
                                                            using a class that inherits from event emitter
*/
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{ //inherits from Event Emitter class
     log(message){ //inside the class is a method
        //Send an HTTP request
        console.log(message);
        //Raise an event
        this.emit('messagedLogged', {id: 1, url: 'http://'}); //use to raise an event. Making a noise, produce - signalling
    }   
}


//Makes available outside the module -> Exports like an object
//module.exports.log = log;

//You can export a single function or an object.
/* In this case, we have a single function, so we dont 
necessarily need an object cuz have a single method*/

//Exports a function
module.exports = Logger; //export the class
//module.exports.log = log;
//exports.log = log;

//exports = log; //u can not write, cus is a reference to module.exports. U can not change the reference

//})

