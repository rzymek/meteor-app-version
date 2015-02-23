var exec = Npm.require('child_process').exec;

var handler = function (compileStep) {
    try {
        exec('git describe --tags', Meteor.bindEnvironment(function (error, stdout, stderr) {
            if(error || stderr) {
                compileStep.error({
                    sourcePath: compileStep.inputPath,
                    message: error || stderr
                });
            }
            try {
                var version = stdout.replace(/[\n']/g, '');
                var name = compileStep.inputPath.replace(/^.*[/]([^/]+).version$/, '$1');
                var src = "" + name + " = '" + version + "';\n" +
                        "if(Meteor.isClient) {\n" +
                        "   Template.registerHelper('" + name + "', function () {\n" +
                        "       return " + name + ";\n" +
                        "   });\n" +
                        "}";
                compileStep.addJavaScript({
                    path: compileStep.inputPath + '.js',
                    sourcePath: compileStep.inputPath,
                    data: src
                });
            } catch (e) {
                compileStep.error({
                    sourcePath: compileStep.inputPath,
                    message: e
                });
            }
        }));
    } catch (e) {
        compileStep.error({
            sourcePath: compileStep.inputPath,
            message: e
        });
    }
};

Plugin.registerSourceHandler("version", handler);