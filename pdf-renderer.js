'use strict'

const mercator = require('mercator-projection')
const PDF = require('pdfkit')



const project = (lat, lng) => mercator.fromLatLngToPoint({lat, lng})

const renderer = (latitude, longitude) => { // of the center

	const left   = project(latitude + .003, longitude - .003).x
	const top    = project(latitude + .003, longitude - .003).y
	const right  = project(latitude - .003, longitude + .005).x
	const bottom = project(latitude - .003, longitude + .005).y
	const w = 900
	const h = (bottom - top) / (right - left) * w

	const translate = (lat, long) => {
		const coords = project(lat, long)
		return {
			  x: (coords.x - left) / (right - left) * w
			, y: (coords.y - top)  / (bottom - top) * h
		}
	}

	const pdf = new PDF()
	pdf.addPage({margin: 50, size: [w, h]})
	pdf.lineCap('round'); pdf.lineJoin('round')

	const circle = (x, y, r, c) => {
		pdf.lineWidth(r/5); pdf.fillColor(c)
		pdf.circle(x, y, r); pdf.fill()
	}
	const text = (x, y, t, s, c) => {
		pdf.fontSize(s); pdf.fillColor(c)
		pdf.text(t, x, y)
	}
	const end = () => {pdf.end(); return pdf}

	return {translate, circle, text, end}

}



module.exports = renderer
