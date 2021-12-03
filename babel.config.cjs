module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                corejs: { version: '3.19' },
                useBuiltIns: 'usage'
            }
        ]
    ]
};
