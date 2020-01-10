# *vbb-entrances* ⏱

**Entrances for VBB stations**, computed from [open data](https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen).

[![npm version](https://img.shields.io/npm/v/vbb-entrances.svg)](https://www.npmjs.com/package/vbb-entrances)
[![build status](https://img.shields.io/travis/derhuerst/vbb-entrances.svg)](https://travis-ci.org/derhuerst/vbb-entrances)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-entrances.svg)](https://david-dm.org/derhuerst/vbb-entrances)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-entrances.svg)](https://david-dm.org/derhuerst/vbb-entrances#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-entrances.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install vbb-entrances
```


## Usage

```js
const entries = require('vbb-entrances')

const isAtOsloerStr = ({name}) => {
	const n = name.toLowerCase()
	return /osloer\s+str/i.test(n) && !/richtung\s+/i.test(n)
}

console.log(entries.filter(isAtOsloerStr))
```

```js
[
	{
		id: '301505002',
		type: 'Zugang und ÖV',
		name: 'Bushalt Drontheimer Straße hinter Osloer Straße',
		level: 0,
		latitude: 13.377096,
		longitude: 52.556975
	},
	{
		id: '300019003',
		type: 'Zugang',
		name: 'Zugang (Aufzug) Osloer Straße/Tram  II/3',
		level: 0,
		latitude: 13.372951,
		longitude: 52.556812
	}
	// …
]
```

Use [`vbb-translate-ids`](https://github.com/derhuerst/vbb-translate-ids) if you have new, long station IDs.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-entrances/issues).


## License

The data is licensed [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) *Verkerhsverbund Berlin-Brandenburg GmbH*.
