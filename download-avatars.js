

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


  request.get(requestOptions, (error, response, body) => {
    if (error) {
      console.log( "Error: ", err);
      return
    }

      let contributors = JSON.parse(body);
      console.log(contributors);
      contributors.map( (x) => {
        console.log(x.avatar_url);

      })

  });

}





getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});