"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var TransporterFactory_1 = require("./TransporterFactory");
var LoggerResolver = /** @class */ (function () {
    function LoggerResolver() {
    }
    LoggerResolver.getInstance = function (logConfig) {
        if (!this._winston) {
            var transports = TransporterFactory_1.default.getTransporters(logConfig);
            this._winston = winston.createLogger({
                format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
                transports: transports
            });
        }
        return this._winston;
    };
    return LoggerResolver;
}());
exports.default = LoggerResolver;
