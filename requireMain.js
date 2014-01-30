requirejs.config({
  baseUrl: '',
  paths: {
    'flight': 'components/flight'
  }
});

require(
  [
    'flight/lib/debug'
  ],

  function(debug) {
    debug.enable(true);
    require(['app/boot/page'], function(initialize) {
      initialize();
    });
  }
);
