const pkg = require('./package.json');
const versionMatcher = /^\^(\d\.\d+)/;
const [, corejsVersion] = versionMatcher.exec(pkg.dependencies['core-js']);

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: { version: corejsVersion },
                useBuiltIns: 'usage'
            }
        ]
    ]
};
