//Instructions: Consider the following array:
let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

//Run a For Loop through the array.

function printEXAccounts() {

    //Run a loop through the bankAccounts array. The loop condition should be built in a way that it always runs through all elements,
    //no matter how many elements the array has.

    for (let i = 0; i < bankAccounts.length; i++) {

        //and send to the console only the accounts with the "EX" prefix.

        if (bankAccounts[i].slice(0, 2) === "EX") {
            console.log(bankAccounts[i]);
        }

    }

}

//i++ means a will be increased by 1 on every iteration until the statement a is less than 10 is no longer true and then the loop will stop.
//Inside the loop, use the string slice method to extract the first two digits of each account.
//Use an if statement to send the account number to the console only if it starts with "EX"
