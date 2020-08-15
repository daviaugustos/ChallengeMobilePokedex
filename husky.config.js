const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['npx eslint src/**', 'npx prettier --write src/**']),
  },
};
