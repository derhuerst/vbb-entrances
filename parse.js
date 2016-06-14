'use strict'

const xlsx = require('xlsx-rows')
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
	.map((row) => ({
		  id:    row[7] ? parseInt(row[7]) : null
		, type:  row[0]
		, name:  row[2]
		, level: row[3] ? parseInt(row[3]) : null
		, east:  row[4] ? parseInt(row[4]) : null
		, north: row[5] ? parseInt(row[5]) : null
	}))

	let id
	for (let row of rows) {
		if (row.type.trim().toLowerCase() === 'bauwerk' && row.id) id = row.id
		else row.id = id
	}

	return rows
}



fs.writeFileSync('data.json', JSON.stringify(
	convert('berlin').concat(convert('brandenburg'))))
