'use strict'

const xlsx = require('xlsx-rows')
const toWGS84 = require('gauss-krueger').gk2wgs
const fs = require('fs')



const columns = {
	id:    7,
	type:  0,
	name:  2,
	level: 3,
	east:  4,
	north: 5
}

const convert = (city) => {
	const rows = xlsx(city + '.xlsx')
	.slice(2)
	.filter((row) => row[4] && row[5])
	.map((row) => {
		const pos = toWGS84({x: parseInt(row[4]), y: parseInt(row[5])})
		return {
			  id:    row[7] ? parseInt(row[7]) : null
			, type:  row[0]
			, name:  row[2]
			, level: row[3] ? parseInt(row[3]) : null
			, latitude:  +pos.lat.toString().substr(0, 9)
			, longitude: +pos.lon.toString().substr(0, 9)
		}
	})

	let id
	for (let row of rows) {
		if (row.type.trim().toLowerCase() === 'bauwerk' && row.id) id = row.id
		else row.id = id
	}

	return rows
}



fs.writeFileSync('data.json', JSON.stringify(
	convert('berlin').concat(convert('brandenburg'))))
