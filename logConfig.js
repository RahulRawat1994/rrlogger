import LogManager from './src/LogManager';

const logConfig = {
    /**
     * Default transport for logger
     */
    transport: process.env.log.transport || 'stack',
    
    channels :{

        stack:{
            driver : 'stack',
            channels : ['mail', 'single']
        },

        single: {
            driver : 'Single',
            filename: 'single.log',
            path : '/'
        },
    
        daily: {
            driver : 'Daily',
            path: '/'
        },
    
        console:{
            driver : 'Console'
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

const logger = new LogManager(logConfig);

export default logger;