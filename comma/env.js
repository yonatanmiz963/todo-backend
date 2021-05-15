
function getEnv(varName, defaultValue=null) {
  let envVariable = process.env[varName];
  if (!envVariable && defaultValue === undefined) {
    throw new Error(`environment variable ${varName} is undefined`);
  }
  return envVariable || defaultValue;
}

const USERNAME = getEnv('DB_USERNAME');

const PASS = getEnv('DB_PASSWORD');

const DB_NAME = getEnv('DB_NAME');



module.exports = {
    USERNAME,
    PASS,
    DB_NAME
}