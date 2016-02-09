function buildHeader(){

// Get targetted element
var element = document.getElementById('header');



tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

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







td.appendChild(contactEmail);
td.appendChild(contactPhone);
td.appendChild(contactSkype);

td.style.padding = "0px";
td.style.textAlign = "left";


// H1 Heading (Steven Jackson)
var td = tr.insertCell(0);

var heading = document.createElement("h1");
var headingtxt = document.createTextNode("Steven Jackson");
heading.appendChild(headingtxt)

var subHeading = document.createElement("h3");
var subHeadingtxt = document.createTextNode('"Do it once, Do it right"');
subHeading.appendChild(subHeadingtxt)

td.appendChild(heading);
td.appendChild(subHeadingtxt);  
td.style.padding = "5px 20px";
td.style.textAlign = "left";

// Profile Image
var td = tr.insertCell(0);

var profileImage = document.createElement("img");
profileImage.src = "img/steven-jackson.jpg";
profileImage.width = 200;

td.appendChild(profileImage);
td.style.padding = "5px 20px";
td.style.textAlign = "center";

	 // Write to Element
	 element.appendChild(tbl);
	}

	buildHeader()