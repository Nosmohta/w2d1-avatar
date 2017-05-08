
function getRepoContributors(repoOwner, repoName, cb){

var request = require("request");
var GITHUB_USER = "Nosmohta";
var GITHUB_TOKEN = "614ba4b68f00f8095735e872add3368d9072a0cb";
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

console.log('Welcome to the GitHub Avatar Downloader!');
console.log( requestURL);





}




getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});