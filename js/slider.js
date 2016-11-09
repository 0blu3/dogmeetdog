'use strict';

// var totalMatches = 0;
// var highestMatches = [];
//
//
//
// function ShowHighPercentageMatches(){
//   if (Dog.matchPercentage > 70) {
//
//   }
// }
//
// for (var i = 0; i < 3; i++){
//   var currentMatches = highestMatches[i];
//
//
//
//   var htmlImageId = 'highestMatch' + i;
// }


var makeSlideShow = function (el, options) {
  var $slider = document.querySelectorAll(el),

  $slider = {},

  Slideshow = {
    init: function (el, options) {
      // initialization goes here
    },
    showCurrent: function (i) {
      // this will show current match and hide the rest
    },
    injectControls: function (el) {
      // add previous and next buttons to the Slideshow
      // swiping function will go here if we get fancy
    },
    addEventListeners: function (el) {
      // add event listeners to prev/next buttons, arrow keys
    },
  };
}

var opts = {
  swipe: true;
};

makeSlideShow('.slider', opts);

initialization: function(el, options) {
  this.counter = 0;
  // keeps track of current match

  this.el = el;
  // current slideshow container
  // create this as a property on the current objects

  this.$items = el.querySelectorAll('figure');
  // a collection of all the individual slides

  this.numItems = this.$items.length;
  // the total number of slides

  options = options || {};
  // if options object not passed in, then set to empty object [1]

  options.auto = options.auto || false;

  this.opts = {
    swipe: (typeof options.swipe === "undefined") ? false: options.swipe
  };

  this.$items[0].classList.add('matches');
  // add 'matches' class to first figure so that the first slide is visible when the slideshow loads

  this.injectControls(el);

  this.addEventListeners(el);

  if(this.opts.swipe) {
    this.addSwipe(this.el);
  }
}

showcurrent: function(i) {
  if(i > 0) {
    this.counter = (this.counter + 1 === this.numItems) ? 0: this.counter +1;
  } else {
    this.counter = (this.counter - 1 < 0) ? this.numItems -1: this.counter -1;
  }
  [].forEach.call(this.$items, function(el) {
    el.classList.remove('matches');
  });
  this.$items[this.counter].classList.add('matches');
}

injectControls: function(el) {
  var spanPrev = document.createElement('span'),
      spanNext = document.createElement('span'),
      docFrag = document.createDocumentFragment();
  // build/inject swiping controls

  spanPrev.classList.add('matches-prev');
  spanNext.classList.add('matches-next');
  // adds classes

  spanPrev.innerHTML = '&laquo;';
  spanNext.innerHTML = '&raquo;';
  // adds contents

  docFrag.appendChild(spanPrev);
  docFrag.appendChild(spanNext);
  el.appendChild(docFrag);

}

addEventListeners: function(el) {
  var that = this;

  el.querySelector('.matches-next').addEventListener('click', function() {
    that.showCurrent(1);
  } false);

  el.querySelector('.matches-prev').addEventListener('click', function() {
    that.showcurrent(-1);
  }, false);

  el.onkeydown = function (e) {
    e = e || window.event;

    if (e.keyCode === 37) {
      that.showCurrent(-1);
    } else if (e.keyCode === 39) {
      that.showCurrent(1);
    }
  };
}


addSwipe: function(el) {
  var that = this,
        ht = new Hammer(el);

  ht.on('swiperight', function(e) {
    that.showCurrent(-1);
  });

  ht.on('swipeLeft', function(e) {
    that.showCurrent(1);
  });
}
