// testing out the fetch request with the Michael Jackson object

document.addEventListener('DOMContentLoaded', () => {
  testFetch();
})


const testFetch = (() => {
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => console.log(data.activity))
})
