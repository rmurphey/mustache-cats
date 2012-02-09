dojo.provide('client.components.FlickrBomb');

mulberry.component('FlickrBomb', {
  componentTemplate : dojo.cache('client.components', 'FlickrBomb/FlickrBomb.mustache'),

  prep : function() {

  },

  init : function() {
    flickrBomb().bomb();
  }
});
