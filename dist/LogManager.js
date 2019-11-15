"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogManager = /** @class */ (function () {
    function LogManager(config) {
        this._transport = this._getTransport(config);
        this._transportConf = this._getTransportConf(config);
        var logger = new Logger();
    }
    LogManager.prototype._getTransport = function (config) {
        return config['transport'] || 'stack';
    };
    LogManager.prototype._getTransportConf = function (config) {
        return config[this._transport];
    };
    return LogManager;
}());
exports.default = LogManager;
