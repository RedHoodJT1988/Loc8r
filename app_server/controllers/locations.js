/* Get 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!',
    },
    locations: [
      {
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
        distance: '100m',
      },
      {
        name: 'Cafe Hero',
        address: '127 Fairy Ln, Imaginationland, USA',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium Wi-Fi'],
        distance: '200m',
      },
      {
        name: 'Burger Queen',
        address: ' 2343 Heart Drive, Wonderland, USA',
        rating: 5,
        facilities: ['Hot drinks', 'Premium Wi-Fi'],
        distance: '350m',
      },
    ],
  });
};

/* Get 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info' });
};

/* Get 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('index', { title: 'Add review' });
};
