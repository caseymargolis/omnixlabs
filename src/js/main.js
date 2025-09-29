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


// Landing Page Pixel
(function () {
  function fetchLandingPage() {
    var url = 'https://connect.blockboardtech.com/track/t?e=Impression&vr=1&d=eJwzNDc1MzS2NDc2tzQ10DG3NLHQMbEws7DQMbU0MzPTMTSzNNIxtjQw1DHQCc3LzssvzwOyUCEIoQuAKagw2AwDnbTEnOJUHUMAVf4YHw--&m=1';
    var img = new Image();
    img.src = url;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchLandingPage);
  } else {
    fetchLandingPage();
  }
})();

// Completed Form Fill Event Pixel
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('OmniXContactForm24');

  if (form) {
    form.addEventListener('submit', function (e) {
      // Collect form data
      const formData = {
        firstName: document.querySelector('[name="first-name"]')?.value || '',
        lastName: document.querySelector('[name="last-name"]')?.value || '',
        companyName: document.querySelector('[name="company-name"]')?.value || '',
        city: document.querySelector('[name="city"]')?.value || '',
        state: document.querySelector('[name="State"]')?.value || '',
        zipCode: document.querySelector('[name="zip-code"]')?.value || '',
        industry: document.querySelector('[name="industry"]')?.value || ''
      };

      // Fire Completed Form Fill pixel
      var url = `https://connect.blockboardtech.com/track/t?e=Impression&vr=1&d=eJwzNDc1MzS2NDczN7E00zG3NLHQMbEws7DUMbU0MzPTMTSzNNYxtjQw0jHQCc3LzssvzwOyUCEIoQuAKagw2AwDnbTEnOJUHUMAWioYKw--&m=1&op5=${encodeURIComponent(formData.firstName)}&op6=${encodeURIComponent(formData.lastName)}&op7=${encodeURIComponent(formData.companyName)}&op8=${encodeURIComponent(formData.industry)}&op9=${encodeURIComponent(formData.city + ', ' + formData.state + ' ' + formData.zipCode)}&op10=${encodeURIComponent(window.location.href)}`;

      var img = new Image();
      img.src = url;

      console.log('Form submitted - firing completion pixel');
    });
  }
});
