#!/usr/bin/env node

var Migration = require(__dirname + '/../db/migration');

Migration.run()
