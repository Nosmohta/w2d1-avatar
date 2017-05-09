
function getRepoContributors(repoOwner, repoName, cb){

var request = require("request");
var GITHUB_USER = "Nosmohta";
var GITHUB_TOKEN = "614ba4b68f00f8095735e872add3368d9072a0cb";
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log( requestURL);

const requestOptions = {
  url: requestURL,
  headers: {
    "user-agent": "GitHub Avatar Downloader - Student Project"
  }




}



// enter a user-agent: Value for the request? "GitHub Avatar Downloader - Student Project"

request.get(requestOptions, (error, response, body) => {
  if (error) {
    console.log( "Error: ", err);
  }

    let json = JSON.parse(body);
    console.log(json);



})



       // .on( "error", (err) => {
       //    console.log( "Error: ", err);
       // })
       // .on( "response", (data) => {
       //    console.log( "head : ", data.head)
       //    //console.log( data);

       // });







}




getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});