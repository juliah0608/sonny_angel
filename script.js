console.log("Is our script file working?");
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyz60DhaK0VXxpqx" }).base(
    "appumSjnTpT2BNC8U"
  );

base("Table 1").select({}).eachPage(gotPageOfAngels,gotAllAngels);
var angels = [];


function gotPageOfAngels(records, fetchNextPage) {
    console.log("gotPageOfAngels()");
    // add the records from this page to our array
    angels.push(...records);
    // request more pages
    fetchNextPage();
  }

  // call back function that is called when all pages are loaded
function gotAllAngels(err) {
    console.log("gotAllAngels()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogAngels();
    showAngels();
  }
  
 
  // just loop through the books and console.log them
function consoleLogAngels() {
    console.log("consoleLogAngels()");
    angels.forEach((angel) => {
      console.log("Angel:", angel);
    });
  }
  
  // look through our airtable data, create elements
function showAngels() {
    console.log("showAngels()");
    angels.forEach(angel => {
        
        var angelName = document.createElement("h1");
        angelName.innerText = angel.fields.Name;
        document.body.append(angelName);

        var angelImage= document.createElement("img");
        angelImage.src = angel.fields.Images[0].url;
        document.body.append(angelImage);

        //Creating a New DIV container
        //this is where our ANGEL Information will go
        var angelContainer = document.createElement("div");
        angelContainer.classList.add("angel-container");
        document.querySelector(".container").append(angelContainer);

        //add song titles to our song containers
        var angelName = document.createElement("h1");
        angelName.classList.add("angel-Name");
        angelName.innerText = angel.fields.Name;
        angelContainer.append(angelName);

        var angelImages = document.createElement("img");
        angelImages.classList.add("angel-Images");
        angelImages.src = angel.fields.Images[0].url;
        angelContainer.append(angelImages);


    });
}
