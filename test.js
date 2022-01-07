import fetch from 'node-fetch';

fetch('http://51.83.185.162:4000/attraction/all')
  .then(response => response.json())
  .then(data => console.log(data));