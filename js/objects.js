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
// console.log(steven_jackson);


/*********************************************
 About Me obj
 *********************************************/
 var about_me = {
objective: "To become extremely proficient in as many languages,\ platforms and frameworks as possible. \
I have the capability of learning any language or framework.",
 	hobbies : ["Anime","Coding", "Gaming", "Researching"],
 	traits : ["Attention to detail","Numerical","Accurate","Structured","Quick Learner/Study","Smart Worker","Self-Disciplined","Document Orientated","Logical","Adaptive","Open minded"]

 }

// Debug
// console.log(about_me);

/*********************************************
 Education obj
 *********************************************/
 var education = function(institute_name,type,year,name){

 	this.institute_name = institute_name;
 	this.type = type;
 	this.year = year;
 	this.name = name;
 }

/*********************************************
 Education instances
 *********************************************/
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
 Reference instances
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

/*********************************************
 Skills Matrix Instances
 *********************************************/
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

/*********************************************
 Employment obj
 *********************************************/

  var employmentDuties = function(job_role, duties){
this.job_role = job_role,
 	this.duties = duties

 };


 var roiDigitalDev = new employmentDuties(
"Development",
['Build and testing / QA of email newsletters and websites (e-commerce focused) ',
'Accountable for building and sending mailers, QA and sign off from designer and project owner before distribution',
'Create, build and manage assets for the websites and affiliate sites including homepage, category banners, competition pages',
'Keep up to date with email best practice and work with Content Manager to implement changes',
'Maintain consistent look and feel across the websites',
'Understand and contribute to usability best practice in site navigation and emails',
'Build assets and apps for social networking sites as required',
'Ensuring the look and feel of the site follows the brand guidelines',
'Development / Coding of landing pages and Websites (CS Cart and Wordpress) ',
'Draft business requirements and technical specs that are robust and meet the needs of client and developers',
'Responsible for specifications and outsource developer liaison (focus on CS-Cart and other)',
'Responsible for delivery of web development and e-commerce development projects within scope, budget and time',
'Manage all Project related documentation',
'Interrogate all requirements and ensure the best solution is provided to clients',
'Establish strong relationships with outsource partners',
'Run multiple medium to large projects concurrently and independently',
'Reports to the Management, providing regular input on all account activity, including status and reports on a weekly basis.',
'Research new technologies in the realm of web development',
'Ensure project post-mortems take place and that each project is better than the last (implement quality improvements)',
'Time tracking (billable and non-billable)',
'Continued increased performance of clients against objectives',
'Upsell clients and web services',
'Ensure profit targets are reached per dev project (ensure that the project is delivered in scope, time, budget and quality standards)',
'Assist with IT handover and training new IT staff member',
'Adhoc development responsibilities as and when required',
'Training departments in a the basics of Web Development process and functions',
'Clearly defining the problem via illustrations and simplied explanantions',
'Very Detailed technical instructions written for other companies developer.',
'Documented Tutorials for clients and the use of their CMS ',
'Fixing department specific problems (SEO, PPC, Social Media) ',
'Training clients in the use of their CMS via illustrations ']

 	); 



 var roiDigitalItRelated = new employmentDuties(

"IT Related",
['Repairing and Replacing PC\'s',
'Setting up Pc\'s for new Users as well as company logins',
'Testing sites',
'General I.T. Issues',
'Setting up User Accounts ',
'Fully updated Audit sheet ',
'Updated Uniform Hosting Sheet ',
'Setting up sites on Development environment ',
'Testing hardware',
'Contacting suppliers for replacement stock and repairs',
'Backing up and Restoring Site on a new Ftp',
'Updating, inserting content and editing site',
'Control over Firewall and NAS drive (Vault) ',
'Monthly Backups of Websites and Vault ',
'Removal of ex-employees',
'Hosting and Hosting related issues',
'Internal issues',
'Reviewing CV\'s of potential canditates for IT and Development departments.',
'Interviews with potential canditates for IT and Development departments.',
'Managerial Meetings in regards to both IT and Development departments']
 
 	); 