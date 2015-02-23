Package.describe({
    name: 'rzymek:app-version',
    version: '0.0.1',
    summary: 'Generates public/VERSION.txt file based on git describe --tags',
    git: 'https://github.com/rzymek/meteor-app-version.git',
    documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: "app-version",
    use: [],
    sources: ['generate-version.js']
});