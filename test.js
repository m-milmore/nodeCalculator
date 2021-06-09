const rs = require("readline-sync");

const operation = rs.question("What operation would you like to perform? ", {
    limit: [/^\d*\s*[-|\/|\*|\+]\s*\d*$/g],
    limitMessage: "That is not a valid operation. $<( [)limit(])>",
});



console.log(operation);