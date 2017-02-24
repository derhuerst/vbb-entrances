# *vbb-entrances* ⏱

**Entrances for VBB stations**, computed from [open data](https://daten.berlin.de/datensaetze/koordinaten-der-zugangsmöglichkeiten-zu-stationen).

[![npm version](https://img.shields.io/npm/v/vbb-entrances.svg)](https://www.npmjs.com/package/vbb-entrances)
[![build status](https://img.shields.io/travis/derhuerst/vbb-entrances.svg)](https://travis-ci.org/derhuerst/vbb-entrances)
[![dependency status](https://img.shields.io/david/derhuerst/vbb-entrances.svg)](https://david-dm.org/derhuerst/vbb-entrances)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/vbb-entrances.svg)](https://david-dm.org/derhuerst/vbb-entrances#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-entrances.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)


## Installing

```shell
npm install vbb-entrances
```


## Usage

```js
const entries = require('vbb-entrances/data.json')

entries.find((entry) => entry.id === '900000009202') // U Osloer Str.
```

```js
{
	id: '900000009202',
	type: 'Bauwerk',
	name: 'U Osloer Straße',
	level: null,
	latitude: 52.556963,
	longitude: 13.373239
}
```

Use [`vbb-translate-ids`](https://github.com/derhuerst/vbb-translate-ids) if you have new, long station IDs.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-entrances/issues).


## License

The data is licensed [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) *Verkerhsverbund Berlin-Brandenburg GmbH*.
