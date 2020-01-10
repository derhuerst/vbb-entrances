'use strict'

const csv = require('csv-parser')
const through = require('through2')
const sink = require('stream-sink')

const columns = Object.assign(Object.create(null), {
})

const parseRow = (row, _, cb) => {
	cb(null, {
		// todo: expose `Bauwerk Name` as `buildingName`
		// todo: make use or or expose `Bauwerkselement Nummer`
		// todo: make use of or expose `Bauwerksreferenzort Nummer`
		  id: row['Bauwerkselement Exportnummer'] || null
		, type: row['Bauwerkselement Typ'] || null
		, name: row['Bauwerkselement Name'] || null
		, level: row['Bauwerkselement Niveau']
			? parseInt(row['Bauwerkselement Niveau'])
			: null
		, latitude: row['X-Koordinate']
			? parseFloat(row['X-Koordinate'].replace(',', '.'))
			: null
		, longitude: row['Y-Koordinate']
			? parseFloat(row['Y-Koordinate'].replace(',', '.'))
			: null
	})
}

process.stdin
.pipe(csv({separator: ';'}))
.pipe(through.obj(parseRow))
.pipe(sink('object'))
.then((data) => {
	process.stdout.write(JSON.stringify(data) + '\n')
})
.catch((err) => {
	console.error(err)
	process.exit(1)
})
