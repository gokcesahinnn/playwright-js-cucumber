const common = `
  --require config/config.js 
  --require setup/assertions.js 
  --require setup/hooks.js 
  --require features/step-definitions/*.js
`;

module.exports = {
  default: `${common} features/tests/**/*.feature`,
  glue: "features/step-definitions"
};