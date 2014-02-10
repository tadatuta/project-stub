var BEM = require('bem'),
    environ = require('bem-environ');

exports.baseLevelPath = require.resolve('../../../.bem/levels/bundles.js');

exports.getConfig = function() {

    return BEM.util.extend(this.__base() || {}, {

        bundleBuildLevels: [
            environ.getLibPath('bem-core', 'common.blocks'),
            environ.getLibPath('helpers', 'common.blocks'),
            'desktop.blocks',
            this.resolvePath('../../theme1.blocks')
        ]

    });

};
