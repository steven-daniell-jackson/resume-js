


// Build table function accepting Objects
function buildTable(e) {

// Debug
console.log(e);

// Get targetted element
var element = document.getElementById('about-me-table');

//  Create table 
tbl  = document.createElement('table');
tbl.style.width  = '100%';
tbl.style.border = '1px solid black';
tbl.style.textAlign = "left";

// TR Row loop (Row amount)
for(var i = 0; i < 7; i++){

  var tr = tbl.insertRow();

        // TD Loop (TD amount)
        for(var j = 0; j < 1; j++){


// Table TD's
if (i > 0) {

  var td = tr.insertCell(0);
  td.appendChild(document.createTextNode(e.proficiency[i-1] + " Months"));
  td.style.border = '1px solid black';   
  td.style.padding = "5px 20px";
  td.style.textAlign = "center";


  var td = tr.insertCell(0);
  td.appendChild(document.createTextNode(e.skill[i-1]+ ":"));
  td.style.border = '1px solid black';
  td.style.padding = "5px 20px";
  td.style.fontWeight  = "700";

// Table Heading
}else {


  var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode("Language"));
  td_heading.style.border = '1px solid black';
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";

  var td_heading = tr.insertCell(0);
  td_heading.appendChild(document.createTextNode("Duration"));
  td_heading.style.border = '1px solid black';   
  td_heading.style.padding = "10px 20px";
  td_heading.style.fontWeight  = "700";
  td_heading.style.textAlign = "center";
  
}

}
}
    // Write to Element
    element.appendChild(tbl);


  }


  function populateTable(){

    // Build table function
    table = buildTable(skillsMatrix);

    console.log(table);


  }


  populateTable();





