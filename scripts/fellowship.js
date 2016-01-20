console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute("id", "middle-earth");
  // add each land as an article tag
  lands.forEach(function(landName) {
    var land = document.createElement("article");
  // inside each article tag include an h1 with the name of the land
    land.innerHTML = "<h1>" + landName + "</h1>";
    middleEarth.appendChild(land);
  });
  // append middle-earth to your document body
  body.appendChild(middleEarth);
}

makeMiddleEarth();


// Part 2
var theShire = document.querySelectorAll("article")[0];
var rivendell = document.querySelectorAll("article")[1];
var mordor = document.querySelectorAll("article")[2];
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitsList = document.createElement("ul");
  hobbits.forEach(function(hobbitName){
    // give each hobbit a class of hobbit
    hobbitsList.innerHTML += "<li class=\"hobbit\">" + hobbitName + "</ul>";
  });
  theShire.appendChild(hobbitsList)
}

makeHobbits();


// Part 3

var frodo = theShire.querySelector(".hobbit");
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theOneRing = document.createElement("div");
  theOneRing.setAttribute("id", "the-ring");
  // give the div a class of 'magic-imbued-jewelry'
  theOneRing.setAttribute("class", "magic-imbued-jewelry");
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theOneRing.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  frodo.appendChild(theOneRing);
}

keepItSecretKeepItSafe();


// Part 4


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddiesList = document.createElement("ul");
  aside.appendChild(buddiesList);
  buddies.forEach(function(buddyName){
    buddiesList.innerHTML += "<li>" + buddyName + "</li>";
  });
  // insert your aside as a child element of rivendell
  rivendell.appendChild(aside);
}

makeBuddies();


// Part 5

var strider = rivendell.querySelectorAll("li")[3];
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(theShire.querySelector("ul"));
}

leaveTheShire();

// Part 7

var fellowship = document.createElement("div");
fellowship.setAttribute("id", "the-fellowship");
rivendell.appendChild(fellowship);
function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var collective = rivendell.querySelectorAll("li");
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  // do in one line
  for (var i = 0; i < collective.length; i++) {
    fellowship.appendChild(collective[i]);
    console.log(collective[i].textContent + " has joined the Fellowship!");
  }
}

forgeTheFellowShip();


// Part 8

var gandalf = fellowship.querySelector("li");
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.setAttribute("style", "background-color: white; border-width: 5px; border-color: gray;");
}

theBalrog();


// Part 9

var boromir = fellowship.querySelectorAll("li")[4];
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!")
  // Boromir's been killed by the Uruk-hai!
  alert("Boromir's been killed by the Uruk-Hai!")
  // put a linethrough on boromir's name
  boromir.setAttribute("style", "text-decoration: line-through");
  // Remove Boromir from the Fellowship using removeChild()
  fellowship.removeChild(boromir);
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor

  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  mordor.appendChild(mountDoom);
}

itsDangerousToGoAlone();


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var smeagol = document.createElement("div");
  smeagol.setAttribute("id", "gollum");
  mordor.appendChild(smeagol);
  // Remove the ring from Frodo and give it to Gollum
  document.getElementById("the-ring").appendChild(document.getElementById("gollum"));
  // Move Gollum into Mount Doom
  document.getElementById("gollum").appendChild(document.getElementById("mount-doom"));
}

weWantsIt();


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

thereAndBackAgain();
