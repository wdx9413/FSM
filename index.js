const FSM = require("./FSM.js");
var fsm = FSM.create({
    initial: "green",
    events: [
        {name: "warn", from: "black", to: "red"},
        {name: "clear", from: "red", to: "black"},
    ],
    callbacks: {
        
    }

});
