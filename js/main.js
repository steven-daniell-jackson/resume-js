jQuery(document).ready(function($) {
  
document.getElementById("more-about-me-trigger").addEventListener("click", function(){
  console.log("triggered");
    document.getElementById("more-about-me-table").style.display = "block";
    document.getElementById("less-about-me-trigger").style.display = "inline-block";
    this.style.display = "none";
});

document.getElementById("less-about-me-trigger").addEventListener("click", function(){
  console.log("triggered");
    document.getElementById("more-about-me-table").style.display = "none";
    document.getElementById("more-about-me-trigger").style.display = "inline-block";
    this.style.display = "none";
});



});

