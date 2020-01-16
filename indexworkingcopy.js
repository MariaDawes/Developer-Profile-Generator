const questions = [
  
];

function writeToFile(fileName, data) {
 
}


function init() {

  // function init() - inputs username and favorite color 
  var inquirer = require("inquirer");
  
  inquirer.prompt([
      {
          type: "input",
          message: "What is your username?",
          name: "username"
      },
      {
          type: "list",
          message: "What is your favorite color?",
          name: "colors",
          choices: [
            "Green", 
            "Blue", 
            "Pink", 
            "Red"
          ]
      }
  ])
  .then(function(response) {
    
      if ((response.username) != ""){
        
        const username = (response.username);
        const favcolor = (response.colors);

        console.log("username:", username)
        console.log("color:", favcolor);

        // gets the information needed from Github, using the username provided
        
        //const fs = require("fs");
        const axios = require("axios");
        const queryUrl = `https://api.github.com/users/${username}`;
        console.log(queryUrl);
        
        axios.get(queryUrl).then(function(res) {
           
            const repoAll = res.data;  
            console.log(res.data);

            const loginUser = res.data.login;
            console.log(res.data.login);

            const pictureUser = res.data.avatar_url;
            console.log(pictureUser);

            const bioUser = res.data.bio;
            console.log("bio:", bioUser);

            const reponumberUser = res.data.public_repos;
            console.log("repo:", reponumberUser);

            const followersUser = res.data.followers;
            console.log("follower:", followersUser);

            const followingUser = res.data.following;
            console.log("following:", followingUser);

            const starUser = res.data.public_gists;
            console.log("star:", starUser);

            // link user location via googel maps
            
            const locationUser = res.data.location;
            console.log("location:", locationUser);

            // links

            const gitprofilelinkUser = res.data.html_url;
            console.log("Gitprofile link:", gitprofilelinkUser);

            const bloglinkUser = res.data.blog;
            console.log("blog link:", bloglinkUser);
        
          
         });  // end axios

      } //end if 

      else{
        console.log("Please enter a valid username!");
        init(); 
      }  // end else

  })  // end response function

} // end init function


 //   




init(); 
// go to Github website and get the information needed
// write this information in the pdf file 