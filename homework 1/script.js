function parseAmount(str) {
    if (typeof(str) === "string") {
        console.log(parseFloat(str.replace(',', '.')) * 100)
    } else {
        console.log("Wrong argument type" )
    }
}

console.log("Task 1");
parseAmount('10');
parseAmount('10,5');
parseAmount('10,55');
