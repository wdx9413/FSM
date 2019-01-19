module.exports = (function () {
    function StateMachine(config) {
        this.state = config.initial || "unknow";
        this.events = config.events || [];
        this.callbacks = config.callbacks || {};
        this.error = config.error || function (name, from, to, args, error, msg, r) { throw e || msg; };
        this._hashEvent = [];
        this._init();
    }

    var _proto = StateMachine.prototype;
    _proto._init = function () {
        this._initHashEvent();
        this._buildEvent();
    };
    _proto._initHashEvent = function () {
        for (var i = 0; i < this.events.length - 1; i++) {
            var e = this.events[i];
            if (!this._hashEvent[e.name]) {
                this._hashEvent[e.name] = [];
            }
            this._hashEvent[e.name].push(
                {
                    from: e.from,
                    to: e.to,
                    name: e.name
                }
            );
        }
    }
    _proto._buildEvent = function () {
        
    }
    

    return {
        create: function (config) {
            return new StateMachine(config);
        }
    };

})()
