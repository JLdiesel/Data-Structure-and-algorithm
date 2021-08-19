module.exports = {
  presets: [['env', { modules: false }]],
  plugins: [
    ['module-resolver', '@babel/plugin-transform-modules-commonjs'],
    'react-native-reanimated/plugin'
  ]
};
