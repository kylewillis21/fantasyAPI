export default {
  transform: {
    "^.+\\.js$": "babel-jest" // Use babel-jest to transform JavaScript files
  },
  transformIgnorePatterns: ["node_modules/(?!your-esm-package)"] // Optional, if needed for certain node_modules
};
