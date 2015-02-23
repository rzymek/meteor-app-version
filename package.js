Package.describe({
    name: 'rzymek:app-version',
    version: '0.0.2',
    summary: 'Generates aplication version based on git describe --tags',
    git: 'https://github.com/rzymek/meteor-app-version.git',
    documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: "app-version",
    use: ["meteor"],
    sources: ['generate-version.js']
});