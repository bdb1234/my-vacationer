{
  "id": "my-vacationer",
  "inputs": "bin/app_plovr.js",
  "paths": [
    "bin/app_plovr.js",
    "src/modules",
    "libs/haus/libs/closure-templates-for-javascript/soyutils_usegoog.js"
  ],
  "externs": [
    "libs/haus/src/externs/node/v0.8.3-pre",
    "libs/haus/src/externs/express"
    ],
//  "mode": "ADVANCED",
  "mode": "SIMPLE",
  "level": "VERBOSE",
  "pretty-print": true,
  "closure-library" : "libs/haus/libs/google-closure-library/closure/goog",
  "output-wrapper": "var EventEmitter = require('events').EventEmitter;\nvar http = require('http');\nvar https = require('https');\n%output%"
}