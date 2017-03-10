QUnit.module( "Check to see if tests are working", function (asserts) {
  QUnit.test('if 1, equal 1', function(asserts) {
      asserts.equal(1, 1, '1 does equal 1');
    });
});

QUnit.module( "See if function generateGenreUrl works", function (asserts) {
  QUnit.test('if id is 28, return the correct url', function(asserts) {
      asserts.equal(createsURL.generateGenreUrl(28), 'https://api.themoviedb.org/3/genre/28/movies?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US&include_adult=false&sort_by=created_at.asc', 'this creates the correct url');
    });
});


QUnit.module( "See if function generateGifUrl works and encodedes the space characters", function (asserts) {
  QUnit.test('If movie is Jurassic Park, return the correct url', function(asserts) {
      asserts.equal(createsURL.generateGifUrl('Jurassic Park'), 'http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&lang=en&limit=3&q=Jurassic%20Parkfilm', 'This creates the correct url');
    });
});

QUnit.module( "See if function generateTrailerObjectUrl works", function (asserts) {
  QUnit.test('If the movie id is 263115, return the correct url', function(asserts) {
      asserts.equal(createsURL.generateTrailerObjectUrl(263115), 'https://api.themoviedb.org/3/movie/263115/videos?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US', 'This creates the correct url');
    });
});

QUnit.module( "See if function generateTrailerUrl works", function (asserts) {
    QUnit.test('If the value of the key is ot2X367CtO4, return the correct url - Logan', function(asserts) {
      asserts.equal(createsURL.generateTrailerUrl('ot2X367CtO4'), 'https://www.youtube.com/embed/ot2X367CtO4', 'This creates the correct url');
    });
});
