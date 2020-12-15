jQuery(document).ready(function () {
  var ajaxurl = "../wp-admin/admin-ajax.html";
  if (0 < jQuery(".fusion-login-nonce").length) {
    jQuery.get(
      ajaxurl,
      { action: "fusion_login_nonce" },
      function (response) {
        jQuery(".fusion-login-nonce").html(response);
      }
    );
  }
});

var wc_single_product_params = {
  i18n_required_rating_text: "Please select a rating",
  review_rating_required: "yes",
  flexslider: {
    rtl: false,
    animation: "slide",
    smoothHeight: true,
    directionNav: true,
    controlNav: "thumbnails",
    slideshow: false,
    animationSpeed: 500,
    animationLoop: false,
    allowOneSlide: false,
  },
  zoom_enabled: "1",
  zoom_options: [],
  photoswipe_enabled: "",
  photoswipe_options: {
    shareEl: false,
    closeOnScroll: false,
    history: false,
    hideAnimationDuration: 0,
    showAnimationDuration: 0,
  },
  flexslider_enabled: "1",
};