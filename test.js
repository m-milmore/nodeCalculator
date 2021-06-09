const rs = require("readline-sync");

function getOperation() {
    let operation = rs.question("What operation would you like to perform? ", {
        limit: [/^-?\d*\s*[-|\/|\*|\+]\s*-?\d*$/g],
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

    arrayOp = operation.split();
    arrayOp.forEach(ele => {

    });

    if (operation.length === 1) {
        this.operator = operation;
        this.operand1 = getNumber("first");
        this.operand2 = getNumber("second");
    } else {
        if ("/*-+".includes(operation.charAt(0))) {
            this.operator = operation.charAt(0);
            this.operand1 = getNumber("first");
            this.operand2 = parseInt(operation.substr(1));
        } else if ("/*-+".includes(operation.charAt(operation.length - 1))) {
            this.operator = operation.charAt(operation.length - 1);
            this.operand1 = parseInt(operation.substr(0, operation.length - 1));
            this.operand2 = getNumber("second");
        } else {
            const position = operation.search(/[-|\/|\*|\+]/g);
            this.operator = operation[position];
            this.operand1 = parseInt(operation.substr(0, position));
            this.operand2 = parseInt(operation.substr(position + 1));
        }
    }
}

const operation = getOperation();
const operationObj = new OperationObj(operation);