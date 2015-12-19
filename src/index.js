var PhotoSwipe = require('photoswipe/dist/photoswipe.min.js');
var PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default.min.js');
var moment = require('moment');

var BASE_URL = 'https://s3.eu-central-1.amazonaws.com/jablon-me/my_gallery';

// build items array
var items = [{
  id: 'IMG_0235.jpg',
  w: 1280,
  h: 1280,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 7)
}, {
  id: 'IMG_0236.jpg',
  w: 1280,
  h: 960,
  location: 'Exelmans, Paris, France',
  date: new Date (2015, 10, 1)
}, {
  id: 'IMG_0237.jpg',
  w: 1280,
  h: 960,
  location: '<i>Pont du Garigliano</i>, Paris, France',
  date: new Date (2015, 10, 1)
}, {
  id: 'IMG_0240.jpg',
  w: 1280,
  h: 1280,
  location: 'Lourmel, Paris, France',
  date: new Date (2015, 9, 18)
}, {
  id: 'IMG_0241.jpg',
  w: 1024,
  h: 1280,
  location: 'Paris, France',
  date: new Date (2015, 8, 27)
}, {
  id: 'IMG_0242.jpg',
  w: 1280,
  h: 960,
  location: 'Desnouettes, Paris, France',
  date: new Date (2015, 9, 9)
}, {
  id: 'IMG_0243.jpg',
  w: 1280,
  h: 958,
  location: 'Desnouettes, Paris, France',
  date: new Date (2015, 9, 27)
}, {
  id: 'IMG_0245.jpg',
  w: 1024,
  h: 1280,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 7)
}, {
  id: 'IMG_0248.jpg',
  w: 1280,
  h: 960,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 8)
}, {
  id: 'IMG_0250.jpg',
  w: 1280,
  h: 1280,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 8)
}, {
  id: 'IMG_0253.jpg',
  w: 1280,
  h: 960,
  location: 'Issy-les-Moulineaux, France',
  date: new Date (2015, 10, 9)
}, {
  id: 'IMG_0262.jpg',
  w: 1280,
  h: 949,
  location: 'Lourmel, Paris, France',
  date: new Date (2015, 10, 11)
}, {
  id: 'IMG_0265.jpg',
  w: 1280,
  h: 1280,
  location: 'Lourmel, Paris, France',
  date: new Date (2015, 10, 11)
}, {
  id: 'IMG_0270.jpg',
  w: 1280,
  h: 1280,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 8)
}, {
  id: 'IMG_0272.jpg',
  w: 1280,
  h: 1280,
  location: 'Lourmel, Paris, France',
  date: new Date (2015, 10, 14),
  title: 'Empty <i>Métro</i>. (11/14/2015, Lourmel, Paris, France)'
}, {
  id: 'IMG_0306.jpg',
  w: 1024,
  h: 1280,
  location: 'The Louvre, Paris, France',
  date: new Date (2015, 10, 21),
}, {
  id: 'IMG_0307.jpg',
  w: 1024,
  h: 1280,
  location: 'The Louvre, Paris, France',
  date: new Date (2015, 10, 21),
}, {
  id: 'IMG_0309.jpg',
  w: 1280,
  h: 1280,
  location: 'Paris, France',
  date: new Date (2015, 10, 21),
}, {
  id: 'IMG_0312.jpg',
  w: 1280,
  h: 960,
  location: '<i>Arc de Triomphe</i>, Paris, France',
  date: new Date (2015, 10, 18)
}, {
  id: 'IMG_0314.jpg',
  w: 1280,
  h: 960,
  location: 'Issy-les-Moulineaux, France',
  date: new Date (2015, 10, 19)
}, {
  id: 'IMG_0324.jpg',
  w: 1280,
  h: 1280,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 8)
}, {
  id: 'IMG_0325.jpg',
  w: 1280,
  h: 1024,
  location: 'Paris, France',
  date: new Date (2015, 10, 29)
}, {
  id: 'IMG_0327.jpg',
  w: 1024,
  h: 1280,
  location: 'The Louvre, Paris, France',
  date: new Date (2015, 10, 21)
}, {
  id: 'IMG_0329.jpg',
  w: 1280,
  h: 1024,
  location: '<i>La Concergierie</i>, Paris, France',
  date: new Date (2015, 10, 29)
}];

items.sort(function(itemA, itemB) {
  return itemA.date - itemB.date;
});

items.unshift({
  id: 'IMG_0230.jpg',
  w: 960,
  h: 960,
  location: 'Revigny-sur-Ornain, France',
  date: new Date (2015, 10, 7)
});

// Fuck old browsers, progress is underway.
items = items.map (function (item) {
  item.src = BASE_URL + '/' + item.id;
  item._src = BASE_URL + '/thumbs/' + item.id;
  item.title = '(' + moment(item.date).format('MM/DD/YYYY') + ', ' + item.location + ')';
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
  thumbLeft.className = 'thumb thumb-left';
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
