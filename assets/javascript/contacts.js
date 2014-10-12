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

function displayBottomContacts(){
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data2%", bio.contacts.github);
    formattedGitHub = formattedGitHub.replace("%data%", bio.contacts.githublink);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedLocation);
    $("#footerContacts").append(formattedGitHub);
    
}

displayBottomContacts();
