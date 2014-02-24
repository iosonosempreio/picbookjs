/* picbookJs 0.3.0 | Copyright (C) 2014 Henrique Alves, http://henriquea.github.io/picbookjs */
var _picbookOptions = null;

var picbookJs = (function(document){

  'use strict';

  function picbookJs(options) {

    /*jslint validthis: true */
    this.options = this.extend(this._options, options);
    this.init();
    _picbookOptions = this.options;

  }

  picbookJs.prototype = {

    count: 0,

    loaded: false,

    dom: {},

    _options: {
      graph: 'https://graph.facebook.com/',
      limit: 10,
    },

    init: function() {

      this.loaded = false;
      this.getAlbum({
        callback: 'picbookJs.prototype.albumComplete'
      });

      // Setup DOM
      this.dom.wrapper = document.querySelector('.picbook');
      this.dom.title = document.createElement('h3');
      this.dom.title.classList.add('album-title');
      this.dom.photos = document.createElement('ul');
      this.dom.photos.classList.add('photo-list');
      this.dom.wrapper.appendChild(this.dom.title);
      this.dom.wrapper.appendChild(this.dom.photos);

    },

    getAlbum: function(params) {

      var js = document.createElement('script'),
          options = _picbookOptions || this.options,
          url = options.graph + options.albumId,
          s;

      js.type = 'text/javascript';
      js.async = true;
      js.src = url + '?callback=' + params.callback;

      s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(js, s.nextSibling);

    },

    // TODO: adpated the method for paging the data
    getPhotos: function(params) {

      var js = document.createElement('script'),
          options = _picbookOptions || this.options,
          url = options.graph + options.albumId + '/photos',
          s;

      js.type = 'text/javascript';
      js.async = true;
      js.src = url + '?limit=' + options.limit + '&callback=' + params.callback;

      s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(js, s.nextSibling);

    },

    // https://developers.facebook.com/docs/reference/api/album
    albumComplete: function(response) {

      var options = _picbookOptions || this.options;

      this.album = response;
      this.count = response.count;
      this.getPhotos({
        callback: 'picbookJs.prototype.photosComplete'
      });

      if (typeof options.albumLoaded === 'function') {
        options.albumLoaded();
      }

      this.dom.title.innerHTML = response.name;

    },

    // https://developers.facebook.com/docs/graph-api/reference/photo
    photosComplete: function(response) {

      var options = _picbookOptions || this.options;

      this.photos = response.data;
      this.loaded = true;
      this.createPhotos();

      if (typeof options.photosLoaded  === 'function') {
        options.photosLoaded();
      }

    },

    createPhotos: function() {

      var arrUrl = [], imgSrc, i, len, image, li;

      for (i=0, len = this.photos.length; i < len; i++) {

        image = this.photos[i].images[0];
        li = document.createElement('li');
        li.classList.add('photo-list-item');
        this.dom.photos.appendChild(li);

        arrUrl = image.source.split('/').splice(0);
        arrUrl.splice(5,0,'p206x206');
        imgSrc = arrUrl.join('/');

        li.innerHTML = '<img src="' + imgSrc +'">';

      }

    },

    extend: function(a, b) {

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