import Logger from './src/Logger';
import path from 'path';

const logConfig = {
    /**
     * Default transport for logger
     */
    default: process.env.logChannel || 'stack',
    
    channels :{

        stack:{
            channels :  ['console', 'single', 'mail' ]
        },

        single: {
            filename: 'single.log',
            level:'info',
            dirname : path.join(__dirname,'/logs/')
        },
    
        daily: {
            level:'info',
            filename: 'application-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
            dirname : path.join(__dirname,'/logs')
        },
    
        console:{
            level:'error'
        },
    
        mail:{
            level:'error',
            to:'info@gmail.com',
            from: 'winston@gmail.com',
            host:'smtp.gmail.com',
            port:'587',
            tls:true,
            username:'rahulrawat@zapbuild.com',
            password:'ztech@44',
            subject:'Winston Error Log',
        },
    
        db:{
            level:'error',
            db:'logger',
            collection: 'logs',
        },
    
        custom:{
            driver:''
        }
    }
    
}

const logger = Logger.getInstance(logConfig);

logger.log('info','Super Man');

export default logger;