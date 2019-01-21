module.exports = (function () {
    function _StateMachine(config) {
        this.state = config.initial || 'unknow';
        this.events = config.events || [];
        this.callbacks = config.callbacks || {};
        
        this._hashEvents = {};
        this._initHashEvent();

    }

    var _proto = _StateMachine.prototype;
    _proto._initHashEvent = function () {
        this.events.forEach((e) => {
            if (!this._hashEvents[e.name]) {
                this._hashEvents[e.name] = [];
            }
            this._hashEvents[e.name].push(
                {
                    name: e.name,
                    from: e.from,
                    to: e.to
                }
            );
        });
        //console.log("hash events : ", this._hashEvents);
    };

    _proto._buildCallbacks = function () {

    }

    _proto.handleEvent = function (event) {
        if (this.state == 'unknow' || this.state == event || !this.can(event)) {
            return false;
        }
        this._hashEvents[event].forEach((e) => {
            if (e.from == this.state) {
                if (this.callbacks["on_leave_" + e.from])
                    this.callbacks["on_leave_" + e.from]();
                if (this.callbacks["on_enter_" + e.to])
                    this.callbacks["on_enter_" + e.to]();
                this.state = e.to;
            }
        });
        
    }
    _proto.is = function (state) {
        return this.state == state;
    }
    _proto.can = function (event) {
        return event in this._hashEvents;
    }


    return {
        create: function (config) {
            return new _StateMachine(config);
        }
    };


})()
