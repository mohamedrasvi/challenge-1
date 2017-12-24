const searchRoutes = require('./search_routes');

module.exports = function(app, db) {
	searchRoutes(app, db);
  // Other route groups could go here, in the future
};