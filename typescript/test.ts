let res: number = 0;
const a: number = 1;
const b: number = 2;
res = a + b;
console.log(res);
console.assert(res === 3)

enum StateType {
    IDLE = "IDLE",
    CONNECT = "CONNECT",
    TIMEOUT = "TIMEOUT"
}

const currentState: StateType = StateType.CONNECT;
console.log(currentState);