"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var DailyRotateFile = require("winston-daily-rotate-file");
require("winston-mail");
var MongoDB = require("winston-mongodb").MongoDB;
var TransporterFactory = /** @class */ (function () {
    function TransporterFactory() {
    }
    TransporterFactory.getTransporters = function (config) {
        var _this = this;
        var configKey = config.default;
        var options = config.channels[config.default];
        var runInEnviorment = options.enviorments;
        if (runInEnviorment && !runInEnviorment.includes(config.enviorment)) {
            return [];
        }
        delete options.enviorments;
        switch (config.default) {
            case 'single':
                return [new winston.transports.File(__assign({}, options))];
            case 'daily':
                return [new DailyRotateFile(__assign({}, options))];
            case 'console':
                return [new winston.transports.Console(__assign({}, options))];
            case 'mail':
                return [new winston.transports.Mail(__assign({}, options))];
            case 'db':
                return [new MongoDB(__assign({}, options))];
            case 'stack':
                var transports = options.channels;
                var newConfig_1 = config;
                var transportArr = transports.map(function (transport) {
                    newConfig_1.default = transport;
                    var transports = _this.getTransporters(newConfig_1);
                    return transports[0];
                });
                return transportArr;
            case 'custom':
                return [options.transporter];
            default:
                // try {
                //     if(!options || !options.package){
                throw new Error("No class found with \"" + config.default + "\" name");
                //     }
                //     require('winston-mongodb').MongoDB;
                //     //console.log(winstonExt)
                //     return [new winston.transports.MongoDB({...options})]
                // } catch (error) {
                //     throw new Error(`Trasport Error: "${error.message}"`);
                // }
                break;
        }
    };
    return TransporterFactory;
}());
exports.default = TransporterFactory;
