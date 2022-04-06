// testing out the fetch request with the Michael Jackson object

fetch("https://tastedive.com/api/similar?q=michael+jackson")
  .then(response => response.json())
  .then(data => console.log(data))