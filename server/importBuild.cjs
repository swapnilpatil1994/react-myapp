// File generated by https://github.com/brillout/vite-plugin-import-build
(async () => {
  const { setImportBuildGetters } = await import('../../node_modules/vike/dist/esm/node/runtime/globalContext/loadImportBuild.js');
  setImportBuildGetters({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../assets.json'),
    pluginManifest: () => require('../client/vike.json'),
  });
})()