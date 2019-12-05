import ILogConfig from './ILogConfig';
import TransportStream = require("winston-transport");
export default class TransporterFactory {
    static getTransporters(config: ILogConfig): TransportStream[];
}
