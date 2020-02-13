/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
//import axios from 'axios';
// axios.<method> will now provide autocomplete and parameter typings
//axios.get('https://api.github.com/users/KateAnn19');

//let data = axios.get('https://api.github.com/users/KateAnn19', {

//console.log(data);



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 


let myInfo = {
  "login": "KateAnn19",
  "id": 48461273,
  "node_id": "MDQ6VXNlcjQ4NDYxMjcz",
  "avatar_url": "https://avatars1.githubusercontent.com/u/48461273?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/KateAnn19",
  "html_url": "https://github.com/KateAnn19",
  "followers_url": "https://api.github.com/users/KateAnn19/followers",
  "following_url": "https://api.github.com/users/KateAnn19/following{/other_user}",
  "gists_url": "https://api.github.com/users/KateAnn19/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/KateAnn19/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/KateAnn19/subscriptions",
  "organizations_url": "https://api.github.com/users/KateAnn19/orgs",
  "repos_url": "https://api.github.com/users/KateAnn19/repos",
  "events_url": "https://api.github.com/users/KateAnn19/events{/privacy}",
  "received_events_url": "https://api.github.com/users/KateAnn19/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kate ",
  "company": null,
  "blog": "",
  "location": "Lafayette, CO",
  "email": null,
  "hireable": true,
  "bio": "I am a software development student learning Javascript, HTML and CSS currently",
  "public_repos": 35,
  "public_gists": 1,
  "followers": 2,
  "following": 4,
  "created_at": "2019-03-12T01:23:48Z",
  "updated_at": "2020-02-13T04:24:48Z"
}

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

let container = document.querySelector('.cards');


function userProfiles(obj){
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
  username = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: `
  link.href= obj.html_url;
  followers1.textContent = `Followers: ${obj.followers}`;
  following2.textContent = `Following: ${obj.following}`;
  bio.textContent = obj.bio;

  cardContainer.appendChild(imageTag);
  cardConatiner.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followers1);
  cardInfo.appendChild(following2);
  cardInfo.appendChild(bio);

  return cardContainer;

}

axios.get('https://api.github.com/users/KateAnn19', {
        params: {
        ID: 12345
        }
    })
      .then(response => {
        // Remember response is an object, response.data is an array.
        response.data.forEach(content => {
            //let button = buttonCreator(item);
            container.appendChild(userProfiles(content));
        })
    })
    .catch( () => {
        console.log("Error:");
    })





// data.map(content => {
//   // Remember, we always need to return something when we use .map
//   return 
// });

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
let tetondan = "https://api.github.com/users/tetondan";
let dustinemyers = "https://api.github.com/users/dustinmyers";
let justsml = "https://api.github.com/users/luishrd";
let bigknewll = "https://api.github.com/users/bigknell";
let kate = "https://api.github.com/users/KateAnn19";