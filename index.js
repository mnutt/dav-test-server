var fs = require('fs');
var os = require('os');

var jsDAV                  = require("jsDAV/lib/jsdav");
var jsDAV_Server           = require("jsDAV/lib/DAV/server");
var jsDAV_Util             = require("jsDAV/lib/shared/util");
var Tree                   = require("./backend/tree");
var jsDAV_Locks_Backend_FS = require("jsDAV/lib/DAV/plugins/locks/fs");

jsDAV.debugMode = true;

// for free disk space reporting
var statvfs = require('./statvfs-shim');
fs.statvfs = statvfs;

var root = process.env.STORAGE_PATH || "/var/data";

console.log("Mounting webdav from data dir " + root);

var tempDir = os.tmpdir();
console.log("Storing temporary files in " + tempDir);

jsDAV.createServer({
  tree: Tree.new(root),
  tmpDir: tempDir,
  sandboxed: true,
  locksBackend: jsDAV_Locks_Backend_FS.new(root),
  plugins: jsDAV_Util.extend(jsDAV_Server.DEFAULT_PLUGINS, {
    "root-delete": require("./root-delete")
  })
}, process.env.PORT || 8000);
