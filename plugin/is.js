// 检测数据类型
const typeOf = obj => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
const isArray = obj => typeOf(obj) === 'array'
const isFunction = obj => typeOf(obj) === 'function'
const isString = obj => typeOf(obj) === 'string'
const isNumber = obj => typeOf(obj) === 'number'
const isObject = obj => obj !== undefined && typeOf(obj) === 'object'

/**
 * 判断值是否为空，空对象返回false
 * @param {Any} value
 */
function isNull(value) {
	return value === undefined || value === null || value === ''
}

/**
 * 判断传入的是否一个字面量对象
 * @param {Object} obj
 */
function isPlainObject(obj) {
	if (!isObject(obj) || obj === null) return false

	let proto = obj
	while (Object.getPrototypeOf(proto) !== null) {
		proto = Object.getPrototypeOf(proto)
	}

	return Object.getPrototypeOf(obj) === proto
}

/**
 * 判断值是否为一个空对象
 * @param {Object} obj
 */
function isEmpty(obj) {
	if (!isPlainObject(obj)) return false

	return Object.keys(obj).length < 1
}

module.exports = {
	isArray,
	isFunction,
	isString,
	isNumber,
	isNull,
	isPlainObject,
	isEmpty
}
