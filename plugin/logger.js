const chalk = require('chalk')

module.exports = {
	log(...msgs) {
		msgs.unshift('\r\nAssetsCallbackWebpackPlugin: ')
		console.log(chalk.blue(msgs.join('')))
	},
	info(...msgs) {
		msgs.unshift('\r\nAssetsCallbackWebpackPlugin: ')
		console.log(chalk.green(msgs.join('')))
	},
	error(...msgs) {
		msgs.unshift('\r\nAssetsCallbackWebpackPlugin: ')
		console.log(chalk.red(msgs.join('')))
	},
	warn(...msgs) {
		msgs.unshift('\r\nAssetsCallbackWebpackPlugin: ')
		console.log(chalk.yellow(msgs.join('')))
	}
}
