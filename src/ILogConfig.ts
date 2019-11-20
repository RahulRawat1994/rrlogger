import TransportStream = require("winston-transport");

export default interface ILogConfig {
    default :string;
    channels :{
        stack:{
            channels:Array<string>
        },
        single: object,
        daily: {
            filename:string,

        },
        console:object,
        mail:object,
        db:object,
        custom:{
            transporter:TransportStream
        }
    };
}