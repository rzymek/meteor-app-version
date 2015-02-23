var exec = Npm.require('child_process').exec;
var fs = Npm.require('fs');

var mkdirSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch (e) {
        if (e.code !== 'EEXIST')
            throw e;
    }
};

exec('git describe --tags', function (error, stdout, stderr) {
    try {
        var version = stdout.replace(/[\n']/g, '');
        mkdirSync('public');
        fs.writeFile('public/VERSION.txt', version);
    } catch (e) {
        console.error(e);
    }
});
