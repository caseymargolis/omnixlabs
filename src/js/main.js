// On Scroll Animations
function animateOnScroll() {
    //Gets or sets the number of pixels that an element's content is scrolled vertically.
    var pageTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // The innerHeight property returns the height of a window's viewport.
    var windowHeight =
      window.innerHeight ||
      doc.documentElement.clientHeight ||
      doc.getElementsByTagName("body")[0].clientHeight;
  
    var pageBottom = pageTop + windowHeight;
    var tags = document.getElementsByClassName("on-scroll-animation");
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if (tag.offsetTop + 200 < pageBottom) {
        tag.classList.add("visible");
      }
    }
  }
  
  if (document.getElementsByClassName("on-scroll-animation")) {
    window.addEventListener("scroll", animateOnScroll);
  }