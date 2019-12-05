import * as winston from 'winston';
import LogFactory from './TransporterFactory'
import ILogConfig from './ILogConfig';
export default class LoggerResolver {


    public static  _winston: any;

 
    public static getInstance(logConfig:ILogConfig){
        if(!this._winston){
            const transports =LogFactory.getTransporters(logConfig);
        
              
            this._winston = winston.createLogger({
                format: winston.format.combine(
                    winston.format.timestamp(),
                    winston.format.json()
                ),
                transports:transports 
            });
        }
        return this._winston;
    }


}
