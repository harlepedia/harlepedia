
/* Main Scripts */

// Imports //

import moduleHomePage from "./pages/home-page";
import modulePage from "./pages/page";

// Module Calls //

function init(){

	if (document.querySelector(".global-modules")){


	}
	
	if (document.querySelector(".home-module")){

		moduleHomePage();
	}
	
	if (document.querySelector(".page-module")){

		modulePage();
    }
}

// Page Transition Config //

init();


