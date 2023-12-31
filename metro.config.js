const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig();
    const {
        resolver: { sourceExts, assetExts },
    } = defaultConfig;

    return {
        transformer: {
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: false,
                },
            }),
        },
        resolver: {
            assetExts: assetExts.filter((ext) => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg', 'mjs'],
        },
    };
})();
