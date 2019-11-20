import winston from 'winston';
import LogFactory from './TransporterFactory'
import ILogConfig from './ILogConfig';
export default class Logger {


    public static _winston: any;

 
    public static getInstance(logConfig:ILogConfig){
        if(!this._winston){
            const transports =LogFactory.getTransporters(logConfig);
            this._winston = winston.createLogger({
                level:'info',
                format: winston.format.simple(),
                transports:transports
            });
        }
        return this._winston;
    }


}
