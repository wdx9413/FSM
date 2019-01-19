const State = require( "./State.js");
const Action = require("./Action.js");
let state = State.TO_COMPANY;
i = 0
while (i <= 10) {
    if (state == State.TO_COMPANY) {
        Action.toCompany();
        state = State.WORK;
    } else if (state == State.WORK) {
        Action.work();
        state = State.TO_HOME;
    } else if (state == State.TO_HOME) {
        Action.toHome();
        state = State.TO_COMPANY;
    }
    i++;
}

