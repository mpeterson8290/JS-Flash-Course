// Consider the following array:
let members = [
    {
        name: "John Doe",
        yearOfBirth: 2004
    },
    {
        name: "Maria Alba",
        yearOfBirth: 2007
    },
    {
        name: "Ankit Patel",
        yearOfBirth: 2010
    },
    {
        name: "Mario Gomes",
        yearOfBirth: 1982
    },
    {
        name: "Enzo Alvarez",
        yearOfBirth: 2018
    },
    {
        name: "Jan Hansen",
        yearOfBirth: 1972
    }
];

/* 1. Use Javascript's Date & Time method to get the current year to calculate the age.
2. Use the array filter method to extract only the members who are 18 years or older. */

let adultMembers = members.filter(member => (new Date().getFullYear() - member.yearOfBirth) >= 18);

// Explanation of Solution: Use the array filter method to extract only the members who are 18 years or older. For that, you can use Javascript's Date & Time method to get the current year to calculate the age: