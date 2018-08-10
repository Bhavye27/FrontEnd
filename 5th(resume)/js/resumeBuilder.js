//my bio 
var bio = {
    "name": "Bhavye Budhiraja",

    "role": "Web Developer",

    "contacts": {
        "mobile": "+919872331654",

        "email": "bhavyebudhiraja27@gmail.com",

        "location": "Rajpura,Punjab",

        "github": "Bhavye27"
    },


    "welcomeMessage": "When I am sad I stop being sad and be AWESOME instead. TRUE STORY !!",

    "skills": ["Volleyball", "Swimming", "Sleeping", "Photographer"],

    "biopic": "images/mypic.JPG"
};

//displaying my bio
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    //we can also append top contacts and footer contacts at once.
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    //for loop for my skills.
    for (var bhav = 0; bhav < bio.skills.length; bhav++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[bhav]));
    }
};
bio.display();

//my work 
var work = {
    "jobs": [{
        "employer": "Chitkara University,Rajpura",

        "title": "Media Team Executive",

        "dates": "2016-present",

        "location": "Chitkara university,Rajpura",

        "description": "You Dont click a photo,You make it."
    }]
};

//displaying Work Function
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var bhav = 0; bhav < work.jobs.length; bhav++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[bhav].employer) + HTMLworkTitle.replace("%data%", work.jobs[bhav].title));

        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[bhav].location));

        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[bhav].dates));

        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[bhav].description));

    }
};

work.display();

// my education
var education = {
    "schools": [{
            "name": "Jankidas Kapur Public School",

            "location": "Sonipat(131001),Haryana,India",

            "degree": "High School",

            "majors": ["Maths and Chemistry"],

            "dates": "April,2014",


        },
        {
            "name": "Chitkara University",

            "location": "Rajpura,Punjab(140401)",

            "degree": "BTech",

            "majors": ["Engg. Maths,NMST,photography"],

            "dates": "2015-present"

        }
    ],
    "onlineCourses": [{
            "title": "Front-End Developer Nanodegree",

            "school": "Udacity",

            "dates": "January,2017-present",

            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }

    ]
};


//displaying education function
education.display = function() {

    for (var zxc = 0; zxc < education.schools.length; zxc++) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[zxc].name) + HTMLschoolDegree.replace("%data%", education.schools[zxc].degree),
            HTMLschoolDates.replace("%data%", education.schools[zxc].dates),
            HTMLschoolLocation.replace("%data%", education.schools[zxc].location),
            HTMLschoolMajor.replace("%data%", education.schools[zxc].majors));

    }

    //displaying online Courses

    $("#education").append(HTMLonlineClasses);
    for

    (
        var abc = 0; abc < education.onlineCourses.length; abc++) {

        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[abc].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[abc].school),
            HTMLonlineDates.replace("%data%", education.onlineCourses[abc].dates),
            HTMLonlineURL.replace("%data%", education.onlineCourses[abc].url));

    }
};

education.display();

//making project object
var projects = {
    "projects": [{
            "title": "ANIMAL TRADING CARD",

            "dates": "30/1/2017-4/2/2017",

            "description": "Trading card on dog made by using html,css etc.",

            "images": ["images/animal.jpg"]
        },
        {
            "title": "PORTFOLIO",

            "dates": "5/2/2017-15/2/2017",

            "description": "Portfolio of some photoshoots",

            "images": ["images/portfolio.png"]
        }
    ]
};

//displaying project

projects.display = function() {
    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        var fTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);

        var form_Description = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);

        var fDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);

        $(".project-entry:last").append(fTitle + fDates + form_Description);

        for (var xyz = 0; xyz < projects.projects[proj].images.length; xyz++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[proj].images[xyz]));
        }
    }
};

projects.display();

//adding map
$("#mapDiv").append(googleMap);