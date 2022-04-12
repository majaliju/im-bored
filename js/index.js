
document.addEventListener('DOMContentLoaded', () => {
// define some variables "globally' for easier use later
const mainBody = document.getElementById("main-body")
const favsList = document.getElementById("favs-list")
const boredButton = document.getElementById('bored-button')
const favButton = document.getElementById('fav-button')

// get our activity, then call the showNewActivity function
// which will display the activity
function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    // console.log("data: ", data)
    showNewActivity(data)
    addToFavorites(data)
  })
}

// note to add element
// add a spacebar event (event delegation, mentioned by cohort lead Michael)
  boredButton.addEventListener('click', (e) => {
    getActivities()
  })

  favButton.addEventListener('click', (e) => {
    getActivities()
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
    
}

function addToFavorites(database){
  // show fav-button once it exists
  // favButton.style.display = block;
  const ul = document.createElement('ul')
  const li = document.createElement('li')
  favsList.append(ul)
  ul.append(li)
  li.innerText = database.activity


  // store to a DOM node --> text =${database.activity} to show that activity
  // keep a numbered list
}


})




