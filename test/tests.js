QUnit.module( "Check to see if tests are working", function (asserts) {
  QUnit.test('if 1, equal 1', function(asserts) {
      asserts.equal(1, 1, '1 does equal 1');
    });
});

QUnit.module( "See if function generateGenreUrl works", function (asserts) {
  QUnit.test('if id is 28, return the corrent url', function(asserts) {
      asserts.equal(createsURL.generateGenreUrl(28), 'https://api.themoviedb.org/3/genre/28/movies?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US&include_adult=false&sort_by=created_at.asc', 'this creates the correct url');
    });
});
