//alert("Can you see this?");
/*
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create 
    a single page that rotates unique colors and content for 
    each weekday (Sunday to Saturday) into the page.  
    The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily 
    item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    Image (of Specific Coffee)
    alt tag (identifies type of coffee)
    description (of this type of coffee)
    weekday
    color (supporting image)

    The unique color could affect the background HTML, 
    or an element on the page for each day of the week. 
    All of the above must occur within one page.
*/

function coffeeTemplate(coffee){
    

    return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong>${coffee.day}'s Coffee Special:</strong> 
        ${coffee.day}'s daily coffee special is ${coffee.name}. ${coffee.desc}!
    </p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")) {//from query string
    myDay = urlParams.get("day");
}else{//today's day of week
    myDay = today;
}

//change the string into an integer
myDay = parseInt(myDay);

switch(myDay){
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            day: "Monday",
            desc: `Get bubbly with some Bubble Tea`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color:"peach",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `Beat the chill with a hot caramel latte`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"brown",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `Cold brew for when we're serious- in serious need of caffeine`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"black",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Thursday",
            desc: `A simple coffee for a simple day`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"beige",
            name: "Frappaccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappaccino",
            day: "Friday",
            desc: `Make Friday all the more sweet with one of our frappaccinos`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color:"darkorange",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            day: "Saturday",
            desc: `Spice up your weekend with a Pumpkin Spice latte`
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            color:"wheat",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a mocha",
            day: "Sunday",
            desc: `End the week one a creative note with one of our mocha designs`
        };
    break;

    default:
        alert("Something went wrong!")        

}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

//Change the background color of the HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

