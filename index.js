'use strict'

const stations = require('vbb-stations')
// const distance = require('gps-distance')
const shorten = require('vbb-short-station-name')
const fs = require('fs')
const entrances = require('./data.json')
const renderer = require('./pdf-renderer')

stations(true, +process.argv[2])
.then((stations) => {
	const station = stations[0]
	const pdf = renderer(station.latitude, station.longitude)

	for (let entrance of entrances) {
		if (!entrance.id) continue
		if (entrance.id !== station.id) continue

		const n = entrance.name.toLowerCase().trim()
		let color
		if (n.substr(0, 6) === 'zugang') color = '#f00'
		else if (n.substr(0, 14) === 'bushaltestelle') color = '#0f0'
		else if (n.substr(0, 9) === 'bahnsteig') color = '#00f'
		else continue
		// console.log(shorten(station.name), entrance.name)

		const pos = pdf.translate(entrance.latitude, entrance.longitude)
		pdf.circle(pos.x, pos.y, 10, color)
	}

	pdf.end().pipe(fs.createWriteStream('bla.pdf'))

}, console.error)
.catch((e) => console.error(e.stack))
