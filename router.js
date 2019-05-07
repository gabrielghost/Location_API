import multer from 'multer';
import location from './controllers/location';
const upload = multer({ dest: '/tmp/' });

module.exports = function (app) {
  app.post('/location', location.create);
  app.get('/locations/index/name', location.indexNames);
  app.get('/locations/index/:id', location.view);
};
