const rs = require("readline-sync");

function getOperation() {
    let operation = rs.question("What operation would you like to perform? ", {
        limit: [/^(-|\/|\*|\+){1}$|^-?\d+\s*[-|\/|\*|\+]\s*-?\d+$/g],
        limitMessage: "That is not a valid operation.",
    });
    return operation.replace(/ /g, "");
}

function getNumber(operand = "") {
    number = rs.questionInt(`Please enter the ${operand} number `, {
        limitMessage: "This is not a number",
    });
    return number;
}

function OperationObj(operation) {
    let position = 0;
    if (operation.length === 1) {
        this.operator = operation;
        this.operand1 = getNumber("first");
        this.operand2 = getNumber("second");
    } else {
        if (operation.charAt(0) === "-") {
            const afterNegativeSign = operation.substr(1);
            position = afterNegativeSign.search(/[-|\/|\*|\+]/g) + 1;
        } else {
            position = operation.search(/[-|\/|\*|\+]/g);
        }
        this.operator = operation[position];
        this.operand1 = parseInt(operation.substr(0, position));
        this.operand2 = parseInt(operation.substr(position + 1));
    }
}

function calculateOperation({ operator, operand1, operand2 }) {
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
        return `The result is: ${result} remains ${remainder}`;
    } else {
        return `The result is: ${result}`;
    }
}

const operation = getOperation();
const operationObj = new OperationObj(operation);
console.log(calculateOperation(operationObj));