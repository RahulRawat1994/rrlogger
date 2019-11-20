import ILogConfig from './ILogConfig';

import TransportStream = require("winston-transport");
import winston from 'winston';
import DailyRotateFile = require("winston-daily-rotate-file");

export default class TransporterFactory {

    static getTransporters(config:ILogConfig):TransportStream[]{
        
        switch(config.default){
            case 'single':
                return [new winston.transports.File({...config.channels[config.default]})]
            break;
            case 'daily':
                return  [new DailyRotateFile({...config.channels[config.default]})]
            break;
            case 'console':
                return [new winston.transports.Console({...config.channels[config.default]})]
            break;
            case 'mail':
             //   return new Mail(config);
             throw new Error(`No class found with "${config.default}" name`);
            break;
            case 'db':
               // return new DB(config);
               throw new Error(`No class found with "${config.default}" name`);
            break;
            case 'stack':
                const transports = config.channels[config.default].channels;
                const newConfig = config;
                const transportArr =transports.map(transport =>{
                    newConfig.default = transport;
                    const transports = this.getTransporters(newConfig);
                    return transports[0];
                })
                return transportArr;
             
            break;
            case 'custom':
                
                throw new Error(`No class found with "${config.default}" name`);
            break;
            default:
                throw new Error(`No class found with "${config.default}" name`);
            break;
        }
    }


    

}