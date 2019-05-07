import multer from 'multer';
import location from './controllers/location';
const upload = multer({ dest: '/tmp/' });

module.exports = function (app) {
  app.post('/location', location.create);
  app.get('/locations', location.index);
  app.get('/locations/names', location.indexNames);
  app.get('/locations/:id', location.read);
};
