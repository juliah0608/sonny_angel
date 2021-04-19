//console.log("Is our script file working?");
//load the airtable library, call it "airtable";

var Airtable = require("airtable");
//console.log(Airtable);


// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyz60DhaK0VXxpqx" }).base(
    "appumSjnTpT2BNC8U"
);

base("Table 1")
.select({})
.eachPage(gotPageOfAngels,gotAllAngels);

//an empty array to hold our data
var angels= [];

//callback function that recieves our data
function gotPageOfAngels(records, fetchNextPage) {
  console.log("gotPageOfAngels ()");
  //add the records from this page to our array
  angels.push(...records);
  //request more pages
  fetchNextPage();
}

//call back function that is called when all pages are loaded
function gotAllAngels(err) {
  console.log("gotAllAngels()");

//report an error, you'd want to do something better than this in production 
if (err) {
  console.log("error loading data");
  console.error(err);
  return;
}

//call functions to log and show the angels
consoleLogAngels();
showAngels();
}

// just loop through the books and console.log them
function consoleLogAngels() {
  console.log("consoleLogAngels()");
  angels.forEach(angel => {
    console.log("Angel:");
  });
}

//look through our airtable data, create elements
function showAngels(){
  console.log("showAngels()");
  angels.forEach((angel)=> {
    //this is where our ANGEL Information will go
    var angelContainer = document.createElement("div");
    angelContainer.classList.add("angel-container");
    document.querySelector(".container").append(angelContainer);

    //add ANGEL names to our angel containers
    var angelName = document.createElement("h1");
    angelName.classList.add("angel-Name");
    angelName.innerText = angel.fields.Name;
    angelContainer.append(angelName);

    var angelDescription = document.createElement("p");
    angelDescription.classList.add("angel-description");
    angelDescription.innerText = angel.fields.description;
    angelContainer.append(angelDescription);

    var angelImages = document.createElement("img");
    angelImages.classList.add("angel-Images");
    angelImages.src = angel.fields.Images[0].url;
    angelContainer.append(angelImages);

    //add event listener
    //when user clicks on angel container
    //the image will appear or dissapear

    angelContainer.addEventListener("click", function() {
      angelName.classList.toggle("active");
      angelDescription.classList.toggle("active");
      angelImages.classList.toggle("active");
    });

     // get genre field from airtable
    // loop through the array and add each genre as
    // a class to the angel container
    var angelGenre = angel.fields.genre;
    angelGenre.forEach(function(genre) {
      angelContainer.classList.add(genre);
    });

    // clicking on filter by new york series
    // change background of new york series to red
    // else change to white
    var filterNewYork = document.querySelector(".js-new-york");
    filterNewYork.addEventListener("click", function() {
      if (angelContainer.classList.contains("new_york")) {
        angelContainer.style.background = "#ff77ff";
      } else {
        angelContainer.style.background = "white";
      }
    });

    // filter by marine series
    var filterMarine = document.querySelector(".js-marine");
    filterMarine.addEventListener("click", function() {
      if (angelContainer.classList.contains("marine")) {
        angelContainer.style.background = "#a6d608";
      } else {
        angelContainer.style.background = "white";
      }
    });

    // filter by vegetable series
    var filterVegetable = document.querySelector(".js-vegetable");
    filterVegetable.addEventListener("click", function() {
      if (angelContainer.classList.contains("vegetable")) {
        angelContainer.style.background = "#fe4164";
      } else {
        angelContainer.style.background = "white";
      }
    });

    // filter by cactus
    var filterCactus = document.querySelector(".js-cactus");
    filterCactus.addEventListener("click", function() {
      if (angelContainer.classList.contains("cactus")) {
        angelContainer.style.background = "#adff2f";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by flower
    var filterFlower = document.querySelector(".js-flower");
    filterFlower.addEventListener("click", function() {
      if (angelContainer.classList.contains("flower")) {
        angelContainer.style.background = "#ac1e44";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by birthday bear
    
    var filterBirthday = document.querySelector(".js-birthday");
    filterBirthday.addEventListener("click", function() {
      if (angelContainer.classList.contains("birthday")) {
        angelContainer.style.background = "orange";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by sweets
    var filterSweets = document.querySelector(".js-sweets");
    filterSweets.addEventListener("click", function() {
      if (angelContainer.classList.contains("sweets")) {
        angelContainer.style.background = "purple";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by wonderland
    var filterWonderland = document.querySelector(".js-wonderland");
    filterWonderland.addEventListener("click", function() {
      if (angelContainer.classList.contains("wonderland")) {
        angelContainer.style.background = "#ffcff1";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by animal
    var filterAnimal = document.querySelector(".js-animal");
    filterAnimal.addEventListener("click", function() {
      if (angelContainer.classList.contains("animal")) {
        angelContainer.style.background = "#df00ff";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by valentines day
    var filterValentines = document.querySelector(".js-valentines");
    filterValentines.addEventListener("click", function() {
      if (angelContainer.classList.contains("valentines")) {
        angelContainer.style.background = "deeppink";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by fruit
    var filterFruit = document.querySelector(".js-fruit");
    filterFruit.addEventListener("click", function() {
      if (angelContainer.classList.contains("fruit")) {
        angelContainer.style.background = "pink";
      } else {
        angelContainer.style.background = "white";
      }
    });

    //filter by space adventure
    var filterSpace = document.querySelector(".js-space");
    filterSpace.addEventListener("click", function() {
      if (angelContainer.classList.contains("space")) {
        angelContainer.style.background = "red";
      } else {
        angelContainer.style.background = "white";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      songContainer.style.background = "white";
    });
  });
}





