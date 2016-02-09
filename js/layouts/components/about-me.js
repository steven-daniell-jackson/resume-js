function buildAboutMe(){

// Get targetted element
var element = document.getElementById('about-me-table');

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
var ReferencesHeadingtxt = document.createTextNode("Summary");
ReferencesHeading.appendChild(ReferencesHeadingtxt)

td.appendChild(ReferencesHeading);

// Append elements to td


// Objective text
var p = document.createElement("p");
var objectivetxt = document.createTextNode("Name: " + steven_jackson.firstname + " " + steven_jackson.lastname);
p.appendChild(objectivetxt)
td.appendChild(p);

// Objective text
var p = document.createElement("p");
var objectivetxt = document.createTextNode("Date of birth: " + steven_jackson.dateofbirth);
p.appendChild(objectivetxt)
td.appendChild(p);

// Objective text
var p = document.createElement("p");
var objectivetxt = document.createTextNode("Nationality: " + steven_jackson.nationality);
p.appendChild(objectivetxt)
td.appendChild(p);

// Objective text
var p = document.createElement("p");
var objectivetxt = document.createTextNode("Home Language: " + steven_jackson.home_language);
p.appendChild(objectivetxt)
td.appendChild(p);

// Objective text
var a = document.createElement("a");
a.href = "http://www.16personalities.com/intj-personality";
a.target = "_blank";
var objectivetxt = document.createTextNode("Personality type: " + steven_jackson.personality_type);
a.appendChild(objectivetxt)
td.appendChild(a);








// td styling
td.style.padding = "0px";
td.style.textAlign = "left";
td.width = "50%";
td.style.padding = "0px 0px 0px 15%";


/*********************************************

Objective

 *********************************************/
var td = tr.insertCell(0);


// Objective Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "32px";
var objectiveHeading = document.createTextNode("Objective");
h4.appendChild(objectiveHeading)

// Objective text
var p = document.createElement("p");
var objectivetxt = document.createTextNode(about_me.objective);
p.appendChild(objectivetxt)



// Append elements to td
td.appendChild(h4);
td.appendChild(p);


// td styling
td.style.textAlign = "left";
td.style.verticalAlign = "top";
td.style.padding = "0px 0px 0px 5%";




// Write to Element
element.appendChild(tbl);
}

buildAboutMe();
