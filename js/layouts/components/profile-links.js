/*********************************************
 Build Profile Links
 *********************************************/

profileLinkButtons ()
profileLinksNotification();


/*********************************************
 profileLinkButtons function
 *********************************************/
function profileLinkButtons (){

// Get targetted element
var element = document.getElementById('profile-links-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Profile Links Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "42px";
var txt = document.createTextNode("Profile Links");
h4.appendChild(txt)

td.appendChild(h4);
td.className = "profile-links-heading";
td.style.textAlign = "center";
td.colSpan = 10;


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);


// Build button
var td = tr.insertCell(0);
var i = document.createElement("i");
var br = document.createElement("br");
var a = document.createElement("a");
var txt = document.createTextNode("Screenshot Portfolio");
i.className = "fa fa-picture-o";
i.style.fontSize = "32px";
a.id ="portfolio";
a.href = "#profile-links-table";
a.className = "profile-btns";
a.appendChild(i);
a.appendChild(br);
a.appendChild(txt);
td.width = "25%";
td.style.textAlign = "center";
td.appendChild(a);


// Build button
var td = tr.insertCell(0);
var i = document.createElement("i");
var x = document.createElement("i");
var br = document.createElement("br");
var a = document.createElement("a");
var txt = document.createTextNode("Google Drive");
i.className = "fa fa-google";
x.className = "fa fa-hdd-o";
i.style.fontSize = "32px";
x.style.fontSize = "32px";
a.id ="google";
a.href = "#profile-links-table";
a.className = "profile-btns";
a.appendChild(i);
a.appendChild(x);
a.appendChild(br);
a.appendChild(txt);
td.width = "25%";
td.style.textAlign = "center";
td.appendChild(a);


// Build button
var td = tr.insertCell(0);
var i = document.createElement("i");
var br = document.createElement("br");
var a = document.createElement("a");
var txt = document.createTextNode("Github");
i.className = "fa fa-github-square";
i.style.fontSize = "32px";
a.id ="github";
a.href = "#profile-links-table";
a.className = "profile-btns";
a.appendChild(i);
a.appendChild(br);
a.appendChild(txt);
td.width = "25%";
td.style.textAlign = "center";
td.appendChild(a);


// Build button
var td = tr.insertCell(0);
var i = document.createElement("i");
var br = document.createElement("br");
var a = document.createElement("a");
var txt = document.createTextNode("LinkedIn");
i.className = "fa fa-linkedin-square";
i.style.fontSize = "32px";
a.id ="linkedin";
a.href = "#profile-links-table";
a.className = "profile-btns";
a.appendChild(i);
a.appendChild(br);
a.appendChild(txt);
td.width = "25%";
td.style.textAlign = "center";
td.appendChild(a);
td.height = "100px";

// Write to Element
element.appendChild(tbl);

} //End function




/*********************************************
 Builds Notification table
 Parameter: elementsID

 Accepts the selected elements ID
 *********************************************/

function profileLinksNotification(elementID){

// Get targetted element
var element = document.getElementById('profile-links-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Create single line break
var br = document.createElement("br");

// Build notification based on element's ID
switch (elementID) {

// Create notification message
case 'linkedin':
var a = document.createElement("a");
var txt = document.createTextNode("My");
var txt2 = document.createTextNode(" LinkedIn ");
var txt3 = document.createTextNode("Profile");

a.target = "_blank";
a.href = "https://za.linkedin.com/pub/steven-jackson/b3/978/199";
a.appendChild(txt2);

td.appendChild(txt);
td.appendChild(a);
td.appendChild(txt3);

td.width = "100%";
td.className = "notification";
td.style.textAlign = "center";

break;

// Create notification message
case 'github':
var a = document.createElement("a");
var txt = document.createTextNode("My");
var txt2 = document.createTextNode(" Github ");
var txt3 = document.createTextNode("Profile");

a.target = "_blank";
a.href = "https://github.com/steven-daniell-jackson/";

a.appendChild(txt2);
td.appendChild(txt);
td.appendChild(a);
td.appendChild(txt3);

td.width = "100%";
td.className = "notification";
td.style.textAlign = "center";

break;

// Create notification message
case 'portfolio':
var br2 = document.createElement("br");
var a = document.createElement("a");
var a2 = document.createElement("a");
var txt = document.createTextNode("Due to the amount of Screenshots. This has been segmented");
var txt2 = document.createTextNode("View Screenshot Portfolio");
var txt3 = document.createTextNode("View Screenshot Portfolio Angular App - Inprogress");

a.target = "_blank";
a.href = "http://steven-daniell-jackson.github.io/screenshot_portfolio/";
a2.target = "_blank";
a2.href = "http://steven-daniell-jackson.github.io/screenshot_portfolio_app/#/";
a.appendChild(txt2);
a2.appendChild(txt3);

td.appendChild(br);
td.appendChild(txt);
td.appendChild(br);
td.appendChild(a);
td.appendChild(br2);
td.appendChild(a2);

td.width = "100%";
td.className = "notification";
td.style.textAlign = "center";
break;

// Create notification message
case 'google':
var a = document.createElement("a");
var txt = document.createTextNode("Google Drive Document containing Work Done, Portfolio of Websites worked on, Skills Matrix and Responsibilies. ");
var txt2 = document.createTextNode("View Google Drive Document");

a.target = "_blank";
a.href = "https://docs.google.com/spreadsheets/d/1s7Or_0nZ1YYS3KibGAVgGdPnjmqB6iYWQPnXvEVpUmw/edit?usp=sharing";
a.appendChild(txt2);

td.appendChild(txt);
td.appendChild(br);
td.appendChild(a);

td.width = "100%";
td.className = "notification";
td.style.textAlign = "center";

break;

default: 
td.className = "notification";
break;


};


td.height = "100px";
// Write to Element
element.appendChild(tbl);

} //End function

// Remove generated table for a new instance
function clearNotification(e) {

	var element = document.querySelector('.notification');
	
	// Debug
	// console.log(element);

	element.parentNode.parentNode.parentNode.remove();


} //End function