# rrlogger


A simple wrapper for winston, which provide easy laravel style configration.


## Install 
```
$ npm i rrlogger 
```

## Usage

```
const  loggerResolver  =  require('rrlogger');
const  path  =  require('path');

const  logConfig  = {
	/**
	* Default transport for logger
	*/
	default:  process.env.logChannel  ||  'stack',
	enviorment:  process.env.node_env  ||  'production',

	channels :{
		stack:{
			enviorments: ['production','development'],
			channels : ['console', 'daily', 'db' ]
		},
		single: {
			enviorments: ['production','development'],
			level:'info',
			filename:  'single.log',
			dirname :  path.join(__dirname,'/logs/')
		},
		daily: {
			enviorments: ['production','development'],
			level:'info',
			filename:  'application-%DATE%.log',
			datePattern:  'YYYY-MM-DD-HH',
			zippedArchive:  true,
			maxSize:  '20m',
			maxFiles:  '14d',
			dirname :  path.join(__dirname,'/logs')
		},

		console:{
			enviorments: ['production','development'],
			level:'error',
		},
		mail:{
			enviorments: ['production','development'],
			level:'error',
			to:'jamesdoe124@yopmail.com',
			from:'xyz@email.com',
			host:'smtp.mail.com',
			port:'587',
			tls:true,
			username:'username@email.com',
			password:'x434cfs9',
			subject:'Winston Error Log',
		},
		db:{
			enviorments: ['production','development'],
			level:'error',
			db:'mongodb://localhost:27017/logger',
			collection:  'logs',
		},
	}
}

// Create Logger Instance
const  logger  =  LoggerResolver.default.getInstance(logConfig);

logger.log('error','enter log')
```
