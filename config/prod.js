const { USERNAME, PASS } = require('../comma/env')

module.exports = {
  'dbURL': `mongodb+srv://${USERNAME}:${PASS}@cluster0.ogahi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
}
