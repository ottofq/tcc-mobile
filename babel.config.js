module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ],
  plugins: ['react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'react-native-reanimated/plugin'],
    },
  },
};
