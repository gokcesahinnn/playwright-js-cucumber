const common = `
  --require config/config.js 
  --require utilities/assertions.js 
  --require utilities/hooks.js 
  --require features/step-definitions/*.js
`;

module.exports = {
  default: `${common} features/tests/**/*.feature`,
  glue: "features/step-definitions"
};