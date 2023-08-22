function createHelloWorld () {
    function innerFunction() {
        return "Hello World";
    }
    return innerFunction;
}
const helloFunction = createHelloWorld ();

console.log (helloFunction)