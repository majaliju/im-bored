
document.addEventListener('DOMContentLoaded', () => {
  
})


// define some variables globally for easier use later
const mainBody = document.getElementById("main-body")
const boredButton = document.getElementById('bored-button')


// our first function, stores the data in a variable
// then commences to loadActivity and start our page
function getActivities() { 
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then(data => {
    console.log("data: ", data)
    showNewActivity(data)
  })

}

// our button action, that loads an activity for the user

  boredButton.addEventListener('click', (e) => {
    wipeMainBody()
    getActivities()
    // showNewActivity();
  })
    
// this function clears our mainBody div element
function wipeMainBody (){
  mainBody.innerHTML = ""
}

// shows a newActivity on the page
function showNewActivity(database){
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')
    mainBody.append(h1)
    mainBody.append(h2)
    h1.innerText = database.activity
    h2.innerText = `For the ${database.type} lovers`
    mainBody.append(boredButton)
    boredButton.innerText = "I'm still bored!"
    
    // extra challenge
    // optimize the writing that avoiding the "blank slate" wiping of mainBody
    // mainBody --> use the new event, no point in clearing
    
}

// ideas for the 3rd event, to add more functionality 

// store a favorites list
// add a spacebar event (event delegation, mentioned by cohort lead Michael)


