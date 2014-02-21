'use strict';

var _picbookOptions = null;

window.picbook = (function(document){

  function picbook(options) {
    this.options = this._merge(this._options, options);
    this._init();
    _picbookOptions = this.options;
  }

  picbook.prototype = {

    count: 0,

    loaded: false,

    _options: {
      graph: 'https://graph.facebook.com/',
      limit: 15,
    },

    _init: function() {
      this.loaded = false;
      this._fetch({
        where: '',
        callback: 'picbook.prototype._albumComplete'
      });
    },

    _fetch: function(params) {
      var js = document.createElement('script'),
          options = _picbookOptions || this.options,
          url = options.graph + options.id + params.where,
          s;

      js.type = 'text/javascript';
      js.async = true;

      if (params.where.match(/photos/)) {
        // photos – add limit parameter
        js.src = url + '?limit=' + options.limit + '&callback=' + params.callback;
      } else {
        js.src = url + '?callback=' + params.callback;
      }

      s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(js, s.nextSibling);
    },

    _albumComplete: function(response) {
      this.album = response;
      this.count = response.count;
      this._fetch({
        where: '/photos',
        callback: 'picbook.prototype._photosComplete'
      });
    },

    _photosComplete: function(response) {

      var options = _picbookOptions || this.options;
      this.photos = response.data;
      this.loaded = true;

      if (typeof options.callback  === 'function') {
        options.callback();
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

  return picbook;

})(document);