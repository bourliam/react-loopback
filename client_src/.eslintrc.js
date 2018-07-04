module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'react'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
