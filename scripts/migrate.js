#!/usr/bin/env node

// ARGS: run, drop
// runs run function migration
// drop executes drop function in migration

var Migration = require(__dirname + '/../db/migration'),
		arg = eval("process.argv.slice(2)[0]"),
		command = "Migration.".concat(arg)

eval(command.concat("()"))
