var fs = require('fs');
var path = require('path');

var cache = {};

var doCache = function(cache, filePath) {
    if(cache && filePath) {
        var stat = fs.statSync(filePath);
        if(stat.isFile()) {
            var content = fs.readFileSync(filePath);
            cache[filePath] = content;
        }
        else {
            throw Error(`${filePath} is not a file path!`);
        }
    }
}

var doReplace = function(catalogPath, contentStr) {

}

module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {
        catalog: {
            process: function(block) {
                var args = block.args,
                    content = '';
                if(args && args.length && args[0]) {
                    var oppPath = args[0],
                        absPath = path.join(__dirname, oppPath),
                        fileStat = fs.statSync(absPath),
                        content = '';
                    if(fileStat.isFile()) {
                        content = fs.readFileSync(absPath);
                    }
                }
                return content;
            }
        }
    },

    // Map of new filters
    filters: {}
};