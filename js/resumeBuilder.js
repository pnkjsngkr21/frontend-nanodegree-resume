/*
This is empty on purpose! Your code to build the resume will go here.
*/

var formattedName = HTMLheaderName.replace("%data%","Pankaj Sangekar");
var formattedRole = HTMLheaderRole.replace("%data%","Analyst");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(internationalizeButton);


var bio = {};
bio = {
    "name" : "Pankaj",
    "role" : "Senior Analyst",
    "contacts" : {
        "email" : "pnkjsngkr21@gmail.com",
        "mobile" : "9604061583",
        "location" : "Mumbai"
    },
    "bioPic" : "images/me.jsp",
    "welcomeMessage" : "Welcome!",
    "skills" : ["Java", "Python", "HTML", "Primavera P6"]
};


if(bio.skills.length !== 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkills);
}

var work = {
"jobs" : [
{
    "position" : "Analyst",
    "employer" : "Accenture",
    "yearsWorked" : 2.5,
    "location" : "Mumbai",
    "dateWorked" : "July'13 to Nov'15",
    "Description" : "Primavera techno-functional resource"
},
{
    "position" : "Senior Analyst",
    "employer" : "Accenture",
    "yearsWorked" : 0.1,
    "location" : "Mumbai",
    "dateWorked" : "Dec'15 to till Now",
    "Description" : "Primavera techno-functional resource"
}
]
};

function displayWork(){
for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dateWorked);
    $(".work-entry:last").append(formattedDates);
    var  formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].Description);
    $(".work-entry:last").append(formattedDescription);
}
}

displayWork();

var project = {
    "projects" : [
{
    "title" : "Enterprise Data Migration",
    "Dates" : "April'14 to July'14",
    "Description" : "Utility to migrate enterprise data from one Primavera environment to another Primavera environment"
},
{
    "title" : "ADMP",
    "Dates" : "Nov'14 to Sept'15",
    "Description" : "Development of electronic technical work document solution for asset maintenance industry"
}
]
}

project.display = function(){
    for(pro in project.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[pro].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%",project.projects[pro].Dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[pro].Description);
        $(".project-entry:last").append(formattedDescription);
    }
}

project.display();

var education = {
    "schools" : [
    {
        "name" : "VNIT Nagpur",
        "location" : " Nagpur, MH",
        "degree" : "B.Tech",
        "majors" : ["Electrical", "Electronics"],
        "dates" : 2013,
        "url" : "www.vnit.ac.in"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Introduction to Computer Science",
        "school" : "Udacity",
        "dates" : 2014,
        "url" : "www.udacity.com"
    },
    {
        "title" : "Introduction to HTML & CSS",
        "school" : "Udacity",
        "dates" : 2015,
        "url" : "www.udacity.com"
    }
    ]
}

$("#mapDiv").append(googleMap);

