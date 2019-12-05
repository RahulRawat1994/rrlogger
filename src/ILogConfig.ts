import TransportStream = require("winston-transport");

export default interface ILogConfig {
    default :string;
    enviorment:string;
    channels :object;
}