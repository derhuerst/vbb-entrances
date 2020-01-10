'use strict'

const entries = require('.')

const isAtOsloerStr = ({name}) => {
	const n = name.toLowerCase()
	return /osloer\s+str/i.test(n) && !/richtung\s+/i.test(n)
}

console.log(entries.filter(isAtOsloerStr))
