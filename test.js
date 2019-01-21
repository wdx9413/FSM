var FSM = require("./FSM.js");
var s = FSM.create(
    {
        initial: "green",
        events: [
            {name: "warn", from: 'green', to: 'red'},
            {name: "clear", from: 'red', to: 'white'}
        ],
        callbacks: {
            on_leave_green: function () {
                console.log("leave green");
            },
            on_enter_red: function () {
                console.log("enter red");
            }
        }
    }
);
s.handleEvent("warn");
