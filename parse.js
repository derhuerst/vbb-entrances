'use strict'

const csv = require('csv-parser')
const through = require('through2')
const sink = require('stream-sink')



const parseRow = (row, _, cb) => {
	cb(null, {
		  id: row[headers[7]] || row[headers[6]] || null
		, type: row[headers[1]]
		, name: row[headers[0]]
		, level: row[headers[3]] ? parseInt(row[headers[3]]) : null
		, latitude: parseFloat(row[headers[5]].replace(',', '.'))
		, longitude: parseFloat(row[headers[4]].replace(',', '.'))
	})
}


const parser = csv({separator: ';'})
let headers = []
parser.on('headers', (h) => {
	headers = h
})

process.stdin
.pipe(parser)
.pipe(through.obj(parseRow))
.pipe(sink('object'))
.then((data) => {
	process.stdout.write(JSON.stringify(data) + '\n')
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
