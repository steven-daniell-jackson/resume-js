// DOC ready
jQuery(document).ready(function($) {



/*********************************************
 About Me Event listeners
 *********************************************/

// Add event listener to #more-about-me-trigger
document.querySelector("#more-about-me-trigger").addEventListener("click", function(){

	// Debug
	// console.log("triggered");

	document.querySelector("#more-about-me-table").style.display = "block";
	document.querySelector("#less-about-me-trigger").style.display = "inline-block";
	this.style.display = "none";
});

// Add event listener to #less-about-me-trigger
document.querySelector("#less-about-me-trigger").addEventListener("click", function(){

	// Debug
	// console.log("triggered");

	document.querySelector("#more-about-me-table").style.display = "none";
	document.querySelector("#more-about-me-trigger").style.display = "inline-block";
	this.style.display = "none";
});


/*********************************************
 Skills Matrix Event listeners
 *********************************************/

// Run the first instance on page load
skillsMatrixListeners();


function skillsMatrixListeners(){
	var skills_matrix_btn = document.querySelectorAll(".skills-matrix-btn");

// Loop through all the .skills-matrix-btn elements and add a event
for (var i = skills_matrix_btn.length - 1; i >= 0; i--) {

	skills_matrix_btn[i].addEventListener("click", function(e){
		var elementID = this.getAttribute('id');

// Redraw table based on the button selected and readd listener

switch (elementID) {

	case 'languages':
	redrawSkillsMatrix(languages);
	skillsMatrixListeners();
	break;
	case 'frameworks':
	redrawSkillsMatrix(frameworks);
	skillsMatrixListeners();
	break;

	case 'platforms':
	redrawSkillsMatrix(platforms);
	skillsMatrixListeners();
	break;

	case 'it_related':
	redrawSkillsMatrix(it_related);
	skillsMatrixListeners();
	break;

	case 'other':
	redrawSkillsMatrix(other);
	skillsMatrixListeners();
	break;


};
});
}

} //End function


/*********************************************
 Profile Links Event listeners
 *********************************************/
 
// Run the first instance on page load
profileLinkListerners();

function profileLinkListerners(){
	var skills_matrix_btn = document.querySelectorAll(".profile-btns");

// Loop through all the .skills-matrix-btn elements and add a event
for (var i = skills_matrix_btn.length - 1; i >= 0; i--) {
	skills_matrix_btn[i].addEventListener("click", function(e){
		var elementID = this.getAttribute('id');
		clearNotification();
		profileLinksNotification(elementID);
		
	});
}

} //End function






});	// DOC ready


