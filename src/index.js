var PhotoSwipe = require ('photoswipe/dist/photoswipe.min.js');
var PhotoSwipeUI_Default = require ('photoswipe/dist/photoswipe-ui-default.min.js');

var BASE_URL = 'https://s3.eu-central-1.amazonaws.com/jablon-me/my_gallery';

// build items array
var items = [{
  id: 'IMG_0230.jpg',
  w: 960,
  h: 960,
  title: 'Autumn. Fallen leaves. Me. (11/07/2015, Revigny-sur-Ornain, France)'
}, {
  id: 'IMG_0235.jpg',
  w: 1280,
  h: 1280,
  title: 'Red Floor at Day. (11/07/2015, Revigny-sur-Ornain, France)'
}, {
  id: 'IMG_0236.jpg',
  w: 1280,
  h: 960,
  title: 'Parisian Rooftops. (11/01/2015, Exelmans, Paris, France)'
}, {
  id: 'IMG_0237.jpg',
  w: 1280,
  h: 960,
  title: 'Pont du Garigliano. (11/01/2015, Pont du Garigliano, Paris, France)'
}, {
  id: 'IMG_0240.jpg',
  w: 1280,
  h: 1280,
  title: 'Métro Lourmel (line 8). (10/18/2015, Lourmel, Paris, France)'
}, {
  id: 'IMG_0241.jpg',
  w: 1024,
  h: 1280,
  title: 'Galerie Vivienne. (09/27/2015, Paris, France)'
}, {
  id: 'IMG_0242.jpg',
  w: 1280,
  h: 960,
  title: 'View from my balcony I. (10/09/2015, Desnouettes, Paris, France)'
}, {
  id: 'IMG_0243.jpg',
  w: 1280,
  h: 958,
  title: 'View from my balcony II. (10/27/2015, Desnouettes, Paris, France)'
}, {
  id: 'IMG_0245.jpg',
  w: 1024,
  h: 1280,
  title: 'Fallen leaves. (11/08/2015, Revigny-sur-Ornain, France)'
}, {
  id: 'IMG_0248.jpg',
  w: 1280,
  h: 960,
  title: 'Leafway to home. (11/08/2015, Revigny-sur-Ornain, France)'
}, {
  id: 'IMG_0250.jpg',
  w: 1280,
  h: 1280,
  title: 'Stone marches. (11/08/2015, Revigny-sur-Ornain, France)'
}, {
  id: 'IMG_0253.jpg',
  w: 1280,
  h: 960,
  title: 'Sunset in Paris. (11/09/2015, Issy-les-Moulineaux, France)'
}, {
  id: 'IMG_0262.jpg',
  w: 1280,
  h: 949,
  title: '106. (11/11/2015, Lourmel, Paris, France)'
}, {
  id: 'IMG_0265.jpg',
  w: 1280,
  h: 1280,
  title: 'Vélibs. (11/11/2015, Lourmel, Paris, France)'
}];

// Fuck old browsers, progress is underway.
items = items.map (function (item) {
  item.src = BASE_URL + '/' + item.id;
  item._src = BASE_URL + '/thumbs/' + item.id;
  return item;
});

var pswpElement = document.querySelectorAll('.pswp')[0];
function openInPhotoSwipe (index) {
  return function () {
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, { index: index });
    gallery.init ();
  };
};


var thumbs = document.getElementById('thumbs');
var row, thumbLeft, thumbMiddle, thumbRight;
for (var i = 0; i < Math.max (items.length/3); i++) {
  row = document.createElement('div');
  row.className = 'thumb-row';

  thumbLeft = document.createElement('div');
  thumbLeft.className = 'thumb';
  thumbLeft.setAttribute ('style', 'background-image: url(\''+ items[i*3]._src + '\')');
  thumbLeft.onclick = openInPhotoSwipe (i*3);
  row.appendChild(thumbLeft);

  if (items[i*3+1]) {
    thumbMiddle = document.createElement('div');
    thumbMiddle.className = 'thumb thumb-middle';
    thumbMiddle.setAttribute ('style', 'background-image: url(\''+ items[i*3+1]._src + '\')');
    thumbMiddle.onclick = openInPhotoSwipe (i*3 + 1);
    row.appendChild(thumbMiddle);
  }

  if (items[i*3+2]) {
    thumbRight = document.createElement('div');
    thumbRight.className = 'thumb thumb-right';
    thumbRight.setAttribute ('style', 'background-image: url(\''+ items[i*3+2]._src + '\')');
    thumbRight.onclick = openInPhotoSwipe (i*3 + 2);
    row.appendChild(thumbRight);
  }

  thumbs.appendChild(row);
}
