/**
 * config配置文件
 */
var path = require('path');//this use show path to another file

var config = {
	debug: true,
	port: 3005,
	mysql: {
		host: '127.0.0.1',
		username: 'root',
		password: 'root',
		database: 'TODOMVC' //to connect database
	}
}

module.exports = config
