buildPlugin({
  entryPoints: ['builds/cdn.js'],
  outfile: 'dist/api.min.js',
})

buildPlugin({
  entryPoints: ['builds/module.js'],
  outfile: 'dist/api.esm.js',
  platform: 'node',
  mainFields: ['main', 'module'],
})

function buildPlugin(buildOptions) {
  return require('esbuild').buildSync({
    ...buildOptions,
    minify: true,
    bundle: true,
  })
}
