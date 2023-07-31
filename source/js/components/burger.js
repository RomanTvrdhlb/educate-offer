import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import vars from "../_vars";

import {
  addCustomClass,
  toggleCustomClass,
  removeCustomClass,
  toggleClassInArray,
  removeClassInArray
} from "../functions/customFunctions";
  const { overlay, burgers, mainLinks, bodyEl} =
  vars;
  const mobileMenu = document.querySelector('.mobile-menu')

const mobileMenuHandler = function (overlay, mobileMenu, burgers) {
  burgers.map(function(btn){
    btn.addEventListener("click", function () {
      toggleClassInArray(burgers, "active");
      toggleCustomClass(mobileMenu, "active");
      toggleCustomClass(overlay, "active");
  
      if (!bodyEl.classList.contains("dis-scroll")) {
        disableScroll();
      } else {
        enableScroll('');
      }
    });
  })
};

const hideMenuHandler = function (overlay, mobileMenu, burgers) {
  removeCustomClass(mobileMenu, "active");
  removeClassInArray(burgers, "active");
  removeCustomClass(overlay, "active");
  // enableScroll('');
};


if (overlay) {
  mobileMenuHandler(overlay, mobileMenu, burgers);
  overlay.addEventListener("click", function (e) {
    if (e.target.classList.contains("overlay")) {
      hideMenuHandler(overlay, mobileMenu, burgers);
    }
  });
}
