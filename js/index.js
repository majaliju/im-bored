// testing out the fetch request with the Michael Jackson object

document.addEventListener('DOMContentLoaded', () => {
  getActivities()
})

// define our activities database so we only fetch once
let database 

// define some variables global for easier use later
const mainBody = document.getElementById("main-body")



// our first function, stores the data in a variable 
function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    database = data
  })
  loadActivity()

}

// our button action, that loads an activity for the user
function loadActivity() {
  const boredButton = document.getElementById('bored-button')

  boredButton.addEventListener('click', (e) => {
    wipeMainBody()
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    mainBody.append(h1)
    mainBody.append(h2)
    // mainBody.append(h3)
    h1.innerText = database.activity
    h2.innerText = `For the ${database.type} lovers`
    // h3.innerText = 

  })


  // change boredButton's innerText to "I'm still bored!" for reset
}
    
// this function clears our mainBody div element
function wipeMainBody (){
  const mainBody = document.getElementById("main-body")
  mainBody.innerHTML = ""
}

