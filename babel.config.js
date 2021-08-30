module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@database': './src/database',
        '@interfaces': './src/interfaces',
        '@utils': './src/utils',
        '@views': './src/views',
        '@routes': './src/routes',
        "express": 'node_modules/express/lib/express'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
