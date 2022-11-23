// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;




const xhttp: XMLHttpRequest = new XMLHttpRequest();
xhttp.onload = function() {
  console.log("bla");
}
xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
