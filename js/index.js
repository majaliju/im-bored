document.addEventListener('DOMContentLoaded', () => {

// define some variables 'globally' for easier use later
const mainBody = document.getElementById("main-body")
const favsBody = document.getElementById('favs-body')
const favsList = document.getElementById("favs-list")
const boredButton = document.getElementById('bored-button')
const favButton = document.getElementById('fav-button')

// our `I'm still bored!' button that brings user a new activity
boredButton.addEventListener('click', (e) => {
  getNewActivity()
})

// calls the API for a new activity
// then shows that activity on the page
function getNewActivity() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => showNewActivity(data))
}

// shows a new activity on the page
// also adds the `Save for later!` button for user
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

    // create our favButton, which will save items for later
    const favButton = document.createElement('button')
    mainBody.append(favButton)
    favButton.innerText = "Save for later!"
      
      favButton.addEventListener('click', (e) => {
        addToFavorites(database)
        favButton.disabled = true
        favButton.innerText = "Saved!"
  })
}

function addToFavorites(database){
  const li = document.createElement('li')
  favsList.append(li)
  li.innerText = database.activity

}
})

