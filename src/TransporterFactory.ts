import * as winston from 'winston';
import ILogConfig from './ILogConfig';

import TransportStream = require("winston-transport");
import DailyRotateFile = require("winston-daily-rotate-file");
require("winston-mail");
import { MongoDBTransportInstance } from "winston-mongodb";
const { MongoDB }: { MongoDB: MongoDBTransportInstance } = require("winston-mongodb");



export default class TransporterFactory {

    static getTransporters(config:ILogConfig):TransportStream[]{
        
        const configKey = config.default;
        const options:any = config.channels[config.default];
        const runInEnviorment = options.enviorments;
        
        if(runInEnviorment && !runInEnviorment.includes(config.enviorment)){
            return [];
        }
        delete options.enviorments;

        switch(config.default){
            case 'single':
                return [new winston.transports.File({...options})]
           
            case 'daily':
                return  [new DailyRotateFile({...options})]
           
            case 'console':
                return [new winston.transports.Console({...options})]
           
            case 'mail':
             return [new winston.transports['Mail']({...options})];
           
            case 'db':
                return [ new MongoDB({...options})]
           
            case 'stack':
                const transports = options.channels;
                const newConfig = config;
                let transportArr =transports.map((transport: any) =>{
                    newConfig.default = transport;
                    const transports = this.getTransporters(newConfig);
                    return transports[0];
                })
                  
                return transportArr;
             
           
            case 'custom':
                return [options.transporter];
           
            default:
                // try {
                //     if(!options || !options.package){
                        throw new Error(`No class found with "${config.default}" name`);
                //     }
                //     require('winston-mongodb').MongoDB;
                //     //console.log(winstonExt)
                //     return [new winston.transports.MongoDB({...options})]
                // } catch (error) {
                //     throw new Error(`Trasport Error: "${error.message}"`);
                // }
            break;

                
           
        }
    }


    

}