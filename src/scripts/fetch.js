import fetch from "node-fetch";

fetch("http://51.83.185.162:4000/users")
  .then( http => http.json() )
  .then( body => console.log(body));