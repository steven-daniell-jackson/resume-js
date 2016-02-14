/*********************************************
 Build Employment History
 *********************************************/
buildEmploymentHeader();
employmentButtons();

// Debug
// buildEmploymentTable(roiDigitalDev);
// buildEmploymentTable(roiDigitalItRelated);



/*********************************************
 Build Employment History Header
 *********************************************/
function buildEmploymentHeader (){

// Get targetted element
var element = document.getElementById('employment-history-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Emplyment History Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "42px";
var txt = document.createTextNode("Employment History");
h4.appendChild(txt)

td.appendChild(h4);
td.style.textAlign = "center";
td.colSpan = 2;


// Write to Element
element.appendChild(tbl);



// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '26%';
tbl.style.margin = "0px auto";
tbl.style.textAlign = "left";



// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// Emplyment History Heading
var h5 = document.createElement("h5");
var txt = document.createTextNode("ROI Digital");
h5.style.fontSize = "17px";
h5.appendChild(txt);
h5.appendChild(document.createElement("br"));



var p = document.createElement("p")
var txt = document.createTextNode("Junior Developer, ROI Digital");
p.appendChild(txt);
p.appendChild(document.createElement("br"));

var txt = document.createTextNode("Cape Town");
p.appendChild(txt);
p.appendChild(document.createElement("br"));

var txt = document.createTextNode("Salary: R13,000");
p.appendChild(txt);
p.appendChild(document.createElement("br"));

var txt = document.createTextNode("Duration: July 2012 till July 2015");
p.appendChild(txt);
p.appendChild(document.createElement("br"));
p.appendChild(document.createElement("br"));

td.appendChild(h5);
td.appendChild(p);



var p = document.createElement("p")
var txt = document.createTextNode("Responsibilities:");
p.style.fontWeight = "700";
p.appendChild(txt);
p.appendChild(document.createElement("br"));

td.appendChild(p);


var p = document.createElement("p")
var txt = document.createTextNode("Senior Developer and I.T Manager");
p.appendChild(txt);
p.appendChild(document.createElement("br"));


td.appendChild(p);


// Write to Element
element.appendChild(tbl);

} //End Function


/*********************************************
 Build Employment Buttons
 *********************************************/
function employmentButtons (){

// Get targetted element
var element = document.getElementById('employment-history-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '50%';
tbl.style.margin = "0px auto";
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();


// Create button
var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("I.T. Related Duties");
a.id = "employment_it_related";
a.className = "skills-matrix-btn";
a.href = "#employment-history-table";
a.appendChild(txt);
td.style.textAlign = "center";
td.appendChild(a);

// Create button
var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("Development Duties");
a.id = "employment_development";
a.className = "skills-matrix-btn";
a.href = "#employment-history-table";
a.appendChild(txt);
td.style.textAlign = "center";
td.appendChild(a);


td.height = "100px";
// Write to Element
element.appendChild(tbl);


} //End function


// Redraw duties Table
function redrawSkillsMatrix(e) {

// Remove current table if it exists, else draw the table
var element = document.querySelectorAll('#employment-history-table table');

if (typeof element[3] != "undefined") {
element[3].remove(element);
buildEmploymentTable(e);
} else	{
	
	buildEmploymentTable(e);
}
	


} //End function