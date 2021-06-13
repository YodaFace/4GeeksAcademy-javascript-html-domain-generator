/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// import "script.js";

// HTML : <element onload="myScript">
// JS   : object.onload = function(){myScript};

window.onload = function() {
  //write your code here
  function generateWebSite() {
    // The items used to generate the URL //
    let pronoun = ["the", "your", "our", "her", "his"];
    let adj = ["crazy", "emotional", "ridiculous", "scary", "angry"];
    let noun = ["pet", "spouse", "baby", "family", "music"];
    let dotsomething = [
      ".gotarrested",
      ".needshelp",
      ".lovethem",
      ".helpme",
      ".ohno"
    ];

    // Generate Random Number //

    let newPronoun = "";
    let newAdj = "";
    let newNoun = "";
    let newDotsomething = "";

    function randomNumber() {
      let theRandomNumber = parseInt(Math.random() * (5 - 0));
      return theRandomNumber;
    }

    for (let i = 0; i < pronoun.length; i++) {
      let pronounRandomNumber = randomNumber();
      newPronoun = pronoun[pronounRandomNumber];
      console.log(pronounRandomNumber);

      let adjRandomNumber = randomNumber();
      newAdj = adj[adjRandomNumber];
      console.log(adjRandomNumber);

      let nounRandomNumber = randomNumber();
      newNoun = noun[nounRandomNumber];
      console.log(nounRandomNumber);

      let dotsomethingRandomNumber = randomNumber();
      newDotsomething = dotsomething[dotsomethingRandomNumber];
      console.log(dotsomethingRandomNumber);
    }

    return `This is your new site : www.${newPronoun}${newAdj}${newNoun}${newDotsomething}`;
  }

  let result = document.getElementById("websiteurl");
  result.innerHTML = generateWebSite();
  console.log("Hello Rigo from the console!");
};
