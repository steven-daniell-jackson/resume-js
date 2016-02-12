// Build Table function from table-gen.js using the skillsMatrix obj
buildSkillMatricHeader();
buildTable(languages);
buildSkillMatrixOptions()
function buildSkillMatrixOptions(){

// Get targetted element
var element = document.getElementById('skills-matrix-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();


var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("IT");
a.id = "it";
a.className = "skills-matrix-btn";
a.appendChild(txt);
td.width = "10%";
td.style.textAlign = "center";
td.appendChild(a);

var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("other");
a.id = "other";
a.className = "skills-matrix-btn";
a.appendChild(txt);
td.width = "20%";
td.style.textAlign = "center";
td.appendChild(a);


var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("Platforms/CMS");
a.id = "platforms";
a.className = "skills-matrix-btn";
a.appendChild(txt);
td.width = "20%";
td.style.textAlign = "center";
td.appendChild(a);

var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("Frameworks");
a.id = "frameworks";
a.className = "skills-matrix-btn";
a.appendChild(txt);
td.width = "20%";
td.style.textAlign = "center";
td.appendChild(a);


var td = tr.insertCell(0);
var a = document.createElement("a");
var txt = document.createTextNode("Languages");
a.id = "languages";
a.className = "skills-matrix-btn";
a.appendChild(txt);
td.width = "20%";
td.style.textAlign = "center";
td.appendChild(a);


td.height = "100px";
// Write to Element
element.appendChild(tbl);


}

function buildSkillMatricHeader(e){

// Get targetted element
var element = document.getElementById('skills-matrix-table');

// Create header table
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.textAlign = "left";

// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);

// About Me Heading
var h4 = document.createElement("h4");
h4.style.fontSize = "42px";
var txt = document.createTextNode("Experience/Skills Matrix");
h4.appendChild(txt)

td.appendChild(h4);
td.style.textAlign = "center";
td.colSpan = 2;


// Create row
var tr = tbl.insertRow();
var td = tr.insertCell(0);


// Build Ordered List heading
var h4 = document.createElement("h4");
txt = document.createTextNode("Key:");
h4.style.padding = "0 0 0 40px";
h4.style.fontSize = "16px";
h4.appendChild(txt)
td.appendChild(h4)


// Build Ordered List

var ol = document.createElement("ol");
var li = document.createElement("li");

var li = document.createElement("li");
li.appendChild(document.createTextNode("Basic Understanding"));
ol.appendChild(li)

var li = document.createElement("li");
li.appendChild(document.createTextNode("Limited practical experience"));
ol.appendChild(li)

var li = document.createElement("li");
li.appendChild(document.createTextNode("Solid practical experience"));
ol.appendChild(li)

var li = document.createElement("li");
li.appendChild(document.createTextNode("Well versed"));
ol.appendChild(li)


td.appendChild(ol);
td.style.textAlign = "left";



// Write to Element
element.appendChild(tbl);


}