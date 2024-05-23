const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlApi, callback) => {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      xhttp.status === 200 && callback(null, JSON.parse(xhttp.responseText))
    } else {
      const error = new Error('Error' + urlApi);
      return callback(error, null);
    }
  }
  xhttp.send();
}
