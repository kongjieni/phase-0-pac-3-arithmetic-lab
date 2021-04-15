function add(x, y) {
    return x + y;
} 
add(2, 3);

function subtract(x, y) {
    return x - y;
} 
subtract(2, 3);

function multiply(x, y) {
    return x * y;
}
multiply(2, 3);

function divide(x, y) {
    return x / y;
}
divide(2, 3);

function increment(n) {
    return n += 1;
}
increment(2);

function decrement(n) {
    return n -= 1;
}
decrement(2);

function makeInt(n) {
    return parseInt(n, 10);
}
makeInt("3");

function preserveDecimal(n) {
    return parseFloat(n);
}
preserveDecimal("13.3777777");