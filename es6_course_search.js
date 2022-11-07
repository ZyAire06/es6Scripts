let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {

    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

 // When does the PROG200 course start?
function isCoursesStart(courses){
    if(courses.StartDate === "11/22/22"){
        return true;
    }
    else{
        return false;
    };

};

let CoursesStartDate = courses.find(isCoursesStart);
console.log(`This when courses PROJ200 starts ${CoursesStartDate}`);


//What is the title of the PRoJ500 course
function isCoursesTitle(courses){
    if(courses.Title ===  "Introduction to Angular"){
        return true;

    }

    else{
        return false;
    }
}

let CoursesTitle = courses.find(isCoursesTitle);
console.log(CoursesTitle);

if( CoursesTitle != undefined){
    console.log(`This is the title of PROJ500 ${CoursesTitle}`)
}



// What are the titles pf the courses that cost $50 or less?

function isLessThan50(courses){
    if( courses.Fee <= "50.00"){
        return true;
    }

    else{
        return false;
    }
}

let Title50OrLess = courses.filter(isLessThan50);
console.log(Title50OrLess);

//What classes meet in "Classroom 1"

function isCorusesinClassroom(course){
    if(course.Location === "Classroom 1"){
        return true;
    }
    else{
        return false;
    }
}

let coursesinClassroon = courses.filter(isCorusesinClassroom);
console.log(coursesinClassroon);
 //loop through (not important)
// let searchStartDate = "11/22/22";

// let matching = [];

// let numsCourses = courses.length;

// for(let i =0; i<numsCourses; i++){
//     if( courses[i].StartDate == searchStartDate){
//         matching.push(courses[i])
//     }
// }

// console.log(matching);