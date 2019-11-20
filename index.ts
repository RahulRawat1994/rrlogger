import Logger from './src/Logger';
import path from 'path';

const logConfig = {
    /**
     * Default transport for logger
     */
    default: process.env.logChannel || 'stack',
    
    channels :{

        stack:{
            channels :  ['console', 'single']
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
            driver: 'Mail',
            from :'jack@gmail.com',
            to: 'jack@gmail.com',
            subject : 'Error Log'
        },
    
        db:{
            driver: 'Db',
            collection: 'logs',
            connectionString : 'localhost:27017/tcaredb'
        },
    
        custom:{
            
        }
    }
    
}

const logger = Logger.getInstance(logConfig);

logger.log('info','Super Man');

export default logger;