document.addEventListener("DOMContentLoaded", () => {
  let container_stats_img = document.querySelector("#stats--img"),
    // media_query_1024 = window.matchMedia("(min-width: 1024px)"),
    img_mobile = `<img loading="lazy" src="public/img/stats.png">`,
    img_desktop = `<img loading="lazy" src="public/img/stats1.png">`;

  // Creating functions to check the macthmedia
  const is_media_true = (container, element_mobile, element_desktop) => {
    if (window.screen.width < 1024) {
      container.innerHTML = element_mobile;
      console.log("Mobile");
    } else {
      container.innerHTML = element_desktop;
      console.log("Desktop");
    }
  };

  is_media_true(container_stats_img, img_mobile, img_desktop);
});
