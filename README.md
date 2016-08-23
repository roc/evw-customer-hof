[![Build Status](https://travis-ci.org/UKHomeOffice/evw-customer-hof.svg?branch=master)](https://travis-ci.org/UKHomeOffice/evw-customer-hof)
[![Dependency Status](https://david-dm.org/UKHomeOffice/evw-customer-hof.svg)](https://david-dm.org/UKHomeOffice/evw-customer-hof)
[![devDependency Status](https://david-dm.org/UKHomeOffice/evw-customer-hof/dev-status.svg)](https://david-dm.org/UKHomeOffice/evw-customer-hof#info=devDependencies)

# EVW Customer HOF

A HOF version of the EVW Customer form.

### Prerequisities

Things you need to install the software and how to install them
- [NodeJS](https://nodejs.org/en/)
- npm (bundled with node)
- [Redis server](http://redis.io/topics/quickstart) running on the default port

### Installing

```bash
$ redis-server &
$ npm install
$ npm run dev
```

Go to http://localhost:8080/start

## Running the tests
You will need the server running to run the cucumber tests against.

```bash
$ node_modules/.bin/nightwatch
$ # or run in chrome and firefox in parallel 🤘🏽😝🤘🏽
$ node_modules/.bin/nightwatch  -e chrome,firefox
$ # or via npm scripts
$ npm run test:acceptance
```