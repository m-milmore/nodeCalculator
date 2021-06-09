const rs = require("readline-sync");

var operation = "";
var operator = "";
var operand1 = 0;
var operand2 = 0;
var result = "";

function getOperation() {
    let operation = rs.question("What operation would you like to perform? ", {
        limit: [/^\d*\s*[-|\/|\*|\+]\s*\d*$/g],
        limitMessage: "That is not a valid operation. $<( [)limit(])>",
    });
    return operation.replace(/ /g, "");
}

function divisionByZero(operand = "first", operator = "+", value = 1) {
    return operand === "second" && operator === "/" && value === 0;
}

function getNumber(operand = "first", operator = "+") {
    let acceptZero = false;
    let number = 0;
    while (!acceptZero) {
        number = rs.questionInt(`Please enter the ${operand} number `, {
            limitMessage: "This is not a number",
        });
        if (divisionByZero(operand, operator, number)) {
            console.log("Division by 0 not allowed.");
        } else {
            acceptZero = true;
        }
    }
    return number;
}

function calculateOperation(operator = "", operand1 = 0, operand2 = 0) {
    let result = 0;
    let remainder = 0;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            result = Math.floor(operand1 / operand2);
            remainder = operand1 % operand2;
            break;
        default:
            console.error(`switch statement as an invalid expression: ${operator}`);
    }

    if (operator === "/" && operand2 !== 0) {
        return (`The result is: ${result} remains ${remainder}`);
    } else {
        return (`The result is: ${result}`);
    }
}

function getFromString(str = "", operand = "first", operator = "+") {
    let number = parseInt(str);
    if (divisionByZero(operand, operator, number)) {
        console.log("Division by 0 not allowed.");
        number = getNumber("second", operator);
    }
    return number;
}

operation = getOperation();
if (operation.length === 1) {
    operator = operation;
    operand1 = getNumber();
    operand2 = getNumber("second", operator);
} else {
    if ("/*-+".includes(operation.charAt(0))) {
        operator = operation.charAt(0);
        operand1 = getNumber();
        operand2 = getFromString(operation.substr(1), "second", operator);
    } else if ("/*-+".includes(operation.charAt(operation.length - 1))) {
        operator = operation.charAt(operation.length - 1);
        operand1 = getFromString(operation.substr(0, operation.length - 1));
        operand2 = getNumber("second", operator);
    } else {
        const position = operation.search(/[-|\/|\*|\+]/g);
        operator = operation[position];
        operand1 = parseInt(operation.substr(0, position));
        operand2 = parseInt(operation.substr(position + 1));
    }
}
result = calculateOperation(operator, operand1, operand2);
console.log(result);