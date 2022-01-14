import carrusel from "./modules/carrusel.js";
import showTabs from "./modules/show_tabs_2.js";
import preloader from "./modules/preloader.js";
import contactFormValidation from "./modules/contact_form_validation.js";


document.addEventListener("DOMContentLoaded", (e)=>{
   carrusel();
   showTabs("[data-tab]", "[data-content]");
   contactFormValidation();
});

preloader();