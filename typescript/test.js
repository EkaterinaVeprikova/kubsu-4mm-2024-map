var res = 0;
var a = 1;
var b = 2;
res = a + b;
console.log(res);
console.assert(res === 3);
var StateType;
(function (StateType) {
    StateType["IDLE"] = "IDLE";
    StateType["CONNECT"] = "CONNECT";
    StateType["TIMEOUT"] = "TIMEOUT";
})(StateType || (StateType = {}));
var currentState = StateType.CONNECT;
console.log(currentState);