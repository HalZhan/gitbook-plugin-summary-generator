var fs = require('fs');
var path = require('path');

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