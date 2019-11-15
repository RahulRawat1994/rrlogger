import winston from 'winston';

export default class Logger {

    readonly _winston:any;

    constructor(level:string, format:any) {
        this._winston = winston.createLogger({
            level: level || 'info',
            format: winston.format.json()
        });
    }

    public addTransport(transporter:any){
        this._winston.add(transporter);
    }

    public removeTransport(transporter:any){
        this._winston.remove(transporter);
    }

    public log(level:string, message:string) {
        this._winston.log(level, message);
    }

    public error(message:string){
        this.log('error', message);
    }

    public warn(message:string){
        this.log('warn',message);
    }

    public info(message:string){
        this.log('info',message);
    }

    public http(message:string){
        this.log('http',message);
    }

    public verbose(message:string){
        this.log('verbose',message);
    }

    public debug(message:string){
        this.log('debug',message);
    }

    public silly(message:string){
        this.log('silly',message);
    }

}

