let add=(a,b) => console.log("addition is:",a+b);
let subtract=(a,b) => console.log("sub is:",a-b);

let doOperation=(operationParam,a,b)=>operationParam(a,b);

doOperation(add,10,20);
doOperation(subtract,20,20);