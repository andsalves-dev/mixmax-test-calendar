module.exports = async () => {
  return {
    moduleDirectories: [
      './node_modules',
      './client',
    ],
    testEnvironment: 'jsdom',
  };
};
