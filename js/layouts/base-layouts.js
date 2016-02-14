/*********************************************
 Includes function
 *********************************************/

function setupComponents(){
document.write('<script type="text/javascript" src="js/layouts/components/table-gen.js"></script>');
document.write('<script type="text/javascript" src="js/layouts/components/about-me.js"></script>');
document.write('<script type="text/javascript" src="js/layouts/components/skills-matrix.js"></script>');
document.write('<script type="text/javascript" src="js/layouts/components/employment.js"></script>');
document.write('<script type="text/javascript" src="js/layouts/components/profile-links.js"></script>');

}

/*********************************************
 Call build functions
 *********************************************/
 buildFooter();
 buildHeader();

/*********************************************
 Build Header
 *********************************************/

 function buildHeader(){

// Get targetted element
var element = document.getElementById('header');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();

// Contact details
var td = tr.insertCell(0);

// Email
var contactEmail = document.createElement("p");
var contactEmailtxt = document.createTextNode("Email: " + steven_jackson.email);
contactEmail.appendChild(contactEmailtxt)

// Phone Number
var contactPhone = document.createElement("p");
var contactPhonetxt = document.createTextNode("Contact Number: " + steven_jackson.contact_number);
contactPhone.appendChild(contactPhonetxt)

// Skype
var contactSkype = document.createElement("p");
var contactSkypetxt = document.createTextNode("Skype: " + steven_jackson.skype);
contactSkype.appendChild(contactSkypetxt)


// Append elements to td
td.appendChild(contactEmail);
td.appendChild(contactPhone);
td.appendChild(contactSkype);

// td styling
td.style.padding = "0px";
td.style.verticalAlign = "bottom";
td.style.textAlign = "left";


// H1 Heading (Steven Jackson)
var td = tr.insertCell(0);

// Main Heading
var heading = document.createElement("h1");
var headingtxt = document.createTextNode("Steven Jackson");
heading.appendChild(headingtxt)

// Sub Heading
var subHeading = document.createElement("h3");
var subHeadingtxt = document.createTextNode('"Do it once, Do it right"');
subHeading.appendChild(subHeadingtxt)

// Append heading and subheading to td
td.appendChild(heading);
td.appendChild(subHeadingtxt);  
td.style.padding = "5px 20px";
td.style.textAlign = "left";
td.style.verticalAlign = "top";

// Profile Image
var td = tr.insertCell(0);
var profileImage = document.createElement("img");
profileImage.src = "http://steven-daniell-jackson.github.io/img/steven-jackson.jpg";
profileImage.width = 200;

td.appendChild(profileImage);
td.style.padding = "5px 20px";
td.style.textAlign = "center";


// Write to Element
element.appendChild(tbl);
} //End function

/*********************************************
 Build Footer
 *********************************************/

 function buildFooter(){

// Get targetted element
var element = document.getElementById('footer');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

/*********************************************

 References

 *********************************************/

// References Heading
var ReferencesHeading = document.createElement("h4");
ReferencesHeading.style.fontSize = "32px";
var ReferencesHeadingtxt = document.createTextNode("References");
ReferencesHeading.appendChild(ReferencesHeadingtxt)

td.appendChild(ReferencesHeading);

// Append elements to td

// Dawie
// Name and Last name
var p = document.createElement("p");
var referenceDetails = document.createTextNode(dawie.firstname + " " + dawie.lastname);
p.appendChild(referenceDetails);

td.appendChild(p);

// Job Title
var p = document.createElement("p");
var referenceDetails = document.createTextNode(dawie.job_title);
p.appendChild(referenceDetails);

td.appendChild(p);

// Contact number
var p = document.createElement("p");
var referenceDetails = document.createTextNode(dawie.contact_number);
p.appendChild(referenceDetails);

td.appendChild(p);

// Debug
// console.log(dawie);

// Single line break
var br = document.createElement("br");
td.appendChild(br);

// Ashraf
// Name and Last name
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ashraf.firstname + " " + ashraf.lastname);
p.appendChild(referenceDetails);

td.appendChild(p);

// Job Title
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ashraf.job_title);
p.appendChild(referenceDetails);

td.appendChild(p);

// Contact number
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ashraf.contact_number);
p.appendChild(referenceDetails);

td.appendChild(p);

// Single line break
var br = document.createElement("br");
td.appendChild(br);


// Ryan
// Name and Last name
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ryan.firstname + " " + ryan.lastname);
p.appendChild(referenceDetails);

td.appendChild(p);

// Job Title
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ryan.job_title);
p.appendChild(referenceDetails);

td.appendChild(p);

// Contact number
var p = document.createElement("p");
var referenceDetails = document.createTextNode(ryan.contact_number);
p.appendChild(referenceDetails);

td.appendChild(p);

// td styling
td.style.padding = "0px";
td.style.textAlign = "left";
td.style.padding = "0px 0px 0px 5%";


/*********************************************

 Contact Details

 *********************************************/
var td = tr.insertCell(0);


// Contact Details Heading
var contactDetailsHeading = document.createElement("h4");
contactDetailsHeading.style.fontSize = "32px";
var contactDetailsHeadingtxt = document.createTextNode("Contact details");
contactDetailsHeading.appendChild(contactDetailsHeadingtxt)

// Email
var contactEmail = document.createElement("p");
var contactEmailtxt = document.createTextNode("Email: " + steven_jackson.email);
contactEmail.appendChild(contactEmailtxt)

// Phone Number
var contactPhone = document.createElement("p");
var contactPhonetxt = document.createTextNode("Contact Number: " + steven_jackson.contact_number);
contactPhone.appendChild(contactPhonetxt)

// Skype
var contactSkype = document.createElement("p");
var contactSkypetxt = document.createTextNode("Skype: " + steven_jackson.skype);
contactSkype.appendChild(contactSkypetxt)

// Append elements to td
td.appendChild(contactDetailsHeading);
td.appendChild(contactEmail);
td.appendChild(contactPhone);
td.appendChild(contactSkype);

// td styling
td.style.padding = "0px 0px 0px 5%";
td.style.textAlign = "left";
td.style.verticalAlign = "top";

/*********************************************

Sub Footer

 *********************************************/

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Horizontal Rule
var hr = document.createElement("hr");
td.appendChild(hr);
td.colSpan = 2;

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

var p = document.createElement("p");
var note = document.createTextNode("Note: Github hosting only allows HTML, CSS and JS.");
p.appendChild(note);
td.appendChild(p);

var p = document.createElement("p");
var note = document.createTextNode("Written by Steven Jackson - 2016");
p.appendChild(note)

// td styling
td.appendChild(p);
td.style.margin = "0px";
td.style.textAlign = "center";
td.colSpan = 2;


// Write to Element
element.appendChild(tbl);
} //End function
