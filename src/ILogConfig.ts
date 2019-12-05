import TransportStream = require("winston-transport");

export default interface ILogConfig {
    default :string;
    environment:string;
    channels :object;
}