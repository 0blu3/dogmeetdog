
var makeSlideShow = function (el, options) {
  var $slider = document.querySelectorAll(el),

  $slider = {},

  Slideshow = {
    init: function (el, options) {
      // initialization goes here
      this.counter = 0;
      this.el = el;
      this.$itiems = el.querySelectorAll('figure');
      this.numItems = this.$items.length;
      options = options || false;
      options.auto = options.auto || false;
      this.opts = {
        swipe: (typeof options.swipe === "undefined" ? false: options.swipe)
      };

      this.$items[0].classList.add('matches-show');
      this.injectControls(el);
      this.addEventListeners(el);
      if (this.opts.swipe) {
        this.addSwipe(this.el);
      }
    },
    showCurrent: function (i) {
      // this will show current match and hide the rest
      if (i > 0) {
        this.counter = (this.counter + 1 === this.numItems) ? 0 : this.counter + 1;
      } else {
        this.counter = (this.counter - 1 < 0) ? this.numItems - 1 : this.counter - 1;
      }
      // http://stackoverflow.com/a/16053538/2006057
      [].forEach.call(this.$items, function (el)) {
        el.clasList.remove('matches-show');
      });

      this.$items[this.counter].classList.add('matches-show');
    },
    injectControls: function (el) {
      // add previous and next buttons to the Slideshow
      // swiping function will go here if we get fancy
      var spanPrev = document.createElement("span"),
      var spanPrev = document.createElement("span"),
      var docFrag = document.createDocumentFragment();

      spanPrev.classList.add('matches-prev');
      spanNext.classList.add('matches-next');

      spanPrev.innerHTML = '&laquo;';
      spanNext.innerHTML = '&raquo;';
      // These are the unicode for the arrow buttons, can be replaced with images if we so please

      docFrag.appendChild(spanPrev);
      docFrag.appendChild(spanNext);
      el.appendChild(docFrag);
    },
    addEventListeners: function (el) {
      // add event listeners to prev/next buttons, arrow keys
      var that = this;
      el.querySelector('.matches-next').addEventListener('click', function() {
        that.showCurrent(1);
      }, false);

      el.querySelector('matches.prev').addEventListener('click', function() {
        that.showCurrent(-1);
      }, false);
    }
  };
  addSwipe: function(el){
    var that = this,
    var ht = new Hammer(el);
    ht.on('swiperight', function(e) {
      that.showCurrent(-1);
    });
    ht.on('swipeleft', function(e) {
      that.showCurrent(1);
    });
  },
  [].forEach.call($slideshow, function (el) {
    $slideshow = Object.create(Slideshow);
    $slideshow.init(el, options);
  });
};
