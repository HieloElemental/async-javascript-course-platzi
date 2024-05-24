import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

const postData = (urlApi, data) => {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  "title": "T-shirt",
  "price": 10,
  "description": "Wear this amazaming shirt to hang out with your mates",
  "categoryId": 1,
  "images": [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8QVCcktRyfDcAomIcr8iSTlJt2v26jrkwhUjUXB0LA&s"
  ],
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))