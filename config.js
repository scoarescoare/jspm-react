System.config({
  "transpiler": "6to5",
  "paths": {
    "*": "*.js",
    "app/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "bootstrap": "github:twbs/bootstrap@3.3.1",
    "npm:gulp": "npm:gulp@3.8.11",
    "npm:gulp-autoprefixer": "npm:gulp-autoprefixer@2.1.0",
    "npm:gulp-cached": "npm:gulp-cached@1.0.2",
    "npm:gulp-csso": "npm:gulp-csso@0.2.9",
    "npm:gulp-inject": "npm:gulp-inject@1.1.1",
    "npm:gulp-load-plugins": "npm:gulp-load-plugins@0.8.0",
    "npm:gulp-react": "npm:gulp-react@2.0.0",
    "npm:gulp-rename": "npm:gulp-rename@1.2.0",
    "npm:gulp-sass": "npm:gulp-sass@1.3.2",
    "npm:gulp-shell": "npm:gulp-shell@0.2.11",
    "npm:gulp-sourcemaps": "npm:gulp-sourcemaps@1.3.0",
    "npm:gulp-uglify": "npm:gulp-uglify@1.1.0",
    "npm:gulp-util": "npm:gulp-util@3.0.3",
    "npm:gulp-watch": "npm:gulp-watch@3.0.0",
    "npm:karma": "npm:karma@0.12.31",
    "npm:karma-chrome-launcher": "npm:karma-chrome-launcher@0.1.7",
    "npm:karma-firefox-launcher": "npm:karma-firefox-launcher@0.1.4",
    "npm:karma-jspm": "npm:karma-jspm@1.1.4",
    "npm:karma-mocha": "npm:karma-mocha@0.1.10",
    "npm:karma-mocha-reporter": "npm:karma-mocha-reporter@0.3.2",
    "npm:karma-phantomjs-launcher": "npm:karma-phantomjs-launcher@0.1.4",
    "npm:karma-sinon-chai": "npm:karma-sinon-chai@0.2.0",
    "npm:mocha": "npm:mocha@2.1.0",
    "npm:rimraf": "npm:rimraf@2.2.8",
    "npm:run-sequence": "npm:run-sequence@1.0.2",
    "react": "npm:react@0.12.2",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.12"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-fs@0.1.0": {
      "assert": "npm:assert@1.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "github:jspm/nodelibs-http@1.7.0": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.3.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.1": {
      "css": "github:systemjs/plugin-css@0.1.0",
      "jquery": "github:components/jquery@2.1.3"
    },
    "npm:abbrev@1.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:accepts@1.1.4": {
      "mime-types": "npm:mime-types@2.0.9",
      "negotiator": "npm:negotiator@0.4.9"
    },
    "npm:active-x-obfuscator@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zeparser": "npm:zeparser@0.0.5"
    },
    "npm:adm-zip@0.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asn1.js-rfc3280@1.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3"
    },
    "npm:asn1.js@1.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:async@0.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:autoprefixer-core@5.1.5": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000065",
      "num2fraction": "npm:num2fraction@1.0.1",
      "postcss": "npm:postcss@4.0.3",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:aws-sign2@0.5.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:base64-url@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:basic-auth-connect@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:basic-auth@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:batch@0.5.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:beeper@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:bl@0.9.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:body-parser@1.8.4": {
      "bytes": "npm:bytes@1.0.0",
      "depd": "npm:depd@0.4.5",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.4",
      "media-typer": "npm:media-typer@0.3.0",
      "on-finished": "npm:on-finished@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "qs": "npm:qs@2.2.4",
      "raw-body": "npm:raw-body@1.3.0",
      "type-is": "npm:type-is@1.5.7",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:boom@0.4.2": {
      "hoek": "npm:hoek@0.9.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:boom@2.6.1": {
      "hoek": "npm:hoek@2.11.0",
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@1.1.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:browserify-sign@2.8.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@2.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.5",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@0.2.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000065",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:buffer@3.0.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferstreams@0.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:camelcase-keys@1.0.0": {
      "camelcase": "npm:camelcase@1.0.2",
      "map-obj": "npm:map-obj@1.0.0"
    },
    "npm:chai@1.9.2": {
      "assertion-error": "npm:assertion-error@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:chalk@0.5.1": {
      "ansi-styles": "npm:ansi-styles@1.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.2",
      "has-ansi": "npm:has-ansi@0.1.0",
      "strip-ansi": "npm:strip-ansi@0.3.0",
      "supports-color": "npm:supports-color@0.2.0"
    },
    "npm:chokidar@0.12.6": {
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "fsevents": "npm:fsevents@0.3.5",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readdirp": "npm:readdirp@1.3.0"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:clone@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:colors@0.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:combined-stream@0.0.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@0.0.5",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@0.6.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:commander@2.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:commander@2.3.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "iconv-lite": "npm:iconv-lite@0.4.7",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.17",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:compressible@2.0.2": {
      "mime-db": "npm:mime-db@1.7.0"
    },
    "npm:compression@1.1.2": {
      "accepts": "npm:accepts@1.1.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "compressible": "npm:compressible@2.0.2",
      "debug": "npm:debug@2.0.0",
      "on-headers": "npm:on-headers@1.0.0",
      "vary": "npm:vary@1.0.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:config-chain@1.1.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "ini": "npm:ini@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "proto-list": "npm:proto-list@1.2.3",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:connect-timeout@1.3.0": {
      "debug": "npm:debug@2.0.0",
      "ms": "npm:ms@0.6.2",
      "on-headers": "npm:on-headers@1.0.0"
    },
    "npm:connect@2.26.6": {
      "basic-auth-connect": "npm:basic-auth-connect@1.0.0",
      "body-parser": "npm:body-parser@1.8.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "compression": "npm:compression@1.1.2",
      "connect-timeout": "npm:connect-timeout@1.3.0",
      "cookie": "npm:cookie@0.1.2",
      "cookie-parser": "npm:cookie-parser@1.3.3",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "csurf": "npm:csurf@1.6.6",
      "debug": "npm:debug@2.0.0",
      "depd": "npm:depd@0.4.5",
      "errorhandler": "npm:errorhandler@1.2.4",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "express-session": "npm:express-session@1.8.2",
      "finalhandler": "npm:finalhandler@0.2.0",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "media-typer": "npm:media-typer@0.3.0",
      "method-override": "npm:method-override@2.2.0",
      "morgan": "npm:morgan@1.3.2",
      "multiparty": "npm:multiparty@3.3.2",
      "on-headers": "npm:on-headers@1.0.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pause": "npm:pause@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "qs": "npm:qs@2.2.4",
      "response-time": "npm:response-time@2.0.1",
      "serve-favicon": "npm:serve-favicon@2.1.7",
      "serve-index": "npm:serve-index@1.2.1",
      "serve-static": "npm:serve-static@1.6.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-is": "npm:type-is@1.5.7",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "vhost": "npm:vhost@3.0.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@0.4.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-parser@1.3.3": {
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5"
    },
    "npm:cookie-signature@1.0.5": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:crc@3.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:crc@3.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@1.0.3": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.3.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cross-spawn@0.2.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:cryptiles@0.2.2": {
      "boom": "npm:boom@0.4.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:cryptiles@2.0.4": {
      "boom": "npm:boom@2.6.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.9.12": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@2.8.0",
      "create-ecdh": "npm:create-ecdh@1.0.3",
      "create-hash": "npm:create-hash@1.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.1",
      "public-encrypt": "npm:public-encrypt@1.1.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:csrf@2.0.5": {
      "base64-url": "npm:base64-url@1.2.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "rndm": "npm:rndm@1.1.0",
      "scmp": "npm:scmp@1.0.0",
      "uid-safe": "npm:uid-safe@1.0.3"
    },
    "npm:csso@1.3.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:csurf@1.6.6": {
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "csrf": "npm:csrf@2.0.5",
      "http-errors": "npm:http-errors@1.2.8"
    },
    "npm:ctype@0.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:dateformat@1.0.11": {
      "get-stdin": "npm:get-stdin@3.0.2",
      "meow": "npm:meow@2.1.0"
    },
    "npm:debug@2.0.0": {
      "ms": "npm:ms@0.6.2",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:defaults@1.0.0": {
      "clone": "npm:clone@0.1.19"
    },
    "npm:delayed-stream@0.0.5": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@0.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:end-of-stream@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:envify@3.2.0": {
      "jstransform": "npm:jstransform@7.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "through": "npm:through@2.3.6"
    },
    "npm:errorhandler@1.2.4": {
      "accepts": "npm:accepts@1.1.4",
      "escape-html": "npm:escape-html@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:esprima-fb@7001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:esprima-fb@8001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:etag@1.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crc": "npm:crc@3.0.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:etag@1.5.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crc": "npm:crc@3.2.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:event-stream@3.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "duplexer": "npm:duplexer@0.1.1",
      "from": "npm:from@0.1.3",
      "map-stream": "npm:map-stream@0.1.0",
      "pause-stream": "npm:pause-stream@0.0.11",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "split": "npm:split@0.3.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-combiner": "npm:stream-combiner@0.0.4",
      "through": "npm:through@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:express-session@1.8.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.5",
      "crc": "npm:crc@3.0.0",
      "debug": "npm:debug@2.0.0",
      "depd": "npm:depd@0.4.5",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "on-headers": "npm:on-headers@1.0.0",
      "parseurl": "npm:parseurl@1.3.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "uid-safe": "npm:uid-safe@1.0.1",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:finalhandler@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.0.0",
      "escape-html": "npm:escape-html@1.0.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:findup-sync@0.1.3": {
      "glob": "npm:glob@3.2.11",
      "lodash": "npm:lodash@2.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:findup-sync@0.2.1": {
      "glob": "npm:glob@4.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:first-chunk-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:flagged-respawn@0.3.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:forever-agent@0.5.2": {
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@0.1.4": {
      "async": "npm:async@0.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime": "npm:mime@1.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@0.2.0": {
      "async": "npm:async@0.9.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.0.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:formatio@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "samsam": "npm:samsam@1.1.2"
    },
    "npm:from@0.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:fs-extra@0.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "jsonfile": "npm:jsonfile@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "rimraf": "npm:rimraf@2.2.8"
    },
    "npm:fsevents@0.3.5": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "nan": "npm:nan@1.5.3",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gaze@0.5.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "globule": "npm:globule@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:get-stdin@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:glob-stream@3.1.18": {
      "glob": "npm:glob@4.3.5",
      "glob2base": "npm:glob2base@0.0.12",
      "minimatch": "npm:minimatch@2.0.1",
      "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "through2": "npm:through2@0.6.3",
      "unique-stream": "npm:unique-stream@1.0.0"
    },
    "npm:glob-watcher@0.0.6": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "gaze": "npm:gaze@0.5.1"
    },
    "npm:glob2base@0.0.12": {
      "find-index": "npm:find-index@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@3.1.21": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "graceful-fs": "npm:graceful-fs@1.2.3",
      "inherits": "npm:inherits@1.0.0",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@3.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@4.3.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.1",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globule@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@3.1.21",
      "lodash": "npm:lodash@1.0.1",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:graceful-fs@1.2.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:graceful-fs@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:growl@1.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:gulp-autoprefixer@2.1.0": {
      "autoprefixer-core": "npm:autoprefixer-core@5.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "object-assign": "npm:object-assign@2.0.0",
      "through2": "npm:through2@0.6.3",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-cached@1.0.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "lodash.defaults": "npm:lodash.defaults@2.4.1",
      "through2": "npm:through2@0.5.1"
    },
    "npm:gulp-csso@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferstreams": "npm:bufferstreams@0.0.2",
      "csso": "npm:csso@1.3.11",
      "gulp-util": "npm:gulp-util@2.2.20",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-inject@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "event-stream": "npm:event-stream@3.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:gulp-load-plugins@0.8.0": {
      "findup-sync": "npm:findup-sync@0.1.3",
      "multimatch": "npm:multimatch@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:gulp-react@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react-tools": "npm:react-tools@0.12.2",
      "through2": "npm:through2@0.6.3"
    },
    "npm:gulp-rename@1.2.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-sass@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@0.1.19",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "map-stream": "npm:map-stream@0.1.0",
      "node-sass": "npm:node-sass@2.0.0-beta",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-shell@0.2.11": {
      "async": "npm:async@0.9.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "lodash": "npm:lodash@2.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "through2": "npm:through2@0.6.3"
    },
    "npm:gulp-sourcemaps@1.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "convert-source-map": "npm:convert-source-map@0.4.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.3",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:gulp-uglify@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deepmerge": "npm:deepmerge@0.2.7",
      "gulp-util": "npm:gulp-util@3.0.3",
      "through2": "npm:through2@0.6.3",
      "uglify-js": "npm:uglify-js@2.4.16",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-util@2.2.20": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@0.5.1",
      "dateformat": "npm:dateformat@1.0.11",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.template": "npm:lodash.template@2.4.1",
      "minimist": "npm:minimist@0.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.5.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.2.3"
    },
    "npm:gulp-util@3.0.3": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "beeper": "npm:beeper@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@0.5.1",
      "dateformat": "npm:dateformat@1.0.11",
      "lodash.reescape": "npm:lodash.reescape@3.0.1",
      "lodash.reevaluate": "npm:lodash.reevaluate@3.0.1",
      "lodash.reinterpolate": "npm:lodash.reinterpolate@3.0.1",
      "lodash.template": "npm:lodash.template@3.0.1",
      "minimist": "npm:minimist@1.1.0",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.6.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:gulp-watch@3.0.0": {
      "gaze": "npm:gaze@0.5.1",
      "glob2base": "npm:glob2base@0.0.12",
      "gulp-util": "npm:gulp-util@3.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path2glob": "npm:path2glob@0.0.2",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "vinyl": "npm:vinyl@0.4.6",
      "vinyl-file": "npm:vinyl-file@1.1.1"
    },
    "npm:gulp@3.8.11": {
      "archy": "npm:archy@1.0.0",
      "chalk": "npm:chalk@0.5.1",
      "deprecated": "npm:deprecated@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.3",
      "interpret": "npm:interpret@0.3.10",
      "liftoff": "npm:liftoff@2.0.1",
      "minimist": "npm:minimist@1.1.0",
      "orchestrator": "npm:orchestrator@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pretty-hrtime": "npm:pretty-hrtime@0.2.2",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "semver": "npm:semver@4.2.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tildify": "npm:tildify@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "v8flags": "npm:v8flags@2.0.2",
      "vinyl-fs": "npm:vinyl-fs@0.3.13"
    },
    "npm:has-ansi@0.1.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@1.1.1": {
      "boom": "npm:boom@0.4.2",
      "cryptiles": "npm:cryptiles@0.2.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@0.9.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sntp": "npm:sntp@0.2.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hawk@2.3.1": {
      "boom": "npm:boom@2.6.1",
      "cryptiles": "npm:cryptiles@2.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.11.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@0.9.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:hoek@2.11.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-errors@1.2.8": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:http-proxy@0.10.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "colors": "npm:colors@0.6.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "optimist": "npm:optimist@0.6.1",
      "pkginfo": "npm:pkginfo@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "utile": "npm:utile@0.2.1"
    },
    "npm:http-signature@0.10.1": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.3",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:iconv-lite@0.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:iconv-lite@0.4.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:indent-string@1.2.0": {
      "get-stdin": "npm:get-stdin@3.0.2",
      "minimist": "npm:minimist@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "repeating": "npm:repeating@1.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:is-utf8@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:isstream@0.1.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jade@0.26.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@0.6.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "mkdirp": "npm:mkdirp@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:js-base64@2.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:json-stringify-safe@5.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jsonfile@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:jstransform@7.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@7001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@8.2.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@8001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:karma-chrome-launcher@0.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "karma": "npm:karma@0.12.31",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:karma-firefox-launcher@0.1.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "karma": "npm:karma@0.12.31",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:karma-jspm@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@3.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:karma-mocha-reporter@0.3.2": {
      "chalk": "npm:chalk@0.5.1",
      "karma": "npm:karma@0.12.31",
      "log-symbols": "npm:log-symbols@1.0.1"
    },
    "npm:karma-mocha@0.1.10": {
      "karma": "npm:karma@0.12.31",
      "mocha": "npm:mocha@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:karma-phantomjs-launcher@0.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "karma": "npm:karma@0.12.31",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "phantomjs": "npm:phantomjs@1.9.15",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:karma-sinon-chai@0.2.0": {
      "chai": "npm:chai@1.9.2",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "karma": "npm:karma@0.12.31",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sinon-chai": "npm:sinon-chai@2.5.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:karma@0.12.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@0.12.6",
      "colors": "npm:colors@0.6.2",
      "connect": "npm:connect@2.26.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "di": "npm:di@0.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@3.2.11",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "http-proxy": "npm:http-proxy@0.10.4",
      "lodash": "npm:lodash@2.4.1",
      "log4js": "npm:log4js@0.6.22",
      "mime": "npm:mime@1.2.11",
      "minimatch": "npm:minimatch@0.2.14",
      "optimist": "npm:optimist@0.6.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "q": "npm:q@0.9.7",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "rimraf": "npm:rimraf@2.2.8",
      "socket.io": "npm:socket.io@0.9.16",
      "source-map": "npm:source-map@0.1.31",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "useragent": "npm:useragent@2.0.10",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:kew@0.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:liftoff@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "extend": "npm:extend@1.3.0",
      "findup-sync": "npm:findup-sync@0.2.1",
      "flagged-respawn": "npm:flagged-respawn@0.3.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "minimist": "npm:minimist@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "resolve": "npm:resolve@1.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash._basetostring@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:lodash._escapehtmlchar@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1"
    },
    "npm:lodash._reunescapedhtml@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash._shimkeys@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.defaults@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@2.4.1": {
      "lodash._escapehtmlchar": "npm:lodash._escapehtmlchar@2.4.1",
      "lodash._reunescapedhtml": "npm:lodash._reunescapedhtml@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0"
    },
    "npm:lodash.isarray@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:lodash.isnative@3.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.keys@3.0.2": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.0",
      "lodash.isnative": "npm:lodash.isnative@3.0.0"
    },
    "npm:lodash.reescape@3.0.1": {
      "lodash._reescape": "npm:lodash._reescape@3.0.0"
    },
    "npm:lodash.reevaluate@3.0.1": {
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0"
    },
    "npm:lodash.reinterpolate@3.0.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0"
    },
    "npm:lodash.template@2.4.1": {
      "lodash._escapestringchar": "npm:lodash._escapestringchar@2.4.1",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.defaults": "npm:lodash.defaults@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@2.4.1",
      "lodash.values": "npm:lodash.values@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:lodash.template@3.0.1": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.0",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.1",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.iserror": "npm:lodash.iserror@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.0.2",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.0.1"
    },
    "npm:lodash.templatesettings@2.4.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1"
    },
    "npm:lodash.templatesettings@3.0.1": {
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.0.0"
    },
    "npm:lodash.values@2.4.1": {
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:lodash@2.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:log-symbols@1.0.1": {
      "chalk": "npm:chalk@0.5.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:log4js@0.6.22": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cluster": "github:jspm/nodelibs-cluster@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "semver": "npm:semver@1.1.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:lru-cache@2.2.4": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:map-stream@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:meow@2.1.0": {
      "camelcase-keys": "npm:camelcase-keys@1.0.0",
      "indent-string": "npm:indent-string@1.2.0",
      "minimist": "npm:minimist@1.1.0",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:method-override@2.2.0": {
      "debug": "npm:debug@2.0.0",
      "methods": "npm:methods@1.1.0",
      "parseurl": "npm:parseurl@1.3.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "vary": "npm:vary@1.0.0"
    },
    "npm:methods@1.1.0": {
      "http": "github:jspm/nodelibs-http@1.7.0"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.7.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.0.9": {
      "mime-db": "npm:mime-db@1.7.0"
    },
    "npm:mime@1.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.2.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.2.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@2.0.1": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:mkdirp@0.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:mocha@2.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.3.0",
      "debug": "npm:debug@2.0.0",
      "diff": "npm:diff@1.0.8",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob": "npm:glob@3.2.3",
      "growl": "npm:growl@1.8.1",
      "jade": "npm:jade@0.26.3",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:morgan@1.3.2": {
      "basic-auth": "npm:basic-auth@1.0.0",
      "depd": "npm:depd@0.4.5",
      "on-finished": "npm:on-finished@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:multimatch@1.0.0": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-union": "npm:array-union@1.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:multiparty@3.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream-counter": "npm:stream-counter@0.2.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:mz@1.2.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.1.2",
      "thenify": "npm:thenify@3.1.0",
      "thenify-all": "npm:thenify-all@1.6.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:nan@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@1.5.3": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:native-or-bluebird@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:ncp@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:node-sass@2.0.0-beta": {
      "chalk": "npm:chalk@0.5.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "cross-spawn": "npm:cross-spawn@0.2.6",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "gaze": "npm:gaze@0.5.1",
      "get-stdin": "npm:get-stdin@3.0.2",
      "meow": "npm:meow@2.1.0",
      "mkdirp": "npm:mkdirp@0.5.0",
      "mocha": "npm:mocha@2.1.0",
      "nan": "npm:nan@1.5.3",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "replace-ext": "npm:replace-ext@0.0.1",
      "request": "npm:request@2.53.0",
      "shelljs": "npm:shelljs@0.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:node-uuid@1.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:nopt@3.0.1": {
      "abbrev": "npm:abbrev@1.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:npmconf@2.0.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "config-chain": "npm:config-chain@1.1.8",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ini": "npm:ini@1.3.2",
      "mkdirp": "npm:mkdirp@0.5.0",
      "nopt": "npm:nopt@3.0.1",
      "once": "npm:once@1.3.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "osenv": "npm:osenv@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "semver": "npm:semver@4.2.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "uid-number": "npm:uid-number@0.0.5",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:oauth-sign@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:on-finished@2.1.0": {
      "ee-first": "npm:ee-first@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:optimist@0.6.1": {
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.0"
    },
    "npm:orchestrator@0.3.7": {
      "end-of-stream": "npm:end-of-stream@0.1.5",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sequencify": "npm:sequencify@0.0.7",
      "stream-consume": "npm:stream-consume@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ordered-read-streams@0.1.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:osenv@0.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:pako@0.2.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:parse-asn1@2.0.0": {
      "asn1.js": "npm:asn1.js@1.0.3",
      "asn1.js-rfc3280": "npm:asn1.js-rfc3280@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pemstrip": "npm:pemstrip@0.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:path2glob@0.0.2": {
      "glob": "npm:glob@4.3.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:pause-stream@0.0.11": {
      "through": "npm:through@2.3.6"
    },
    "npm:pbkdf2-compat@3.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:phantomjs@1.9.15": {
      "adm-zip": "npm:adm-zip@0.4.4",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "fs-extra": "npm:fs-extra@0.16.3",
      "kew": "npm:kew@0.4.0",
      "npmconf": "npm:npmconf@2.0.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "progress": "npm:progress@1.1.8",
      "request": "npm:request@2.42.0",
      "request-progress": "npm:request-progress@0.3.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "which": "npm:which@1.0.8"
    },
    "npm:pkginfo@0.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:policyfile@0.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:postcss@4.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "js-base64": "npm:js-base64@2.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.2.0"
    },
    "npm:progress@1.1.8": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:public-encrypt@1.1.2": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@2.0.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:q@0.9.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:qs@1.2.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:qs@2.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:raw-body@1.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "iconv-lite": "npm:iconv-lite@0.4.4",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:react-tools@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@8.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:react@0.12.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readdirp@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.17": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.11",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:redis@0.7.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:repeating@1.1.1": {
      "is-finite": "npm:is-finite@1.0.0",
      "meow": "npm:meow@2.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:request-progress@0.3.1": {
      "throttleit": "npm:throttleit@0.0.2"
    },
    "npm:request@2.42.0": {
      "aws-sign2": "npm:aws-sign2@0.5.0",
      "bl": "npm:bl@0.9.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.6.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "forever-agent": "npm:forever-agent@0.5.2",
      "form-data": "npm:form-data@0.1.4",
      "hawk": "npm:hawk@1.1.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "http-signature": "npm:http-signature@0.10.1",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.0",
      "mime-types": "npm:mime-types@1.0.2",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "node-uuid": "npm:node-uuid@1.4.2",
      "oauth-sign": "npm:oauth-sign@0.4.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "qs": "npm:qs@1.2.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.4",
      "tough-cookie": "npm:tough-cookie@0.12.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:request@2.53.0": {
      "aws-sign2": "npm:aws-sign2@0.5.0",
      "bl": "npm:bl@0.9.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.9.0",
      "combined-stream": "npm:combined-stream@0.0.7",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "forever-agent": "npm:forever-agent@0.5.2",
      "form-data": "npm:form-data@0.2.0",
      "hawk": "npm:hawk@2.3.1",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "http-signature": "npm:http-signature@0.10.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "isstream": "npm:isstream@0.1.1",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.0",
      "mime-types": "npm:mime-types@2.0.9",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "node-uuid": "npm:node-uuid@1.4.2",
      "oauth-sign": "npm:oauth-sign@0.6.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "qs": "npm:qs@2.3.3",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.4",
      "tough-cookie": "npm:tough-cookie@0.12.1",
      "tunnel-agent": "npm:tunnel-agent@0.4.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:resolve@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:response-time@2.0.1": {
      "on-headers": "npm:on-headers@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:rimraf@2.2.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:rndm@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:run-sequence@1.0.2": {
      "chalk": "npm:chalk@0.5.1"
    },
    "npm:semver@4.2.2": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:send@0.9.3": {
      "debug": "npm:debug@2.0.0",
      "depd": "npm:depd@0.4.5",
      "destroy": "npm:destroy@1.0.3",
      "escape-html": "npm:escape-html@1.0.1",
      "etag": "npm:etag@1.4.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "mime": "npm:mime@1.2.11",
      "ms": "npm:ms@0.6.2",
      "on-finished": "npm:on-finished@2.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-favicon@2.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "etag": "npm:etag@1.5.1",
      "fresh": "npm:fresh@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "ms": "npm:ms@0.6.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-index@1.2.1": {
      "accepts": "npm:accepts@1.1.4",
      "batch": "npm:batch@0.5.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "debug": "npm:debug@2.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-static@1.6.5": {
      "escape-html": "npm:escape-html@1.0.1",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.9.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:sha.js@2.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:shelljs@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:sinon-chai@2.5.0": {
      "chai": "npm:chai@1.9.2",
      "sinon": "npm:sinon@1.12.2"
    },
    "npm:sinon@1.12.2": {
      "formatio": "npm:formatio@1.1.1",
      "lolex": "npm:lolex@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "util": "npm:util@0.10.3"
    },
    "npm:sntp@0.2.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@0.9.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.11.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:socket.io-client@0.9.16": {
      "active-x-obfuscator": "npm:active-x-obfuscator@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "uglify-js": "npm:uglify-js@1.2.5",
      "ws": "npm:ws@0.4.32",
      "xmlhttprequest": "npm:xmlhttprequest@1.4.2"
    },
    "npm:socket.io@0.9.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "policyfile": "npm:policyfile@0.0.4",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "redis": "npm:redis@0.7.3",
      "socket.io-client": "npm:socket.io-client@0.9.16",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:source-map@0.1.34": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:split@0.3.3": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "through": "npm:through@2.3.6",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-combiner@0.0.4": {
      "duplexer": "npm:duplexer@0.1.1"
    },
    "npm:stream-counter@0.2.0": {
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@0.3.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-bom@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "is-utf8": "npm:is-utf8@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:thenify-all@1.6.0": {
      "thenify": "npm:thenify@3.1.0"
    },
    "npm:thenify@3.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.1.2"
    },
    "npm:through2@0.5.1": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:through2@0.6.3": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:tildify@1.0.0": {
      "user-home": "npm:user-home@1.1.1"
    },
    "npm:timers-browserify@1.3.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:tough-cookie@0.12.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-is@1.5.7": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.0.9"
    },
    "npm:uglify-js@1.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:uglify-js@2.4.16": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "source-map": "npm:source-map@0.1.34",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid-number@0.0.5": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:uid-safe@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "base64-url": "npm:base64-url@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "mz": "npm:mz@1.2.1"
    },
    "npm:uid-safe@1.0.3": {
      "base64-url": "npm:base64-url@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.1.2"
    },
    "npm:unique-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:user-home@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:useragent@2.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "lru-cache": "npm:lru-cache@2.2.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:utile@0.2.1": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "i": "npm:i@0.3.2",
      "mkdirp": "npm:mkdirp@0.5.0",
      "ncp": "npm:ncp@0.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.2.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:v8flags@2.0.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:vinyl-file@1.1.1": {
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "strip-bom": "npm:strip-bom@1.0.0",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:vinyl-fs@0.3.13": {
      "defaults": "npm:defaults@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "glob-stream": "npm:glob-stream@3.1.18",
      "glob-watcher": "npm:glob-watcher@0.0.6",
      "graceful-fs": "npm:graceful-fs@3.0.5",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "strip-bom": "npm:strip-bom@1.0.0",
      "through2": "npm:through2@0.6.3",
      "vinyl": "npm:vinyl@0.4.6"
    },
    "npm:vinyl-sourcemaps-apply@0.1.4": {
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:vinyl@0.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vinyl@0.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@0.2.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:which@1.0.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0"
    },
    "npm:ws@0.4.32": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "nan": "npm:nan@1.0.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tinycolor": "npm:tinycolor@0.0.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:xmlhttprequest@1.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:zeparser@0.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

