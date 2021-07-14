// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "string") {
        return ("Hello, " + input + "!");
    } else if (input === (true || false)) {
        return "Hello, World!";
    } else {
        return "Hello, World!";
    }
}

