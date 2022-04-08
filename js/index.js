// testing out the fetch request with the Michael Jackson object

document.addEventListener('DOMContentLoaded', () => {
  getActivities()
})

// define our activities database so we only fetch once
let database 

function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    database = data
    // console.log("activities: ", database)
    // console.log("show activity: ", database.activity)
  })
  loadActivity()

}
  
function loadActivity() {
  const boredButton = document.getElementById('bored-button')

  addEventListener('click', (e) => {
    console.log(e.target)
  })
}
    


// add a clickEvent for #bored-button 
// data.activity 
// 