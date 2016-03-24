Package.describe({
    name: 'wdhif:jzoom',
    version: '1.0.0',
    summary: 'jZoom Performant Image Magnifying Glass Effect wrapper - original jquery plugin by https://github.com/pciapcib',
    git: 'https://github.com/wdhif/meteor-jzoom',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');

    // Dependencies
    Npm.depends({
        'jquery': '2.2.2'
    });

    // Client files
    api.addFiles([
        'client/jzoom.min.js'
    ], 'client');
});
