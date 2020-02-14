//lecture source (lambda - Applied JS - components II - Christina 2/13/20 - Web28FT)



/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//import axios from 'axios'; //I'm using CDN for this - not imports so this didn't work - importing would require an install 
// axios.<method> will now provide autocomplete and parameter typings
//axios.get('https://api.github.com/users/KateAnn19');

//let data = axios.get('https://api.github.com/users/KateAnn19', {

//console.log(data);



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 




   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



//---------------------------------------------------------------------------------------------------
//refactor this below when finished using comma syntax for document.createElement so it doesn't need to be repeated - also watch lecture video for explanation 
//--------------------------------------------------------------------------------------------------------------

function userProfiles(obj){
  for (let key in obj) {
    if (obj[key] == null | undefined) {
      obj[key] = 'User has not provided a '+key+'.';
    }
    if (typeof obj[key] == Number) {
      obj[key] = obj[key].toString();
    }
  }


  let cardContainer = document.createElement('div');
  let imageTag = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let link = document.createElement('a');
  let followers1 = document.createElement('p');
  let following2 = document.createElement('p');
  let bio = document.createElement('p');

  cardContainer.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  
  imageTag.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  
  
  link.href= obj.html_url;
  profile.textContent = `Profile: ${link}`;
  followers1.textContent = `Followers: ${obj.followers}`;
  following2.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;

  cardContainer.appendChild(imageTag);
  cardContainer.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers1);
  cardInfo.appendChild(following2);
  cardInfo.appendChild(bio);

  console.log(cardInfo)

  

  return cardContainer;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
//this is declared outside the function and is the big container the individual bios will be attached to. It needs it declared outside because of scope
//--------------------------------------------------------------------------------------------------------------------------------------------------------
let container = document.querySelector('.cards'); 
//---------------------------------------------------------------------------------------------------

// Step 1: using axios, send a GET request to the following URL 
//            (replacing the placeholder with your Github name):
//            https://api.github.com/users/<your name>


//comment this out to stop requests happening so i don't get a limit - git hub does have a rate limit
function getUserInfo(username){
  axios.get(`https://api.github.com/users/${username}`)
      .then(response => {

        //console.log(response);this is the first thing you want to do when you do a get request because you want to see the data  
        // Remember response is a BIG object, response.data is an array.
        //this is where the parent element will be attached

        let newUser = userProfiles(response.data);
        container.appendChild(newUser);
      })  
      
      //don't put semicolon will break the chain 
      .catch(error => {
        console.log("Error:", error);
      });
}
getUserInfo('KateAnn19')

axios.get('https://api.github.com/users/KateAnn19/followers')
       .then(response => {
        response.data.forEach(content => {

         //followersArray.push(content.login);
         getUserInfo(content.login);
         
        })

        // followersArray.forEach(follower => {
        //   getUserInfo(follower)
        // })
         //console.log(followersArray);  
       })

       .catch(error => {
        console.log("Error:", error);
      });

     

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/


//----------------------------------------------------------------------------------------------------------
//class example below - need to review video and go over 
//----------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
//Questions for after hours 
//---------------------------------------------------------------------------------------
/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards


           create a new component - where is this exactly?
*/