// testing out the fetch request with the Michael Jackson object

document.addEventListener('DOMContentLoaded', () => {
  getActivities()
})

// define our activities database so we only fetch once
let database 

// define some variables global for easier use later
const mainBody = document.getElementById("main-body")
const boredButton = document.getElementById('bored-button')


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
  boredButton.addEventListener('click', (e) => {
    wipeMainBody()
    showNewActivity();
  })
}
    
// this function clears our mainBody div element
function wipeMainBody (){
  const mainBody = document.getElementById("main-body")
  mainBody.innerHTML = ""
}

// shows a newActivity on the page
function showNewActivity(){
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    mainBody.append(h1)
    mainBody.append(h2)
    h1.innerText = database.activity
    h2.innerText = `For the ${database.type} lovers`
    mainBody.append(boredButton)
    boredButton.innerText = "I'm still bored!"
    loadActivity()
    
    
}


// function loadNewActivity(){
//   const stillBoredButton = document.createElement('button')
//   mainBody.append(stillBoredButton)
//   stillBoredButton.innerText = "I'm still bored!"

//   stillBoredButton.addEventListener('click', (e)=>{
//     wipeMainBody()
//     showNewActivity();
//   })
// }
