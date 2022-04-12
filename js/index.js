
document.addEventListener('DOMContentLoaded', () => {
// define some variables "globally' for easier use later
const mainBody = document.getElementById("main-body")
const favsBody = document.getElementById('favs-body')
const favsList = document.getElementById("favs-list")
const boredButton = document.getElementById('bored-button')
const favButton = document.getElementById('fav-button')

// get our activity, then call the showNewActivity function
// which will display the activity
function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    showNewActivity(data)
    // addToFavorites(data)
  })
}

  // our boredButton event
  boredButton.addEventListener('click', (e) => {
    getActivities()
  })

  // our favorites-list button event
  favButton.addEventListener('click', (e) => {
    // add to favorites and also show prior entries
    console.log("e.target: ", e.target)
    addToFavorites()
    console.log('addToFavorites: ', addToFavorites())
  })

// shows a newActivity on the page
function showNewActivity(database){
    mainBody.innerHTML = ""
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    mainBody.append(h1)
    mainBody.append(h2)
    h1.innerText = database.activity
    h2.innerText = `For the ${database.type} lovers`
    mainBody.append(boredButton)
    boredButton.innerText = "I'm still bored!"
    mainBody.append(favButton)
    favButton.innerText = "Save for later!"
    
}

function addToFavorites(database){
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    const database = data
  })

  // show fav-button once it exists
  // favButton.style.display = block;
  const li = document.createElement('li')
  favsList.append(li)
  li.innerText = database.activity

  // issue here is two nodes are created: one empty, one populated

  // store to a DOM node --> text =${database.activity} to show that activity
  // keep a numbered list
}


})




