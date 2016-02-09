// DOM ready
jQuery(document).ready(function($) {
  

// Add event listener to #more-about-me-trigger
document.getElementById("more-about-me-trigger").addEventListener("click", function(){
  console.log("triggered");
    document.getElementById("more-about-me-table").style.display = "block";
    document.getElementById("less-about-me-trigger").style.display = "inline-block";
    this.style.display = "none";
});

// Add event listener to #less-about-me-trigger
document.getElementById("less-about-me-trigger").addEventListener("click", function(){
  console.log("triggered");
    document.getElementById("more-about-me-table").style.display = "none";
    document.getElementById("more-about-me-trigger").style.display = "inline-block";
    this.style.display = "none";
});



});

