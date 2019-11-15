import ILogConfig from './ILogConfig';

export default class LogManager {

    private _transport:string;
    private _transportConf:object;

    constructor(config:ILogConfig){
        this._transport = this._getTransport(config);    
        this._transportConf = this._getTransportConf(config);
       
    }

    _getTransport(config:ILogConfig){
        return config['transport'] || 'stack'
    }

    _getTransportConf(config:ILogConfig){
        return config.channels[this._transport]
    }




}