/*********************************************
 Call build functions
 *********************************************/

buildAboutMe();
buildMoreAboutMe();

/*********************************************
 Build About Me function
 *********************************************/
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


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);


// a Trigger
var a = document.createElement("a");
a.id = "more-about-me-trigger";
a.style.border = '1px solid white';
a.style.padding = "10px 20px";
td.height = "100px";
a.href = "#";
var aboutMetxt = document.createTextNode("More about me");
a.appendChild(aboutMetxt)

// Append elements to td
td.appendChild(a);
// td styling
td.colSpan = "3";
td.style.textAlign = "center";


// Write to Element
element.appendChild(tbl);
}

/*********************************************
 Build More About Me function
 *********************************************/

function buildMoreAboutMe(){

// Get targetted element
var element = document.getElementById('more-about-me-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

/*********************************************

Education

 *********************************************/
var td = tr.insertCell(0);


// Objective Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "32px";
var objectiveHeading = document.createTextNode("Education");
h4.appendChild(objectiveHeading)
td.appendChild(h4);

// Debug
console.log(varistyCollege);

// Varsity college name
var p = document.createElement("p");
var txt = document.createTextNode(varistyCollege.institute_name);
p.appendChild(txt)
p.style.fontSize = "20px";
p.style.fontWeight = "500";
td.appendChild(p);

// Varsity college qualification name
var p = document.createElement("p");
var txt = document.createTextNode(varistyCollege.name);
p.appendChild(txt)
td.appendChild(p);

// Varsity college type of qualification
var p = document.createElement("p");
var txt = document.createTextNode(varistyCollege.type);
p.appendChild(txt)
td.appendChild(p);

// Varsity college year completed
var p = document.createElement("p");
var txt = document.createTextNode(varistyCollege.year);
p.appendChild(txt)
td.appendChild(p);

// Single line break
var br = document.createElement("br");
td.appendChild(br);

// Northlink name
var p = document.createElement("p");
var txt = document.createTextNode(northlinkCollege.institute_name);
p.appendChild(txt)
p.style.fontSize = "20px";
p.style.fontWeight = "500";
td.appendChild(p);

// Northlink qualification name
var p = document.createElement("p");
var txt = document.createTextNode(northlinkCollege.name);
p.appendChild(txt)
td.appendChild(p);

// Northlink type of qualification
var p = document.createElement("p");
var txt = document.createTextNode(northlinkCollege.type);
p.appendChild(txt)
td.appendChild(p);

// Northlink year completed
var p = document.createElement("p");
var txt = document.createTextNode(northlinkCollege.year);
p.appendChild(txt)
td.appendChild(p);



// td styling
td.style.textAlign = "left";
td.width = "33%";
td.style.verticalAlign = "top";
td.style.padding = "0px 0px 0px 5%";


/*********************************************

Traits

 *********************************************/
var td = tr.insertCell(0);


// Traits Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "32px";
var objectiveHeading = document.createTextNode("Traits");
h4.appendChild(objectiveHeading);
td.appendChild(h4);

// Trait loop
for (var i = about_me['traits'].length - 1; i >= 0; i--) {
var p = document.createElement("p");
var traits = document.createTextNode(about_me['traits'][i]);
p.appendChild(traits)
td.appendChild(p);
};


// td styling
td.style.textAlign = "left";
td.style.verticalAlign = "top";
td.style.padding = "0px 0px 0px 5%";



/*********************************************

Hobbies

 *********************************************/
var td = tr.insertCell(0);


// Hobbies Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "32px";
var objectiveHeading = document.createTextNode("Hobbies");
h4.appendChild(objectiveHeading)
td.appendChild(h4);

// Hobbies loop
for (var i = about_me['hobbies'].length - 1; i >= 0; i--) {
var p = document.createElement("p");
var hobby = document.createTextNode(about_me['hobbies'][i]);
p.appendChild(hobby)
td.appendChild(p);
};


// td styling
td.style.textAlign = "left";
td.style.verticalAlign = "top";
td.style.padding = "0px 0px 0px 5%";


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);


// a Trigger 
var a = document.createElement("a");
a.id = "less-about-me-trigger";
a.style.border = '1px solid white';
a.style.padding = "10px 20px";
td.height = "100px";
a.href = "#";
var aboutMetxt = document.createTextNode("Less about me");
a.appendChild(aboutMetxt)

// Append elements to td
td.appendChild(a);
// td styling
td.colSpan = "3";
td.style.textAlign = "center";


// Write to Element
element.appendChild(tbl);
}

