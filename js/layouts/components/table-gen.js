/*********************************************
 Build table Function
 Parameter: e
 Generates table based on the obj passed
 *********************************************/

function buildTable(e) {

// Debug
// console.log(e.option.length);

// Get targetted element
var element = document.getElementById('skills-matrix-table');

//  Create table 
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.border = '1px solid black';
tbl.style.textAlign = "left";

// TR Row loop (Row amount)
for(var i = 0; i < e.option.length + 1; i++){


  var tr = tbl.insertRow();

        // TD Loop (TD amount)
        for(var j = 0; j < 1; j++){


// Table TD's
if (i > 0) {

// Bulid table data
var td = tr.insertCell(0);
  td.appendChild(document.createTextNode(e.skill_level[i-1]));
  td.style.border = '1px solid black';   
  td.style.padding = "5px 20px";
  td.style.textAlign = "center";

// Bulid table data
  var td = tr.insertCell(0);
  td.appendChild(document.createTextNode(e.proficiency[i-1] + " Months"));
  td.style.border = '1px solid black';   
  td.style.padding = "5px 20px";
  td.style.textAlign = "center";

// Bulid table data
  var td = tr.insertCell(0);
  td.appendChild(document.createTextNode(e.option[i-1]+ ":"));
  td.style.border = '1px solid black';
  td.style.padding = "5px 20px";
  td.style.fontWeight  = "700";

// Table Heading
}else {

// Bulid table dynamic heading
    var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode("Skill level"));
  td_heading.style.border = '1px solid black';
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";

// Bulid table dynamic heading
var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode("Duration"));
  td_heading.style.border = '1px solid black';   
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";

// Bulid table dynamic heading
  var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode(e.heading));
  td_heading.style.border = '1px solid black';
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";

  

}

}
}
    // Write to Element
    element.appendChild(tbl);


  } //End function



  function buildEmploymentTable(e) {

// Debug
// console.log(e.option.length);

// Get targetted element
var element = document.getElementById('employment-history-table');


//  Create table 
tbl  = document.createElement('table');
tbl.style.width  = '75%';
tbl.style.border = '1px solid black';
tbl.style.textAlign = "left";
tbl.style.margin = "0 auto";

// TR Row loop (Row amount)
for(var i = 0; i < e.duties.length + 1; i++){


  var tr = tbl.insertRow();

        // TD Loop (TD amount)
        for(var j = 0; j < 1; j++){


// Table TD's
if (i > 0) {

// Bulid table data
var td = tr.insertCell(0);
  td.appendChild(document.createTextNode("> " + e.duties[i-1]));
  // td.style.border = '1px solid black';   
  td.style.padding = "5px 20px";
  td.style.textAlign = "left";



// Table Heading
}else {


// Bulid table dynamic heading
  var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode(e.job_role));
  td_heading.style.border = '1px solid black';
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";

  

}

}
}
    // Write to Element
    element.appendChild(tbl);


  } //End function