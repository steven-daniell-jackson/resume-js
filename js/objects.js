
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

 var varistyCollege = new education ("Varsity College","Diploma","2008","Diploma in Information Technology (Software Development)");
 var northlinkCollege = new education ("Northlink College","Certificate","2005/2006","Matric");


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

 var skillsMatrix = function(heading, option, skill_level, proficiency){

 	this.heading = heading,
 	this.option = option,
 	this.skill_level = skill_level,
 	this.proficiency = proficiency

 };

// Skills Matrix Instances
var languages = new skillsMatrix (
	'Languages', 
	['HTML','CSS','JS','PHP','SQL'], 
	['4','4','3','3','2'], 
	['12','12','7','7','3']

	);


var platforms = new skillsMatrix (
	'Platforms/CMS', 
	['Wordpress','CS Cart','Magento', 'Expression Engine', 'Joomla', 'Concrete CMS', 'Custom CMS'], 
	['3','2','1','1','1','1','1'], 
	['12','8','2','2','2','2','2']

	);

var frameworks = new skillsMatrix (
	'Frameworks', 
	['Bootstrap','Foundation', 'jQuery','Angular'], 
	['4','2','3','1'], 
	['12','4','5','2']

	);


var other = new skillsMatrix (
	'Other', 
	['Sublime Text 3','Windows 10','Git - Command Line', 'Chrome', 'Filezilla'], 
	['4','4','3','4','4'],
	['12','8','7','12','12']

	);



var it_related = new skillsMatrix (
	'IT Related', 
	['Computer Repairs','Troubleshooting','Hosting', 'SEO (redirects)', 'Networking'], 
	['4','3','3','3','3'], 
	['24','24','12','12','12']

	);