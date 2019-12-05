import ILogConfig from './ILogConfig';
export default class LoggerResolver {
    static _winston: any;
    static getInstance(logConfig: ILogConfig): any;
}
