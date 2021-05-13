
function getEnv(varName, defaultValue=null) {
  let envVariable = process.env[varName];
  if (!envVariable && defaultValue === undefined) {
    throw new Error(`environment variable ${varName} is undefined`);
  }
  return envVariable || defaultValue;
}

/**
 * The current environment
 */
const USERNAME = getEnv('DB_USERNAME');
const PASS = getEnv('DB_PASSWORD');
const DB_NAME = getEnv('DB_NAME');


/**
 * Linrest exposed port
 */
const PORT = getEnv('PORT');

/**
 * time in seconds to set for the HTTP server keep-alive timeout (idle connection timeout)
 */
const KEEP_ALIVE_SEC_TIMEOUT = parseInt(getEnv('KEEP_ALIVE_SEC_TIMEOUT', '182'));

/**
 * How much repository can be selected during assessment
 */
const ASSESS_LIMIT = getEnv('ASSESS_LIMIT');

/**
 * Token used to encrypt providers token
 */
const LINB_TOKEN_SECRET = getEnv('LINB_TOKEN_SECRET');


module.exports = {
    USERNAME,
    PASS,
    DB_NAME
}