module.exports = {
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'gosh this is so secret... shhh...',
  db: 'mongodb://127.0.0.1/locationapidb'
};
