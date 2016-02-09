
/*********************************************
 Steven_jackson_obj
 *********************************************/

 var steven_jackson = {

 	firstname : "Steven",
 	lastname : "Jackson",
 	email : "stevenjackson.sanguine@gmail.com",
 	skype : "steven.jackson..",
 	contact_number : "+27 76 997 5180",
 	dateofbirth : "02/11/1988",
 	nationality : "South African",
 	personality_type : "INTJ",
 	home_language : "English"
 }

// Debug
console.log(steven_jackson);


/*********************************************
 About Me obj
 *********************************************/

 var about_me = {
objective: "To become extremely proficient in as many languages, platforms and frameworks as possible and work internationally. I will do anything to achieve these goals. \
I have the capability of learning any language or framework.",
 	hobbies : ["Anime","Coding", "Gaming", "Researching"],
 	traits : ["Attention to detail","Numerical","Accurate","Structured","Quick Learner/Study","Smart Worker","Self-Disciplined","Document Orientated","Logical","Adaptive","Open minded"]

 }

// Debug
console.log(about_me);

/*********************************************
 Education obj
 *********************************************/

 var education = function(institute_name,type,year,name){

 	this.institute_name = institute_name;
 	this.type = type;
 	this.year = year;
 	this.name = name;
 }

 var varistyCollege = ("Varsity College","Diploma","2008","Diploma in Information Technology (Software Development)");
 var northlinkCollege = ("Northlink College","Certificate","2005/2006","Matric");


/*********************************************
 Reference Obj
 *********************************************/

 var reference = function(firstname, lastname, contact_number,job_title){

 	this.firstname = firstname;
 	this.lastname = lastname;
 	this.contact_number = contact_number;
 	this.job_title = job_title;

 }

/*********************************************
 References
 *********************************************/
 var dawie = new reference("Dawie", "Geldenhuys", "0735491882", "Previous I.T Manager");
 var ashraf = new reference("Ashraf", "Slamang", "0838830930", "Previous Lead Developer");
 var ryan = new reference("Ryan", "Minnar", "0836505547 ", "Previous Head of Project Management");


/*********************************************
 Skills Matrix obj
 *********************************************/

 var skillsMatrix =  {

 	heading: "Test",
 	skill: ['HTML','HTML2','HTML3','HTML4','HTML5','HTML6','','','','','','','','','','','','','',''],
 	proficiency: ['4','5','6','2','1','2','','','','','','','','','','','','','','']

 };
