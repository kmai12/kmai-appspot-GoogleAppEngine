var bio = {
    "name": "Kevin Mai",
    "role": "",
    "contacts": {
	"mobile": "714-200-4960",
	"email": "kevinmai993@yahoo.com",
	"github": "kmai12",
	"githublink": "http://www.github.com/kmai12",
	"twitter": "hi",
	"location": "Santa Barbara, CA"
    },
    "welcomeMessage": "",
    "skills": [
	"C++, Java, MySQL, SQLite, JavaScript, HTML, CSS, Git/GitHub, LINUX, Eclipse"
    ],
    "bioPic": "images/fry.jpg"
}

function displayBio(){
    
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data2%", bio.contacts.github);
    formattedGitHub = formattedGitHub.replace("%data%", bio.contacts.githublink);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedLocation);
    $("#topContacts").append(formattedGitHub);

    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcome);

    if(bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
	    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	    $("#skills").append(formattedSkill);
	}

    }
}

displayBio();
