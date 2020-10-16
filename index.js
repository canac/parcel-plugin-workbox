const { generateSW } = require(`workbox-build`);
const logger = require(`@parcel/logger`);
const path = require(`path`);

module.exports = (bundle) => {
  bundle.on(`buildEnd`, async () => {
    logger.log(`🛠️  Workbox`);

    // Load the workbox config from package.json
    const packageJsonConfig = (await bundle.mainBundle.entryAsset.getPackage()).workbox;
    const defaultConfig = {
      globDirectory: bundle.options.outDir,
      globPatterns: [`**/*.{css,html,js}`],
      swDest: path.join(bundle.options.outDir, `sw.js`),
    };
    const mergedConfig = { ...defaultConfig, ...packageJsonConfig };
    generateSW(mergedConfig).then(({ count, size, warnings }) => {
      warnings.forEach((warning) => {
        logger.warn(warning);
      });
      logger.success(`Generated ${mergedConfig.swDest}, which will precache ${count} files, totaling ${size} bytes`);
    }).catch((err) => {
      logger.error(err);
    });
  });
};
