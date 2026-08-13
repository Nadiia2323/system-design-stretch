"use strict";

// Lesson 1: The Client and Server Model.
// Your standalone code and written observations for this lesson live here,
// as code and comments. The site work happens in the stretch-records folder.
//
// Step 4: how many requests did the single page load make? List three by name.
// The single page load made 11 requests.
// Three requests were: index.html, script.js, and style.css.
//
// Step 6: which files changed when you added the sixth artist, which did not,
// and why is that separation the point?
// Only artists.json changed when I added the sixth artist. script.js did not change.
// This separation means that the artist data can be changed without changing
// the JavaScript code that renders the cards.
//
// Step 7: paste the console error the broken artists.json produced.
//Uncaught (in promise) SyntaxError: Expected double-quoted property name in JSON at position 787 (line 37 column 3)
//
// Step 8: build one artist object, JSON.stringify() it, log the text,
// JSON.parse() it back, and log one property of the result.
const artist = {
  name: "Imagine Dragons",
  genre: "Pop rock",
  total: "10:00",
};

const artistText = JSON.stringify(artist);
console.log(artistText);

const parsedArtist = JSON.parse(artistText);
console.log(parsedArtist.name);
//
// STRETCH, step 9: describe your page as a system. Name the client, name the
// server, and state what the request asked for and what the response carried.
// The client is the browser. The server is the web server serving the page and artists.json.
// The request asks for artists.json.
// The response carries the artist data as JSON.
