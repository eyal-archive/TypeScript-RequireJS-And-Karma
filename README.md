TypeScript-RequireJS-And-Karma
==============================

A template for TypeScript which demonstrates how to structure a project properly to get RequireJS and Karma to work.

I wanted to rewrite one of my projects that has a fairly complex structure which I wrote in JavaScript and most of the example that I've seen were too simple so I couldn't figure how to configure the paths for RequireJS and Karma properly to make them work together.

After I've spent quite a bit of time I finally got it to work and this example is the gist of it.

Besides the structure of the project I also demonstrate how-to extend the built-in types and test them in TypeScript as well as a regular class written in TypeScript.

```
Directory Structure
-------------------
.
|-- node_modules
|   |-- jasmine-node
|   |   |-- bin
|   |   |-- lib
|   |   |-- node_modules
|   |   |-- scripts
|   |   |-- spec
|   |   |-- src
|   |   |-- Gruntfile.coffee
|   |   |-- LICENSE
|   |   |-- README.md
|   |   |-- bower.json
|   |   |-- index.js
|   |   `-- package.json
|   |-- karma
|   |   |-- bin
|   |   |-- lib
|   |   |-- node_modules
|   |   |-- static
|   |   |-- CHANGELOG.md
|   |   |-- LICENSE
|   |   |-- README.md
|   |   |-- config.tpl.coffee
|   |   |-- config.tpl.js
|   |   |-- config.tpl.ls
|   |   |-- karma-completion.sh
|   |   |-- package.json
|   |   |-- requirejs.config.tpl.coffee
|   |   `-- requirejs.config.tpl.js
|   |-- karma-jasmine
|   |   |-- lib
|   |   |-- LICENSE
|   |   |-- README.md
|   |   `-- package.json
|   |-- karma-requirejs
|   |   |-- lib
|   |   |-- LICENSE
|   |   |-- README.md
|   |   `-- package.json
|   `-- requirejs
|       |-- bin
|       |-- README.md
|       |-- package.json
|       `-- require.js
|-- src
|   |-- framework
|   |   `-- core
|   |-- libs
|   |   |-- typings
|   |   |-- jasmine.ext.js
|   |   |-- jquery-2.1.0.js
|   |   `-- require.js
|   |-- tests
|   |   |-- core
|   |   `-- test.main.js
|   |-- TypeScript-RequireJS-And-Karma.csproj
|   |-- TypeScript-RequireJS-And-Karma.csproj.user
|   |-- app.main.js
|   |-- app.main.js.map
|   |-- app.main.ts
|   |-- index.html
|   |-- web.Debug.config
|   |-- web.Release.config
|   `-- web.config
|-- tools
|   `-- karma
|       `-- karma.conf.js
|-- TypeScript-RequireJS-And-Karma.sln
|-- TypeScript-RequireJS-And-Karma.sln.DotSettings.user
|-- TypeScript-RequireJS-And-Karma.suo
|-- TypeScript-RequireJS-And-Karma.v12.suo
|-- WebEssentials-Settings.json
`-- karma.sh

28 directories, 45 files
```

Running the Tests
-----------------
The port for Karma is 8380 so make sure you're using this port or change it yourself to whatever you want.

./karma.sh start

