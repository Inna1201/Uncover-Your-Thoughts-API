const { connect, connection } = require('mongoose');

connect('mongodb://localhost/uncoverYourThoughts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;