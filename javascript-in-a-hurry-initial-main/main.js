//Menu Section

document.querySelector("#open-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function () {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// Greeting Section

function celsiusToFahr(temperature) {
    let fahr = (temperature * 9 / 5) + 32;
    return fahr;
}

const greetingText = "Good afternoon!";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 30;


let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;
//toFixed() method rounds decimals to however many places we want and in this case it's (1)

document.querySelector("#greeting").innerHTML = greetingText;
document.querySelector("p#weather").innerHTML = celsiusText; //applied to the p element that has the ID of weather. 

document.querySelector(".weather-group").addEventListener("click", function (e) {
    //celsius
    //fahr
    if (e.target.id == "celsius") {
        document.querySelector("p#weather").innerHTML = celsiusText;
    } else if (e.target.id == "fahr") {
        document.querySelector("p#weather").innerHTML = fahrText;
    }

});

//local time will populate automatically when page is loaded and seconds are updated continuously 

setInterval(function () {
    let localTime = new Date();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);//the 1000 is in miliseconds so it's executing every second in order to update the seconds on the clock on our page. 

//for loop conditional statement
//for (let a = 0; a < 10; a++) { //a++ means a will be increased by 1 on every iteration until the statement a is less than 10 is no longer true and then the loop will stop.
    //console.log(a);
//}







