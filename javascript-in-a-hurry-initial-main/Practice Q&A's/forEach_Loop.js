//Consider the following array:
lessons = [
    {
        id: "273",
        title: "Variables",
        length: 12
    },
    {
        id: "295",
        title: "Conditionals",
        length: 7
    },
    {
        id: "299",
        title: "Functions",
        length: 9
    }
];

/* Create a forEach loop that runs through the lessons array and populates another array, with the lesson names only.
In the above case, this should be the value of the other array:
["Variables", "Conditionals", "Functions"] */

// use this variable to add the lesson titles
let lessonTitles = [];
lessons.forEach(lesson =>
    lessonTitles.push(lesson.title));



