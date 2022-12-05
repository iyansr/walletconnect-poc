module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      { unstable_transformProfile: 'hermes-stable' },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@modules': './modules',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.native',
          '.native.js',
          '.native.json',
          '.native.ts',
          '.native.tsx',
        ],
      },
    ],
  ],
};
