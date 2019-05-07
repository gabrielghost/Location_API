import Location from '../models/location';
import roundTo from 'round-to';

module.exports = {
  create: locationCreate,
  indexNames: locationIndexNames,
  index: locationIndex,
  read: locationReadWithLocationData
};

const officeLatLng = {
  lat: 52.502931,
  lng: 13.408249
}

// credit for code: https://snipplr.com/view/25479/calculate-distance-between-two-points-with-latitude-and-longitude-coordinates/
function distance(lat1,lon1,lat2,lon2) {
  return new Promise(resolve => {
	let R = 6371; // km (change this constant to get miles)
	let dLat = (lat2-lat1) * Math.PI / 180;
	let dLon = (lon2-lon1) * Math.PI / 180;
	let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	let d = R * c;
	if (d>1) d = roundTo(d, 0)+"km";
	else if (d<=1) d = roundTo(d*1000,0)+"m";
	resolve(d);
})
}

function locationCreate(req, res) {
  const location = new Location(req.body);
  location
  .save((err, location) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(201).json(location);
  });
}

// getLocationNames = function(location) { return location.name; }

function locationIndexNames(req, res) {
    Location
    .distinct(
    "name")
    .exec((err, locations) => {
      console.log(locations)
      if (err) return res.status(500).json(err);
      return res.status(200).json(locations);
    });
  }

function locationIndex(req, res) {
    Location
    .find({})
    .exec((err, locations) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(locations);
    });
  }



  function locationReadWithLocationData (req, res) {
    let id = req.params.id
    Location
    .find({ "_id": id })
    .exec((err, location) =>{
      if (err) return res.status(500).json(err);
      let locationObject = JSON.parse(JSON.stringify(location[0]))
      async function calculateDistance () {
        let distanceString = await distance(parseFloat(locationObject.lat), parseFloat(locationObject.lng), parseFloat(officeLatLng.lat), parseFloat(officeLatLng.lng))
        locationObject.distance = distanceString
        return res.status(200).json(locationObject);
      }
      calculateDistance()
    })
  }
