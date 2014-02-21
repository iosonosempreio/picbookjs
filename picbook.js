'use strict';

var _picbookOptions = null;

var picbookJs = (function(document){

  function picbookJs(options) {
    this.options = this._merge(this._options, options);
    this.init();
    _picbookOptions = this.options;
  }

  picbookJs.prototype = {

    count: 0,

    loaded: false,

    _options: {
      graph: 'https://graph.facebook.com/',
      limit: 15,
    },

    init: function() {
      this.loaded = false;
      this.fetch({
        where: '',
        callback: 'picbookJs.prototype._albumComplete'
      });
    },

    fetch: function(params) {
      var js = document.createElement('script'),
          options = _picbookOptions || this.options,
          url = options.graph + options.id + params.where,
          s;

      js.type = 'text/javascript';
      js.async = true;

      if (params.where.match(/photos/)) {
        // Retrieve photos, add limit parameter
        js.src = url + '?limit=' + options.limit + '&callback=' + params.callback;
      } else {
        js.src = url + '?callback=' + params.callback;
      }

      s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(js, s.nextSibling);
    },

    _albumComplete: function(response) {

      var options = _picbookOptions || this.options;
      this.album = response;
      this.count = response.count;
      this.fetch({
        where: '/photos',
        callback: 'picbookJs.prototype._photosComplete'
      });

      if (typeof options.albumLoaded === 'function') {
        options.albumLoaded();
      }
    },

    _photosComplete: function(response) {

      var options = _picbookOptions || this.options;
      this.photos = response.data;
      this.loaded = true;

      if (typeof options.photosLoaded  === 'function') {
        options.photosLoaded();
      }

    },

    _merge: function(a, b) {
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }

  };

  return picbookJs;

})(document);