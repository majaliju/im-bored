// testing out the fetch request with the Michael Jackson object

document.addEventListener('DOMContentLoaded', () => {
  getActivities()
})

let database 

function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    database = data
    console.log("activities: ", database)
    console.log("show activity: ", database.activity)
  })
}
  
    


// add a clickEvent for #bored-button 
// data.activity 
// 