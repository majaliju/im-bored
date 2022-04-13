/* we have 3 issues that need to be fixed:
(1) need to eliminate the duplicate LI that appears on the click event on favButton
(2) need to eliminate the activity-history that appears on favButton click event
  --> each click event should only save the current activity onto favsList
(3) need to have the favButton hidden on start-up, only activated once the boredButton is clicked

*/


document.addEventListener('DOMContentLoaded', () => {

// define some variables 'globally' for easier use later
const mainBody = document.getElementById("main-body")
const favsBody = document.getElementById('favs-body')
const favsList = document.getElementById("favs-list")
const boredButton = document.getElementById('bored-button')
const favButton = document.getElementById('fav-button')

// our boredButton event
boredButton.addEventListener('click', (e) => {
  getNewActivity()
})


// get our activity, then call the showNewActivity function
// which will display the activity
function getNewActivity() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => showNewActivity(data))


  // maybe place an if-favButton-event-clicked, here?

}


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

      // our favorites-list button event
  favButton.addEventListener('click', (e) => {
    // favButton.style.display = "block"
    addToFavorites(database)
  })
    
}

// this function should add the shown-above-item to the favs-list
// but not refresh the page or move on to the next action

function addToFavorites(database){
  const li = document.createElement('li')
  favsList.append(li)
  li.innerText = database.activity
}
})

